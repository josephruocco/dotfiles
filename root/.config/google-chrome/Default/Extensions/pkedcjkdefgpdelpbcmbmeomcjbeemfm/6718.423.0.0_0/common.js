'use strict';var g,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,fa=function(){fa=function(){};ba.Symbol||(ba.Symbol=ha)},ha=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}(),ja=function(){fa();var a=ba.Symbol.iterator;a||(a=ba.Symbol.iterator=ba.Symbol("iterator"));"function"!=
typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(this)}});ja=function(){}},ia=function(a){var b=0;return ka(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},ka=function(a){ja();a={next:a};a[ba.Symbol.iterator]=function(){return this};return a},ma=function(a){ja();var b=a[Symbol.iterator];return b?b.call(a):ia(a)},na=function(a,b){if(b){var c=ba;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=
a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}};
na("Promise",function(a){function b(){this.b=null}function c(a){return a instanceof e?a:new e(function(b){b(a)})}if(a)return a;b.prototype.f=function(a){null==this.b&&(this.b=[],this.g());this.b.push(a)};b.prototype.g=function(){var a=this;this.h(function(){a.s()})};var d=ba.setTimeout;b.prototype.h=function(a){d(a,0)};b.prototype.s=function(){for(;this.b&&this.b.length;){var a=this.b;this.b=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(u){this.j(u)}}}this.b=null};b.prototype.j=
function(a){this.h(function(){throw a;})};var e=function(a){this.f=0;this.h=void 0;this.b=[];var b=this.j();try{a(b.resolve,b.reject)}catch(n){b.reject(n)}};e.prototype.j=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.A),reject:a(this.g)}};e.prototype.A=function(a){if(a===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof e)this.B(a);else{a:switch(typeof a){case "object":var b=null!=a;break a;case "function":b=
!0;break a;default:b=!1}b?this.u(a):this.s(a)}};e.prototype.u=function(a){var b=void 0;try{b=a.then}catch(n){this.g(n);return}"function"==typeof b?this.F(b,a):this.s(a)};e.prototype.g=function(a){this.m(2,a)};e.prototype.s=function(a){this.m(1,a)};e.prototype.m=function(a,b){if(0!=this.f)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.f);this.f=a;this.h=b;this.o()};e.prototype.o=function(){if(null!=this.b){for(var a=0;a<this.b.length;++a)f.f(this.b[a]);this.b=null}};
var f=new b;e.prototype.B=function(a){var b=this.j();a.rg(b.resolve,b.reject)};e.prototype.F=function(a,b){var c=this.j();try{a.call(b,c.resolve,c.reject)}catch(u){c.reject(u)}};e.prototype.then=function(a,b){function c(a,b){return"function"==typeof a?function(b){try{d(a(b))}catch(ra){f(ra)}}:b}var d,f,h=new e(function(a,b){d=a;f=b});this.rg(c(a,d),c(b,f));return h};e.prototype.catch=function(a){return this.then(void 0,a)};e.prototype.rg=function(a,b){function c(){switch(d.f){case 1:a(d.h);break;
case 2:b(d.h);break;default:throw Error("Unexpected state: "+d.f);}}var d=this;null==this.b?f.f(c):this.b.push(c)};e.resolve=c;e.reject=function(a){return new e(function(b,c){c(a)})};e.race=function(a){return new e(function(b,d){for(var e=ma(a),f=e.next();!f.done;f=e.next())c(f.value).rg(b,d)})};e.all=function(a){var b=ma(a),d=b.next();return d.done?c([]):new e(function(a,e){function f(b){return function(c){h[b]=c;k--;0==k&&a(h)}}var h=[],k=0;do h.push(void 0),k++,c(d.value).rg(f(h.length-1),e),d=
b.next();while(!d.done)})};return e});na("Promise.prototype.finally",function(a){return a?a:function(a){return this.then(function(b){return Promise.resolve(a()).then(function(){return b})},function(b){return Promise.resolve(a()).then(function(){throw b;})})}});
var pa=function(a){function b(b){return a.next(b)}function c(b){return a.throw(b)}return new Promise(function(d,e){function f(a){a.done?d(a.value):Promise.resolve(a.value).then(b,c).then(f,e)}f(a.next())})},qa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={qn:!0},va={};try{va.__proto__=ua;ta=va.qn;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var wa=sa,l=function(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ra=b.prototype},xa=function(a){if(!(a instanceof Array)){a=ma(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},ya=function(){this.m=!1;this.h=null;this.j=void 0;this.b=1;this.g=this.s=0;this.u=this.f=null},za=function(a){if(a.m)throw new TypeError("Generator is already running");
a.m=!0};ya.prototype.o=function(a){this.j=a};var Aa=function(a,b){a.f={kc:b,kk:!0};a.b=a.s||a.g};ya.prototype.return=function(a){this.f={return:a};this.b=this.g};var Ba=function(a,b,c){a.b=c;return{value:b}};ya.prototype.Wd=function(a){this.b=a};
var Ca=function(a,b,c){a.s=b;void 0!=c&&(a.g=c)},Ea=function(a,b){a.b=b;a.s=0},Fa=function(a){a.s=0;var b=a.f.kc;a.f=null;return b},Ga=function(a){this.b=new ya;this.f=a},La=function(a,b){za(a.b);var c=a.b.h;if(c)return Ja(a,"return"in c?c["return"]:function(a){return{value:a,done:!0}},b,a.b.return);a.b.return(b);return Ka(a)},Ja=function(a,b,c,d){try{var e=b.call(a.b.h,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.b.m=!1,e;var f=e.value}catch(h){return a.b.h=
null,Aa(a.b,h),Ka(a)}a.b.h=null;d.call(a.b,f);return Ka(a)},Ka=function(a){for(;a.b.b;)try{var b=a.f(a.b);if(b)return a.b.m=!1,{value:b.value,done:!1}}catch(c){a.b.j=void 0,Aa(a.b,c)}a.b.m=!1;if(a.b.f){b=a.b.f;a.b.f=null;if(b.kk)throw b.kc;return{value:b.return,done:!0}}return{value:void 0,done:!0}},Ma=function(a){this.next=function(b){za(a.b);a.b.h?b=Ja(a,a.b.h.next,b,a.b.o):(a.b.o(b),b=Ka(a));return b};this.throw=function(b){za(a.b);a.b.h?b=Ja(a,a.b.h["throw"],b,a.b.o):(Aa(a.b,b),b=Ka(a));return b};
this.return=function(b){return La(a,b)};ja();this[Symbol.iterator]=function(){return this}},Na=function(a,b){Ma.prototype=a.prototype;return new Ma(new Ga(b))},Oa=Oa||{},Pa=this,Qa=function(a){return void 0!==a},Ra=function(a){return"string"==typeof a},Ta=function(a){return"boolean"==typeof a},m=function(a){return"number"==typeof a},Ua=/^[\w+/_-]+[=]{0,2}$/,Wa=null,Xa=function(a,b){a=a.split(".");b=b||Pa;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},Ya=function(){},ab=function(a){a.Oh=
void 0;a.Ha=function(){return a.Oh?a.Oh:a.Oh=new a}},bb=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},eb=function(a){return null===a},fb=function(a){return"array"==bb(a)},gb=function(a){var b=bb(a);return"array"==b||"object"==b&&"number"==typeof a.length},hb=function(a){return"function"==bb(a)},ib=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},kb=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(jb);try{delete a[jb]}catch(b){}},
jb="closure_uid_"+(1E9*Math.random()>>>0),lb=0,mb=function(a,b,c){return a.call.apply(a.bind,arguments)},nb=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p=mb:p=nb;return p.apply(null,
arguments)},ob=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},q=Date.now||function(){return+new Date},r=function(a,b){a=a.split(".");var c=Pa;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&Qa(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}},t=function(a,b){function c(){}c.prototype=b.prototype;a.ra=b.prototype;a.prototype=
new c;a.prototype.constructor=a;a.Rw=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var chrome=chrome||window.chrome||{};chrome.cast=chrome.cast||{};chrome.cast.media=chrome.cast.media||{};var mojo={};var qb=function(){return Promise.reject(Error("Not implemented"))};var rb=function(a){this.b=a},tb=function(a){var b=sb.get(a);b||(b=new rb(a),sb.set(a,b));return b},wb=function(a){a.level>=ub&&vb.forEach(function(b){return b(a)})};rb.prototype.log=function(a,b,c){if(!(a<ub)){"function"==typeof b&&(b=b());b=b.replace(xb,"[Redacted URL]");b=b.replace(yb,"[Redacted domain/email]");b=b.replace(zb,function(a,b,c){return b+":<"+c.substr(-4)+">"});var d={J:this.b,level:a,time:Date.now(),message:b,kc:c};vb.forEach(function(a){return a(d)})}};
rb.prototype.error=function(a,b){this.log(3,a,b)};var v=function(a,b,c){a.log(2,b,c)};rb.prototype.info=function(a,b){this.log(1,a,b)};var Ab=function(a,b,c){a.log(0,b,c)},Cb=function(a){a=Bb.indexOf(a);return-1==a?0:a},Eb=function(a){return 600>=a?0:850>=a?1:950>=a?2:3},vb=[],sb=new Map,Bb=["FINE","INFO","WARNING","SEVERE"],yb=/(([\w.+-]+@)|((www|m|mail|ftp)[.]))[\w.-]+[.][\w-]{2,4}/gi,xb=/(data:|https?:\/\/)\S+/gi,zb=/(dial|cast):<([a-zA-Z0-9]+)>/gi,ub=1;var Fb=function(a){this.f=a;this.h=Date.now()},Gb=function(a,b){null!=b&&(a+="_"+b);return a};Fb.prototype.b=function(a){Hb(Gb(this.f,a),Date.now()-this.h)};var Hb=function(a,b){0>b&&(v(Ib,"Timing analytics event with negative time"),b=0);1E4<b&&(b=1E4);try{chrome.metricsPrivate.recordTime(a,b)}catch(c){v(Ib,"Failed to record time "+b+" in "+a)}},Ib=tb("mr.Timing"),Jb=function(a){Fb.call(this,a)};l(Jb,Fb);
Jb.prototype.b=function(a){a=Gb(this.f,a);var b=Date.now()-this.h;if(0>b)v(Kb,"Timing analytics event with negative time");else{1E4>b&&(b=1E4);18E4<b&&(b=18E4);try{chrome.metricsPrivate.recordMediumTime(a,b)}catch(c){v(Kb,"Failed to record time "+b+" in "+a)}}};var Kb=tb("mr.MediumTiming"),Lb=function(a){Fb.call(this,a)};l(Lb,Fb);
Lb.prototype.b=function(a){a=Gb(this.f,a);var b=Date.now()-this.h;if(0>b)v(Ob,"Timing analytics event with negative time");else{18E4>b&&(b=18E4);36E5<b&&(b=36E5);try{chrome.metricsPrivate.recordLongTime(a,b)}catch(c){v(Ob,"Failed to record time "+b+" in "+a)}}};
var Ob=tb("mr.LongTiming"),Pb=tb("mr.Analytics"),Qb=function(a){try{chrome.metricsPrivate.recordUserAction(a)}catch(b){v(Pb,"Failed to record event "+a)}},Rb=function(a,b,c){var d,e=0,f;for(f in c)e++,c[f]==b&&(d=f);if(d){c={metricName:a,type:"histogram-linear",min:1,max:e,buckets:e+1};try{chrome.metricsPrivate.recordValue(c,b)}catch(h){v(Pb,"Failed to record enum value "+d+" ("+b+") in "+a,h)}}else Pb.error("Unknown analytics value, "+b+" for histogram, "+a,Error())},Sb=function(a,b){try{if(0>b)throw Error("Invalid count for "+
a+": "+b);100<b&&v(Pb,"Small count for "+a+" exceeded limits: "+b,Error());chrome.metricsPrivate.recordSmallCount(a,b)}catch(c){v(Pb,"Failed to record small count "+a+" ("+b+")",c)}};var Tb=function(){var a=this;this.b=new Promise(function(b,c){a.h=b;a.f=c})};Tb.prototype.resolve=function(a){this.h(a)};Tb.prototype.reject=function(a){this.f(a)};var Ub=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ub);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(Ub,Error);Ub.prototype.name="CustomError";var Vb;var Wb=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");Ub.call(this,c+a[d])};t(Wb,Ub);Wb.prototype.name="AssertionError";var Xb=function(a,b){throw new Wb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Yb=function(a){return a[a.length-1]},Zb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(Ra(a))return Ra(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Ra(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},$b=function(a,b){for(var c=Ra(a)?a.split(""):a,d=a.length-1;0<=
d;--d)d in c&&b.call(void 0,c[d],d,a)},ac=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=Ra(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var n=h[k];b.call(c,n,k,a)&&(e[f++]=n)}return e},bc=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=Ra(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},cc=Array.prototype.reduce?function(a,
b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;w(a,function(c,f){d=b.call(void 0,d,c,f,a)});return d},dc=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Ra(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1},ec=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,
e[f],f,a))return!1;return!0},gc=function(a,b,c){b=fc(a,b,c);return 0>b?null:Ra(a)?a.charAt(b):a[b]},fc=function(a,b,c){for(var d=a.length,e=Ra(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1},hc=function(a,b){a:{for(var c=Ra(a)?a.split(""):a,d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){b=d;break a}b=-1}return 0>b?null:Ra(a)?a.charAt(b):a[b]},ic=function(a,b){return 0<=Zb(a,b)},jc=function(a){if(!fb(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0},
kc=function(a,b){ic(a,b)||a.push(b)},mc=function(a,b,c){var d;2==arguments.length||0>(d=Zb(a,c))?a.push(b):lc(a,d,0,b)},pc=function(a,b){b=Zb(a,b);var c;(c=0<=b)&&oc(a,b);return c},oc=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length},qc=function(a,b,c){b=fc(a,b,c);return 0<=b?(oc(a,b),!0):!1},rc=function(a,b){var c=0;$b(a,function(d,e){b.call(void 0,d,e,a)&&oc(a,e)&&c++})},sc=function(a){return Array.prototype.concat.apply([],arguments)},tc=function(a){return Array.prototype.concat.apply([],
arguments)},x=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},uc=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(gb(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}},lc=function(a,b,c,d){Array.prototype.splice.apply(a,vc(arguments,1))},vc=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)},wc=function(a,b){b=b||a;for(var c=
{},d=0,e=0;e<a.length;){var f=a[e++];var h=f;h=ib(h)?"o"+(h[jb]||(h[jb]=++lb)):(typeof h).charAt(0)+h;Object.prototype.hasOwnProperty.call(c,h)||(c[h]=!0,b[d++]=f)}b.length=d},yc=function(a,b){a.sort(b||xc)},zc=function(a,b){var c=xc;yc(a,function(a,e){return c(b(a),b(e))})},Ac=function(a){zc(a,function(a){return a.t})},Cc=function(a,b,c){if(!gb(a)||!gb(b)||a.length!=b.length)return!1;var d=a.length;c=c||Bc;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0},xc=function(a,b){return a>b?1:a<b?
-1:0},Bc=function(a,b){return a===b},Fc=function(a,b,c){var d={};w(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};var Gc=function(a,b){return 0==a.lastIndexOf(b,0)},Hc=function(a,b){return a.toLowerCase()==b.toLowerCase()},Ic=function(a){return/^[\s\xa0]*$/.test(a)},Jc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Kc=/&/g,Lc=/</g,Mc=/>/g,Nc=/"/g,Oc=/'/g,Pc=/\x00/g,Qc=/[\x00&<>"']/,Rc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)},Sc=function(a,b){a=Qa(void 0)?a.toFixed(void 0):String(a);var c=
a.indexOf(".");-1==c&&(c=a.length);return Rc("0",Math.max(0,b-c))+a},Tc=function(a){return null==a?"":String(a)},Uc=function(a){return Array.prototype.join.call(arguments,"")},Vc=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^q()).toString(36)},Xc=function(a,b){var c=0;a=Jc(String(a)).split(".");b=Jc(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",h=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||
["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=Wc(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||Wc(0==f[2].length,0==h[2].length)||Wc(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c},Wc=function(a,b){return a<b?-1:a>b?1:0},Yc=function(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};var Zc;a:{var $c=Pa.navigator;if($c){var bd=$c.userAgent;if(bd){Zc=bd;break a}}Zc=""}var cd=function(a){return-1!=Zc.indexOf(a)};var dd=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},ed=function(a,b){var c={},d;for(d in a)b.call(void 0,a[d],d,a)&&(c[d]=a[d]);return c},fd=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},gd=function(a){var b=0,c;for(c in a)b++;return b},hd=function(a){for(var b in a)return b},id=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},jd=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},kd=function(a,b){return null!==a&&b in a},ld=function(a,b){for(var c in a)if(a[c]==
b)return!0;return!1},nd=function(a){for(var b in a)return!1;return!0},pd=function(a){for(var b in a)delete a[b]},qd=function(a){var b={},c;for(c in a)b[c]=a[c];return b},rd=function(a){var b=bb(a);if("object"==b||"array"==b){if(hb(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=rd(a[c]);return b}return a},sd=function(a){var b={},c;for(c in a)b[a[c]]=c;return b},td="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),ud=function(a,
b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<td.length;f++)c=td[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},vd=function(a){var b=arguments.length;if(1==b&&fb(arguments[0]))return vd.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var wd=function(){return(cd("Chrome")||cd("CriOS"))&&!cd("Edge")};var xd=function(){return cd("iPhone")&&!cd("iPod")&&!cd("iPad")},yd=function(){return xd()||cd("iPad")||cd("iPod")};var zd=function(a){zd[" "](a);return a};zd[" "]=Ya;var Ad=function(a,b){try{return zd(a[b]),!0}catch(c){}return!1},Cd=function(a,b){var c=Bd;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Dd=cd("Opera"),Ed=cd("Trident")||cd("MSIE"),Fd=cd("Edge"),Gd=cd("Gecko")&&!(-1!=Zc.toLowerCase().indexOf("webkit")&&!cd("Edge"))&&!(cd("Trident")||cd("MSIE"))&&!cd("Edge"),Hd=-1!=Zc.toLowerCase().indexOf("webkit")&&!cd("Edge"),Id=Hd&&cd("Mobile"),Jd,Kd=Pa.navigator||null;Jd=Kd&&Kd.platform||"";var Ld=cd("Macintosh"),Md=cd("Windows"),Nd=cd("Linux")||cd("CrOS"),Od=cd("Android"),Pd=xd(),Qd=cd("iPad"),Rd=cd("iPod"),Sd=function(){var a=Pa.document;return a?a.documentMode:void 0},Td;
a:{var Ud="",Vd=function(){var a=Zc;if(Gd)return/rv:([^\);]+)(\)|;)/.exec(a);if(Fd)return/Edge\/([\d\.]+)/.exec(a);if(Ed)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Hd)return/WebKit\/(\S+)/.exec(a);if(Dd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Vd&&(Ud=Vd?Vd[1]:"");if(Ed){var Wd=Sd();if(null!=Wd&&Wd>parseFloat(Ud)){Td=String(Wd);break a}}Td=Ud}var Xd=Td,Bd={},Yd=function(a){return Cd(a,function(){return 0<=Xc(Xd,a)})},Zd;var $d=Pa.document;
Zd=$d&&Ed?Sd()||("CSS1Compat"==$d.compatMode?parseInt(Xd,10):5):void 0;var be=function(){this.b="";this.f=ae};be.prototype.Vd=!0;be.prototype.Fe=function(){return this.b};be.prototype.toString=function(){return"Const{"+this.b+"}"};var ae={},ce=function(a){var b=new be;b.b=a;return b};ce("");var ee=function(){this.b=de};ee.prototype.Vd=!0;var de={};ee.prototype.Fe=function(){return""};ee.prototype.toString=function(){return"SafeScript{}"};var fe=function(a){if(a instanceof ee&&a.constructor===ee&&a.b===de)return"";Xb("expected object of type SafeScript, got '"+a+"' of type "+bb(a));return"type_error:SafeScript"};var ge=/[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,he=/^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/,ie=/^http:\/\/.*/,je=/\s+/,ke=/[\d\u06f0-\u06f9]/;var me=function(){this.b="";this.f=le};me.prototype.Vd=!0;me.prototype.Fe=function(){return this.b};me.prototype.toString=function(){return"TrustedResourceUrl{"+this.b+"}"};var ne=function(a){if(a instanceof me&&a.constructor===me&&a.f===le)return a.b;Xb("expected object of type TrustedResourceUrl, got '"+a+"' of type "+bb(a));return"type_error:TrustedResourceUrl"},le={},oe=function(a){var b=new me;b.b=a;return b};var qe=function(){this.b=pe};qe.prototype.Vd=!0;qe.prototype.Fe=function(){return""};qe.prototype.toString=function(){return"SafeUrl{}"};var re=function(a){if(a instanceof qe&&a.constructor===qe&&a.b===pe)return"";Xb("expected object of type SafeUrl, got '"+a+"' of type "+bb(a));return"type_error:SafeUrl"},pe={};var te=function(){this.b=se};te.prototype.Vd=!0;var se={};te.prototype.Fe=function(){return""};te.prototype.toString=function(){return"SafeStyle{}"};var ue=function(a){if(a instanceof te&&a.constructor===te&&a.b===se)return"";Xb("expected object of type SafeStyle, got '"+a+"' of type "+bb(a));return"type_error:SafeStyle"};var we=function(){this.b=ve;this.xg=null};we.prototype.Vd=!0;we.prototype.Fe=function(){return""};we.prototype.toString=function(){return"SafeHtml{}"};var xe=function(a){if(a instanceof we&&a.constructor===we&&a.b===ve)return"";Xb("expected object of type SafeHtml, got '"+a+"' of type "+bb(a));return"type_error:SafeHtml"},ve={};var ye=function(a,b){a.src=ne(b);if(null===Wa){a:{if((b=Pa.document.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&Ua.test(b))break a;b=null}Wa=b||""}if(b=Wa)a.nonce=b};var ze=function(a,b){return a+Math.random()*(b-a)};var Ae=function(a,b,c){this.u=a;this.h=0<b?b:10;this.o=0<c?c:1;this.j=1;this.s=0;this.g=!1;this.b=this.f=null};Ae.prototype.start=function(){if(null!=this.b)return Promise.reject(Error("Cannot call Retry.start more than once."));this.b=new Tb;this.m();return this.b.b};Ae.prototype.m=function(){var a=this;this.f=null;this.g||(this.s++,this.u().then(function(b){Be(a);a.b.resolve(b)},function(){a.s>=a.o?(Be(a),a.b.reject(Error("Max attempts reached"))):(a.f=setTimeout(a.m.bind(a),a.h),a.h*=a.j)}))};
var Ce=function(a,b){a.j=b;return a};Ae.prototype.abort=function(){Be(this);this.b.reject(Error("abort"))};var Be=function(a){null!=a.f&&(clearTimeout(a.f),a.f=null);a.g=!0};var De=function(a,b){this.h=a;this.g=b;this.b=0;this.f=[]};De.prototype.send=function(a,b,c,d){var e=void 0===d?{}:d;d=void 0===e.timeoutMillis?this.g:e.timeoutMillis;var f=void 0===e.Ak?1:e.Ak,h=void 0===e.headers?null:e.headers;e=void 0===e.responseType?"":e.responseType;a={kb:new Tb,url:a,method:b,headers:h,responseType:e,body:c,timeoutMillis:d,Bk:f};this.b<this.h?Ee(this,a):this.f.push(a);return a.kb.b};
var Fe=function(a){if(0<a.f.length&&a.b<a.h){var b=a.f.shift();Ee(a,b)}},Ee=function(a,b){a.b++;b.Bk--;Ge(b).then(function(c){b.kb.resolve(c);a.b--;Fe(a)},function(c){0==b.Bk?b.kb.reject(c):a.f.push(b);a.b--;Fe(a)})},Ge=function(a){return new Promise(function(b,c){var d=new XMLHttpRequest;d.onreadystatechange=function(){d.readyState==XMLHttpRequest.DONE&&b(d)};d.timeout=a.timeoutMillis;d.ontimeout=function(){c(Error("Timed out"))};d.open(a.method,a.url,!0);null==a.headers?d.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded;charset=utf-8"):a.headers.forEach(function(a){return d.setRequestHeader(a[0],a[1])});d.responseType=a.responseType;d.send(a.body)})};var Ie=function(a,b,c){null==He&&(He=new De(1,3E5));var d="https://crash.corp.google.com/samples?reportid=&q="+encodeURIComponent("UserComments='"+b+"'"),e="http://"+a+":8008/setup/send_log_report";He.send(e,"POST",JSON.stringify({uuid:b}),{headers:[["Content-Type","application/json"]]}).then(function(a){200==a.status?c("ok",d):c("error","Unable to POST to "+e+", "+("error = "+a.status))},function(a){c("error",String(a))});return d},Le=function(a){var b=new Je;if("string"!==typeof a)return Promise.resolve(b);
null==Ke&&(Ke=new De(1,3E3));return Ke.send("http://"+a+":8008/setup/eureka_info","GET",void 0,{responseType:"text"}).then(function(a){a=JSON.parse(a.responseText);"cast_build_revision"in a?b.b=String(a.cast_build_revision):"build_version"in a&&(b.b=String(a.build_version));"connected"in a&&(b.g="true"==String(a.connected));"ethernet_connected"in a&&(b.f="true"==String(a.ethernet_connected));"has_update"in a&&(b.h="true"==String(a.has_update));"uptime"in a&&(a=Number(a.uptime),Number.isFinite(a)&&
(b.j=a))}).catch(function(a){v(tb("mr.DongleUtils"),"Unable to fetch/parse setup info.",a)}).then(function(){return b})},Je=function(){this.j=this.h=this.f=this.g=this.b=null},He=null,Ke=null;var Me=function(a,b,c){this.source=a;this.type=b;this.message=c};var Ne=!Gd&&!Ed||Ed&&9<=Number(Zd)||Gd&&Yd("1.9.1");var Oe=function(a,b){this.width=a;this.height=b};g=Oe.prototype;g.clone=function(){return new Oe(this.width,this.height)};g.toString=function(){return"("+this.width+" x "+this.height+")"};g.ng=function(){return this.width*this.height};g.aspectRatio=function(){return this.width/this.height};g.cc=function(){return!this.ng()};g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Pe={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},Qe=function(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Oe(a.clientWidth,a.clientHeight)},Re=function(a){return a?a.parentWindow||a.defaultView:window},Se=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},
Te=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Se(a).createTextNode(String(b)))}},Ue=function(a){this.b=a||Pa.document||document};
Ue.prototype.setProperties=function(a,b){dd(b,function(b,d){b&&b.Vd&&(b=b.Fe());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Pe.hasOwnProperty(d)?a.setAttribute(Pe[d],b):Gc(d,"aria-")||Gc(d,"data-")?a.setAttribute(d,b):a[d]=b})};Ue.prototype.getChildren=function(a){return Ne&&void 0!=a.children?a.children:ac(a.childNodes,function(a){return 1==a.nodeType})};Ue.prototype.isElement=function(a){return ib(a)&&1==a.nodeType};
Ue.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
