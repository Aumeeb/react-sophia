!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n(1),i=n(9);t.textStyle=function(e){return"\n    color: "+e+";\n        "+r.commonTextStyle+"\n    "},t.textInfoStyle=function(){return"\ncolor: rgba(0,0,0,.6);\n"+r.commonTextStyle+"\n"},t.textSuccessStyle=function(){return"\ncolor: rgb(105, 183, 25);\n"+r.commonTextStyle+"\n"},t.textFailureStyle=function(){return"\ncolor:  #e84545de;\n"+r.commonTextStyle+"\n"},t.typedInfo=function(e){o.isNumber(e)&&console.log("%c %c"+e,""+i.typedStyle,r.commonTextStyle),o.isString(e)&&console.log("%c %c"+e,""+i.typedStyle,r.commonTextStyle)}},function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}})),l=r[n];n<i;l=r[++n])d(l)||!j(l)?u+=" "+l:u+=" "+c(l);return u},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,u={};function c(e,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&t._extend(r,n),h(r.showHidden)&&(r.showHidden=!1),h(r.depth)&&(r.depth=2),h(r.colors)&&(r.colors=!1),h(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=l),f(r,e,r.depth)}function l(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function s(e,t){return e}function f(e,n,r){if(e.customInspect&&n&&S(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return b(o)||(o=f(e,o,r)),o}var i=function(e,t){if(h(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(m(t))return e.stylize(""+t,"number");if(g(t))return e.stylize(""+t,"boolean");if(d(t))return e.stylize("null","null")}(e,n);if(i)return i;var u=Object.keys(n),c=function(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),w(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return a(n);if(0===u.length){if(S(n)){var l=n.name?": "+n.name:"";return e.stylize("[Function"+l+"]","special")}if(v(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(x(n))return e.stylize(Date.prototype.toString.call(n),"date");if(w(n))return a(n)}var s,j="",O=!1,T=["{","}"];(y(n)&&(O=!0,T=["[","]"]),S(n))&&(j=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(j=" "+RegExp.prototype.toString.call(n)),x(n)&&(j=" "+Date.prototype.toUTCString.call(n)),w(n)&&(j=" "+a(n)),0!==u.length||O&&0!=n.length?r<0?v(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),s=O?function(e,t,n,r,o){for(var i=[],u=0,c=t.length;u<c;++u)N(t,String(u))?i.push(p(e,t,n,r,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,n,r,o,!0))})),i}(e,n,r,c,u):u.map((function(t){return p(e,n,r,c,t,O)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(s,j,T)):T[0]+j+T[1]}function a(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,o,i){var u,c,l;if((l=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?c=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(c=e.stylize("[Setter]","special")),N(r,o)||(u="["+o+"]"),c||(e.seen.indexOf(l.value)<0?(c=d(n)?f(e,l.value,null):f(e,l.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),h(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function y(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function d(e){return null===e}function m(e){return"number"==typeof e}function b(e){return"string"==typeof e}function h(e){return void 0===e}function v(e){return j(e)&&"[object RegExp]"===O(e)}function j(e){return"object"==typeof e&&null!==e}function x(e){return j(e)&&"[object Date]"===O(e)}function w(e){return j(e)&&("[object Error]"===O(e)||e instanceof Error)}function S(e){return"function"==typeof e}function O(e){return Object.prototype.toString.call(e)}function T(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(h(i)&&(i=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!u[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;u[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else u[n]=function(){};return u[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=g,t.isNull=d,t.isNullOrUndefined=function(e){return null==e},t.isNumber=m,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=h,t.isRegExp=v,t.isObject=j,t.isDate=x,t.isError=w,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(7);var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function z(){var e=new Date,t=[T(e.getHours()),T(e.getMinutes()),T(e.getSeconds())].join(":");return[e.getDate(),M[e.getMonth()],t].join(" ")}function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",z(),t.format.apply(t,arguments))},t.inherits=n(8),t._extend=function(e,t){if(!t||!j(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var P="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function D(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(P&&e[P]){var t;if("function"!=typeof(t=e[P]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,P,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),P&&Object.defineProperty(t,P,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=P,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(u,null,t)}),(function(t){e.nextTick(D,t,u)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n(6))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.emoji={bulb:"💡",corrent:"✔️",incorrent:"❌",thinking:"🤔",crystal_ball:"🔮",type_number:"🔢",type_string:"🔠"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(4).reallog.info(["我们",2,3,4,5]),console.log(["1",2,"3"])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),i=n(10),u=n(1),c=function(){function e(){this.fontsize=20}return e.prototype.info=function(e){if("string"!=typeof e&&"number"!=typeof e||console.log("%c "+o.emoji.bulb+" "+e,r.textInfoStyle()),Array.isArray(e)){var t=e.map((function(e){return u.isString(e)?"'"+e+"'":e}));console.group("%c "+o.emoji.bulb+" ["+t.join(" ")+"]",r.textInfoStyle()),e.forEach((function(e){return r.typedInfo(e)})),console.groupEnd()}},e.prototype.success=function(e){console.log("%c "+o.emoji.corrent+" "+e,r.textSuccessStyle())},e.prototype.failure=function(e){console.log("%c "+o.emoji.incorrent+" "+e,r.textFailureStyle())},e.prototype.expect=function(e,t,n){i.expectText(e,t,n)},e}();t.reallog=new c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.commonTextStyle="\nfont-weight: 700;\nline-height: 1em;\nfont-style: normal;\ntext-align: center;\nheight: 20px;\nborder-radius:.28571429rem;\npadding: .6em 0.6em .6em;"},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var l,s=[],f=!1,a=-1;function p(){f&&l&&(f=!1,l.length?s=l.concat(s):a=-1,s.length&&y())}function y(){if(!f){var e=c(p);f=!0;for(var t=s.length;t;){for(l=s,s=[];++a<t;)l&&l[a].run();a=-1,t=s.length}l=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new g(e,t)),1!==s.length||f||c(y)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typedStyle='\npadding: .4em .4em;\nbackground-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+CjxzdHlsZT4uaWNvbi1jYW52YXMtdHJhbnNwYXJlbnR7b3BhY2l0eTowO2ZpbGw6IzJkMmQzMH0uaWNvbi12cy1vdXR7ZmlsbDojMmQyZDMwfS5pY29uLXZzLWZne2ZpbGw6IzJiMjgyZX0uaWNvbi12cy1hY3Rpb24tYmx1ZXtmaWxsOiM3NWJlZmZ9PC9zdHlsZT4KPHBhdGggY2xhc3M9J2ljb24tY2FudmFzLXRyYW5zcGFyZW50JyBkPSdNMTYgMTZIMFYwaDE2djE2eicgaWQ9J2NhbnZhcycvPjxwYXRoIGNsYXNzPSdpY29uLXZzLW91dCcgZD0nTTAgMTAuNzM2VjQuNUw5IDBsNyAzLjV2Ni4yMzZsLTkgNC41LTctMy41eicgaWQ9J291dGxpbmUnLz4KPHBhdGggY2xhc3M9J2ljb24tdnMtYWN0aW9uLWJsdWUnIGQ9J005IDFMMSA1djVsNiAzIDgtNFY0TDkgMXpNNyA2Ljg4MkwzLjIzNiA1IDkgMi4xMTggMTIuNzY0IDQgNyA2Ljg4MnonIGlkPSdpY29uQmcnLz4KPHBhdGggY2xhc3M9J2ljb24tdnMtZmcnIGQ9J005IDIuMTE4TDEyLjc2NCA0IDcgNi44ODIgMy4yMzYgNSA5IDIuMTE4eicgaWQ9J2ljb25GZycvPgo8L3N2Zz4=");\nbackground-repeat: no-repeat;\nbackground-position: 0% 25%;\n'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=n(0);t.expectText=function(e,t,n){var i=r.emoji.thinking+" "+e+" "+t+" "+n+"  =>";"=="===t&&console.log("%c "+i+" "+(e==n?r.emoji.corrent:r.emoji.incorrent),o.textStyle("violet")),"!="===t&&console.log("%c "+i+" "+(e!=n?r.emoji.corrent:r.emoji.incorrent),o.textStyle("violet")),"==="===t&&console.log("%c "+i+" "+(e===n?r.emoji.corrent:r.emoji.incorrent),o.textStyle("violet")),"!=="===t&&console.log("%c "+i+" "+(e!==n?r.emoji.corrent:r.emoji.incorrent),o.textStyle("violet"))}}]);