/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const browser = chrome;

function log(message) { console.log("[LBNG] " + message); }
function warn(message) { console.warn("[LBNG] " + message); }

function getElement(id) { return document.getElementById(id); }

var gStorage = browser.storage.local;

// Initialize form
//
function initializeForm() {
	//log("initializeForm");

	browser.storage.local.get("sync", onGotSync);

	function onGotSync(options) {
		if (browser.runtime.lastError) {
			warn("Cannot get options: " + error);
			$("#alertRetrieveError").dialog("open");
			return;
		}

		gStorage = options["sync"]
				? browser.storage.sync
				: browser.storage.local;

		gStorage.get(onGot);
	}

	function onGot(options) {
		if (browser.runtime.lastError) {
			warn("Cannot get options: " + error);
			$("#alertRetrieveError").dialog("open");
			return;
		}

		setTheme(options["theme"]);

		let lockdownHours = options["lockdownHours"];
		if (lockdownHours > 0) {
			getElement("hours").value = lockdownHours;
		}

		let lockdownMins = options["lockdownMins"];
		if (lockdownMins > 0) {
			getElement("mins").value = lockdownMins;
		}

		for (let set = 1; set <= NUM_SETS; set++) {
			let lockdown = options[`lockdown${set}`];
			if (lockdown) {
				getElement(`blockSet${set}`).checked = lockdown;
			}

			// Append custom set name to check box label (if specified)
			let setName = options[`setName${set}`];
			if (setName) {
				getElement(`blockSetLabel${set}`).innerText += ` (${setName})`;
			}
		}
	}
}

// Handle activate button click
//
function onActivate() {
	//log("onActivate");

	// Get lockdown duration
	let hours = getElement("hours").value;
	let mins = getElement("mins").value;
	let duration = hours * 3600 + mins * 60;

	if (!duration || duration < 0) {
		$("#alertNoDuration").dialog("open");
		return;
	}

	// Calculate end time for lockdown	
	let endTime = Math.floor(Date.now() / 1000) + duration;

	// Request lockdown for each selected set
	let noneSelected = true;
	for (let set = 1; set <= NUM_SETS; set++) {
		let selected = getElement(`blockSet${set}`).checked;
		if (selected) {
			noneSelected = false;
			let message = {
				type: "lockdown",
				endTime: endTime,
				set: set
			};
			// Request lockdown for this set
			browser.runtime.sendMessage(message);
		}
	}

	if (noneSelected) {
		$("#alertNoSets").dialog("open");
		return;
	}

	// Save options for next time
	let options = {};
	options["lockdownHours"] = hours;
	options["lockdownMins"] = mins;
	for (let set = 1; set <= NUM_SETS; set++) {
		options[`lockdown${set}`] = getElement(`blockSet${set}`).checked;
	}
	gStorage.set(options, function () {
		if (browser.runtime.lastError) {
			warn("Cannot set options: " + browser.runtime.lastError.message);
		}
	});

	// Request tab close
	browser.runtime.sendMessage({ type: "close" });
}

// Handle cancel button click
//
function onCancel() {
	//log("onCancel");

	// Request tab close
	browser.runtime.sendMessage({ type: "close" });
}

/*** STARTUP CODE BEGINS HERE ***/

// Use HTML for first check box to create other check boxes
let blockSetHTML = $("#blockSets").html();
for (let set = 2; set <= NUM_SETS; set++) {
	let nextSetHTML = blockSetHTML
			.replace(/Block Set 1/g, `Block Set ${set}`)
			.replace(/(id|for)="(\w+)1"/g, `$1="$2${set}"`);
	$("#blockSets").append(nextSetHTML);
}

// Set up JQuery UI widgets
$("#activate").button();
$("#activate").click(onActivate);
$("#cancel").button();
$("#cancel").click(onCancel);

// Initialize alert dialogs
$("div[id^='alert']").dialog({
	autoOpen: false,
	modal: true,
	width: 500,
	buttons: {
		OK: function () { $(this).dialog("close"); }
	}
});

$("#form").show();

window.addEventListener("DOMContentLoaded", initializeForm);
