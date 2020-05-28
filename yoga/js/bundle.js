!function(s){var n={};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return s[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=s,t.c=n,t.d=function(e,o,s){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)t.d(s,n,function(e){return o[e]}.bind(null,n));return s},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s="./js/script.js")}({"./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */function(e,o,u){window.addEventListener("DOMContentLoaded",function(){"use strict";var e=u(/*! ../src/js/calc.js */"./src/js/calc.js"),o=u(/*! ../src/js/form.js */"./src/js/form.js"),s=u(/*! ../src/js/modal.js */"./src/js/modal.js"),n=u(/*! ../src/js/slider.js */"./src/js/slider.js"),t=u(/*! ../src/js/tabs.js */"./src/js/tabs.js"),r=u(/*! ../src/js/timer.js */"./src/js/timer.js");e(),o.default(),s(),n(),t(),r()})},"./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o,s,n){if(!(e instanceof o)||void 0!==n&&n in e)throw TypeError(s+": incorrect invocation!");return e}},"./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},"./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */function(e,o,s){var t=s(/*! ./_cof */"./node_modules/core-js/modules/_cof.js"),r=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag"),u="Arguments"==t(function(){return arguments}());e.exports=function(e){var o,s,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(s=function(e,o){try{return e[o]}catch(e){}}(o=Object(e),r))?s:u?t(o):"Object"==(n=t(o))&&"function"==typeof o.callee?"Arguments":n}},"./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var s={}.toString;e.exports=function(e){return s.call(e).slice(8,-1)}},"./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */function(e,o){var s=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=s)},"./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */function(e,o,s){var r=s(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js");e.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,o){return n.call(t,e,o)};case 3:return function(e,o,s){return n.call(t,e,o,s)}}return function(){return n.apply(t,arguments)}}},"./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,s){e.exports=!s(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),t=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").document,r=n(t)&&n(t.createElement);e.exports=function(e){return r?t.createElement(e):{}}},"./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,s){var _=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),p=s(/*! ./_core */"./node_modules/core-js/modules/_core.js"),v=s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),h=s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js"),y=s(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),g="prototype",b=function(e,o,s){var n,t,r,u,c=e&b.F,d=e&b.G,l=e&b.S,i=e&b.P,a=e&b.B,m=d?_:l?_[o]||(_[o]={}):(_[o]||{})[g],j=d?p:p[o]||(p[o]={}),f=j[g]||(j[g]={});for(n in d&&(s=o),s)r=((t=!c&&m&&void 0!==m[n])?m:s)[n],u=a&&t?y(r,_):i&&"function"==typeof r?y(Function.call,r):r,m&&h(m,n,r,e&b.U),j[n]!=r&&v(j,n,u),i&&f[n]!=r&&(f[n]=r)};_.core=p,b.F=1,b.G=2,b.S=4,b.P=8,b.B=16,b.W=32,b.U=64,b.R=128,e.exports=b},"./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){try{return!!e()}catch(e){return!0}}},"./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,s){var m=s(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),j=s(/*! ./_iter-call */"./node_modules/core-js/modules/_iter-call.js"),f=s(/*! ./_is-array-iter */"./node_modules/core-js/modules/_is-array-iter.js"),_=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),p=s(/*! ./_to-length */"./node_modules/core-js/modules/_to-length.js"),v=s(/*! ./core.get-iterator-method */"./node_modules/core-js/modules/core.get-iterator-method.js"),h={},y={};(o=e.exports=function(e,o,s,n,t){var r,u,c,d,l=t?function(){return e}:v(e),i=m(s,n,o?2:1),a=0;if("function"!=typeof l)throw TypeError(e+" is not iterable!");if(f(l)){for(r=p(e.length);a<r;a++)if((d=o?i(_(u=e[a])[0],u[1]):i(e[a]))===h||d===y)return d}else for(c=l.call(e);!(u=c.next()).done;)if((d=j(c,i,u.value,o))===h||d===y)return d}).BREAK=h,o.RETURN=y},"./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,s){e.exports=s(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("native-function-to-string",Function.toString)},"./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */function(e,o){var s=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},"./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var s={}.hasOwnProperty;e.exports=function(e,o){return s.call(e,o)}},"./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),t=s(/*! ./_property-desc */"./node_modules/core-js/modules/_property-desc.js");e.exports=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?function(e,o,s){return n.f(e,o,t(1,s))}:function(e,o,s){return e[o]=s,e}},"./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").document;e.exports=n&&n.documentElement},"./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */function(e,o,s){e.exports=!s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")&&!s(/*! ./_fails */"./node_modules/core-js/modules/_fails.js")(function(){return 7!=Object.defineProperty(s(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js")("div"),"a",{get:function(){return 7}}).a})},"./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o,s){var n=void 0===s;switch(o.length){case 0:return n?e():e.call(s);case 1:return n?e(o[0]):e.call(s,o[0]);case 2:return n?e(o[0],o[1]):e.call(s,o[0],o[1]);case 3:return n?e(o[0],o[1],o[2]):e.call(s,o[0],o[1],o[2]);case 4:return n?e(o[0],o[1],o[2],o[3]):e.call(s,o[0],o[1],o[2],o[3])}return e.apply(s,o)}},"./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js"),t=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||r[t]===e)}},"./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},"./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var r=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js");e.exports=function(o,e,s,n){try{return n?e(r(s)[0],s[1]):e(s)}catch(e){var t=o.return;throw void 0!==t&&r(t.call(o)),e}}},"./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,s){var r=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),u=!1;try{var n=[7][r]();n.return=function(){u=!0},Array.from(n,function(){throw 2})}catch(e){}e.exports=function(e,o){if(!o&&!u)return!1;var s=!1;try{var n=[7],t=n[r]();t.next=function(){return{done:s=!0}},n[r]=function(){return t},e(n)}catch(e){}return s}},"./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */function(e,o){e.exports={}},"./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */function(e,o){e.exports=!1},"./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var c=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),d=s(/*! ./_task */"./node_modules/core-js/modules/_task.js").set,l=c.MutationObserver||c.WebKitMutationObserver,i=c.process,a=c.Promise,m="process"==s(/*! ./_cof */"./node_modules/core-js/modules/_cof.js")(i);e.exports=function(){function e(){var e,o;for(m&&(e=i.domain)&&e.exit();s;){o=s.fn,s=s.next;try{o()}catch(e){throw s?t():n=void 0,e}}n=void 0,e&&e.enter()}var s,n,o,t,r,u;return t=m?function(){i.nextTick(e)}:!l||c.navigator&&c.navigator.standalone?a&&a.resolve?(o=a.resolve(void 0),function(){o.then(e)}):function(){d.call(c,e)}:(r=!0,u=document.createTextNode(""),new l(e).observe(u,{characterData:!0}),function(){u.data=r=!r}),function(e){var o={fn:e,next:void 0};n&&(n.next=o),s||(s=o,t()),n=o}}},"./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */function(e,o,s){"use strict";var t=s(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js");function n(e){var s,n;this.promise=new e(function(e,o){if(void 0!==s||void 0!==n)throw TypeError("Bad Promise constructor");s=e,n=o}),this.resolve=t(s),this.reject=t(n)}e.exports.f=function(e){return new n(e)}},"./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),t=s(/*! ./_ie8-dom-define */"./node_modules/core-js/modules/_ie8-dom-define.js"),r=s(/*! ./_to-primitive */"./node_modules/core-js/modules/_to-primitive.js"),u=Object.defineProperty;o.f=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js")?Object.defineProperty:function(e,o,s){if(n(e),o=r(o,!0),n(s),t)try{return u(e,o,s)}catch(e){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(e[o]=s.value),e}},"./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */function(e,o){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},"./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),t=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),r=s(/*! ./_new-promise-capability */"./node_modules/core-js/modules/_new-promise-capability.js");e.exports=function(e,o){if(n(e),t(o)&&o.constructor===e)return o;var s=r.f(e);return(0,s.resolve)(o),s.promise}},"./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */function(e,o){e.exports=function(e,o){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:o}}},"./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,s){var t=s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js");e.exports=function(e,o,s){for(var n in o)t(e,n,o[n],s);return e}},"./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */function(e,o,s){var r=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),u=s(/*! ./_hide */"./node_modules/core-js/modules/_hide.js"),c=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),d=s(/*! ./_uid */"./node_modules/core-js/modules/_uid.js")("src"),n=s(/*! ./_function-to-string */"./node_modules/core-js/modules/_function-to-string.js"),t="toString",l=(""+n).split(t);s(/*! ./_core */"./node_modules/core-js/modules/_core.js").inspectSource=function(e){return n.call(e)},(e.exports=function(e,o,s,n){var t="function"==typeof s;t&&(c(s,"name")||u(s,"name",o)),e[o]!==s&&(t&&(c(s,d)||u(s,d,e[o]?""+e[o]:l.join(String(o)))),e===r?e[o]=s:n?e[o]?e[o]=s:u(e,o,s):(delete e[o],u(e,o,s)))})(Function.prototype,t,function(){return"function"==typeof this&&this[d]||n.call(this)})},"./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */function(e,o,s){"use strict";var n=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),t=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js"),r=s(/*! ./_descriptors */"./node_modules/core-js/modules/_descriptors.js"),u=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species");e.exports=function(e){var o=n[e];r&&o&&!o[u]&&t.f(o,u,{configurable:!0,get:function(){return this}})}},"./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_object-dp */"./node_modules/core-js/modules/_object-dp.js").f,t=s(/*! ./_has */"./node_modules/core-js/modules/_has.js"),r=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag");e.exports=function(e,o,s){e&&!t(e=s?e:e.prototype,r)&&n(e,r,{configurable:!0,value:o})}},"./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_core */"./node_modules/core-js/modules/_core.js"),t=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),r="__core-js_shared__",u=t[r]||(t[r]={});(e.exports=function(e,o){return u[e]||(u[e]=void 0!==o?o:{})})("versions",[]).push({version:n.version,mode:s(/*! ./_library */"./node_modules/core-js/modules/_library.js")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,s){var t=s(/*! ./_an-object */"./node_modules/core-js/modules/_an-object.js"),r=s(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),u=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species");e.exports=function(e,o){var s,n=t(e).constructor;return void 0===n||null==(s=t(n)[u])?o:r(s)}},"./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */function(e,o,s){function n(){var e,o=+this;y.hasOwnProperty(o)&&(e=y[o],delete y[o],e())}function t(e){n.call(e.data)}var r,u,c,d=s(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),l=s(/*! ./_invoke */"./node_modules/core-js/modules/_invoke.js"),i=s(/*! ./_html */"./node_modules/core-js/modules/_html.js"),a=s(/*! ./_dom-create */"./node_modules/core-js/modules/_dom-create.js"),m=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),j=m.process,f=m.setImmediate,_=m.clearImmediate,p=m.MessageChannel,v=m.Dispatch,h=0,y={},g="onreadystatechange";f&&_||(f=function(e){for(var o=[],s=1;s<arguments.length;)o.push(arguments[s++]);return y[++h]=function(){l("function"==typeof e?e:Function(e),o)},r(h),h},_=function(e){delete y[e]},"process"==s(/*! ./_cof */"./node_modules/core-js/modules/_cof.js")(j)?r=function(e){j.nextTick(d(n,e,1))}:v&&v.now?r=function(e){v.now(d(n,e,1))}:p?(c=(u=new p).port2,u.port1.onmessage=t,r=d(c.postMessage,c,1)):m.addEventListener&&"function"==typeof postMessage&&!m.importScripts?(r=function(e){m.postMessage(e+"","*")},m.addEventListener("message",t,!1)):r=g in a("script")?function(e){i.appendChild(a("script"))[g]=function(){i.removeChild(this),n.call(e)}}:function(e){setTimeout(d(n,e,1),0)}),e.exports={set:f,clear:_}},"./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o){var s=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?n:s)(e)}},"./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_to-integer */"./node_modules/core-js/modules/_to-integer.js"),t=Math.min;e.exports=function(e){return 0<e?t(n(e),9007199254740991):0}},"./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */function(e,o,s){var t=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js");e.exports=function(e,o){if(!t(e))return e;var s,n;if(o&&"function"==typeof(s=e.toString)&&!t(n=s.call(e)))return n;if("function"==typeof(s=e.valueOf)&&!t(n=s.call(e)))return n;if(!o&&"function"==typeof(s=e.toString)&&!t(n=s.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},"./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */function(e,o){var s=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++s+n).toString(36))}},"./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").navigator;e.exports=n&&n.userAgent||""},"./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_shared */"./node_modules/core-js/modules/_shared.js")("wks"),t=s(/*! ./_uid */"./node_modules/core-js/modules/_uid.js"),r=s(/*! ./_global */"./node_modules/core-js/modules/_global.js").Symbol,u="function"==typeof r;(e.exports=function(e){return n[e]||(n[e]=u&&r[e]||(u?r:t)("Symbol."+e))}).store=n},"./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */function(e,o,s){var n=s(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),t=s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("iterator"),r=s(/*! ./_iterators */"./node_modules/core-js/modules/_iterators.js");e.exports=s(/*! ./_core */"./node_modules/core-js/modules/_core.js").getIteratorMethod=function(e){if(null!=e)return e[t]||e["@@iterator"]||r[n(e)]}},"./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */function(e,o,s){"use strict";var n=s(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),t={};t[s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("toStringTag")]="z",t+""!="[object z]"&&s(/*! ./_redefine */"./node_modules/core-js/modules/_redefine.js")(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},"./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */function(e,o,s){"use strict";function n(){}function a(e){var o;return!(!p(e)||"function"!=typeof(o=e.then))&&o}function t(i,o){var s;i._n||(i._n=!0,s=i._c,x(function(){for(var d=i._v,l=1==i._s,e=0;s.length>e;)!function(e){var o,s,n,t=l?e.ok:e.fail,r=e.resolve,u=e.reject,c=e.domain;try{t?(l||(2==i._h&&H(i),i._h=1),!0===t?o=d:(c&&c.enter(),o=t(d),c&&(c.exit(),n=!0)),o===e.promise?u(M("Promise-chain cycle")):(s=a(o))?s.call(o,r,u):r(o)):u(d)}catch(e){c&&!n&&c.exit(),u(e)}}(s[e++]);i._c=[],i._n=!1,o&&!i._h&&I(i)}))}function r(e){var o=this;o._d||(o._d=!0,(o=o._w||o)._v=e,o._s=2,o._a||(o._a=o._c.slice()),t(o,!0))}var u,c,d,l,i=s(/*! ./_library */"./node_modules/core-js/modules/_library.js"),m=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),j=s(/*! ./_ctx */"./node_modules/core-js/modules/_ctx.js"),f=s(/*! ./_classof */"./node_modules/core-js/modules/_classof.js"),_=s(/*! ./_export */"./node_modules/core-js/modules/_export.js"),p=s(/*! ./_is-object */"./node_modules/core-js/modules/_is-object.js"),v=s(/*! ./_a-function */"./node_modules/core-js/modules/_a-function.js"),h=s(/*! ./_an-instance */"./node_modules/core-js/modules/_an-instance.js"),y=s(/*! ./_for-of */"./node_modules/core-js/modules/_for-of.js"),g=s(/*! ./_species-constructor */"./node_modules/core-js/modules/_species-constructor.js"),b=s(/*! ./_task */"./node_modules/core-js/modules/_task.js").set,x=s(/*! ./_microtask */"./node_modules/core-js/modules/_microtask.js")(),w=s(/*! ./_new-promise-capability */"./node_modules/core-js/modules/_new-promise-capability.js"),S=s(/*! ./_perform */"./node_modules/core-js/modules/_perform.js"),k=s(/*! ./_user-agent */"./node_modules/core-js/modules/_user-agent.js"),L=s(/*! ./_promise-resolve */"./node_modules/core-js/modules/_promise-resolve.js"),E="Promise",M=m.TypeError,P=m.process,T=P&&P.versions,O=T&&T.v8||"",q=m[E],A="process"==f(P),F=c=w.f,C=!!function(){try{var e=q.resolve(1),o=(e.constructor={})[s(/*! ./_wks */"./node_modules/core-js/modules/_wks.js")("species")]=function(e){e(n,n)};return(A||"function"==typeof PromiseRejectionEvent)&&e.then(n)instanceof o&&0!==O.indexOf("6.6")&&-1===k.indexOf("Chrome/66")}catch(e){}}(),I=function(r){b.call(m,function(){var e,o,s,n=r._v,t=D(r);if(t&&(e=S(function(){A?P.emit("unhandledRejection",n,r):(o=m.onunhandledrejection)?o({promise:r,reason:n}):(s=m.console)&&s.error&&s.error("Unhandled promise rejection",n)}),r._h=A||D(r)?2:1),r._a=void 0,t&&e.e)throw e.v})},D=function(e){return 1!==e._h&&0===(e._a||e._c).length},H=function(o){b.call(m,function(){var e;A?P.emit("rejectionHandled",o):(e=m.onrejectionhandled)&&e({promise:o,reason:o._v})})},B=function(e){var s,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw M("Promise can't be resolved itself");(s=a(e))?x(function(){var o={_w:n,_d:!1};try{s.call(e,j(B,o,1),j(r,o,1))}catch(e){r.call(o,e)}}):(n._v=e,n._s=1,t(n,!1))}catch(e){r.call({_w:n,_d:!1},e)}}};C||(q=function(e){h(this,q,E,"_h"),v(e),u.call(this);try{e(j(B,this,1),j(r,this,1))}catch(e){r.call(this,e)}},(u=function(){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=s(/*! ./_redefine-all */"./node_modules/core-js/modules/_redefine-all.js")(q.prototype,{then:function(e,o){var s=F(g(this,q));return s.ok="function"!=typeof e||e,s.fail="function"==typeof o&&o,s.domain=A?P.domain:void 0,this._c.push(s),this._a&&this._a.push(s),this._s&&t(this,!1),s.promise},catch:function(e){return this.then(void 0,e)}}),d=function(){var e=new u;this.promise=e,this.resolve=j(B,e,1),this.reject=j(r,e,1)},w.f=F=function(e){return e===q||e===l?new d:c(e)}),_(_.G+_.W+_.F*!C,{Promise:q}),s(/*! ./_set-to-string-tag */"./node_modules/core-js/modules/_set-to-string-tag.js")(q,E),s(/*! ./_set-species */"./node_modules/core-js/modules/_set-species.js")(E),l=s(/*! ./_core */"./node_modules/core-js/modules/_core.js")[E],_(_.S+_.F*!C,E,{reject:function(e){var o=F(this);return(0,o.reject)(e),o.promise}}),_(_.S+_.F*(i||!C),E,{resolve:function(e){return L(i&&this===l?q:this,e)}}),_(_.S+_.F*!(C&&s(/*! ./_iter-detect */"./node_modules/core-js/modules/_iter-detect.js")(function(e){q.all(e).catch(n)})),E,{all:function(e){var u=this,o=F(u),c=o.resolve,d=o.reject,s=S(function(){var n=[],t=0,r=1;y(e,!1,function(e){var o=t++,s=!1;n.push(void 0),r++,u.resolve(e).then(function(e){s||(s=!0,n[o]=e,--r||c(n))},d)}),--r||c(n)});return s.e&&d(s.v),o.promise},race:function(e){var o=this,s=F(o),n=s.reject,t=S(function(){y(e,!1,function(e){o.resolve(e).then(s.resolve,n)})});return t.e&&n(t.v),s.promise}})},"./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */function(e,o,s){"use strict";var n=s(/*! ./_export */"./node_modules/core-js/modules/_export.js"),t=s(/*! ./_core */"./node_modules/core-js/modules/_core.js"),r=s(/*! ./_global */"./node_modules/core-js/modules/_global.js"),u=s(/*! ./_species-constructor */"./node_modules/core-js/modules/_species-constructor.js"),c=s(/*! ./_promise-resolve */"./node_modules/core-js/modules/_promise-resolve.js");n(n.P+n.R,"Promise",{finally:function(o){var s=u(this,t.Promise||r.Promise),e="function"==typeof o;return this.then(e?function(e){return c(s,o()).then(function(){return e})}:o,e?function(e){return c(s,o()).then(function(){throw e})}:o)}})},"./src/js/calc.js":
/*!************************!*\
  !*** ./src/js/calc.js ***!
  \************************/
/*! no static exports found */function(e,o){e.exports=function(){var o=document.querySelectorAll(".counter-block-input")[0],s=document.querySelectorAll(".counter-block-input")[1],e=document.querySelector("#price");function n(){var e;""!=s.value&&""!=o.value?(e=total,totalValue.innerHTML=e*place.options[place.selectedIndex].value):totalValue.innerHTML=0}place=document.getElementById("select"),totalValue=document.getElementById("total"),personsSum=0,daysSum=0,total=0,totalValue.innerHTML=0,e.addEventListener("input",function(e){"INPUT"==e.target.tagName&&(daysSum=+s.value,personsSum=+o.value,total=4e3*(daysSum+personsSum),""!=s.value&&""!=o.value?n():totalValue.innerHTML=0)}),place.addEventListener("change",n)}},"./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! exports provided: default */function(e,o,s){"use strict";s.r(o);s(/*! core-js/modules/es7.promise.finally */"./node_modules/core-js/modules/es7.promise.finally.js"),s(/*! core-js/modules/es6.promise */"./node_modules/core-js/modules/es6.promise.js"),s(/*! core-js/modules/es6.object.to-string */"./node_modules/core-js/modules/es6.object.to-string.js");o.default=function(){var s="Загрузка",t="Спасибо! Скоро мы с вами свяжемся!",r="Что-то пошло не так...",u=document.querySelector(".main-form"),c=document.getElementsByTagName("input"),d=document.createElement("div");d.classList.add("status"),document.body.addEventListener("submit",function(e){e.preventDefault(),(u=e.target).appendChild(d);var n,o=new FormData(u);n=o,d.innerHTML=s,new Promise(function(e,o){var s=new XMLHttpRequest;s.open("POST","./server.php"),s.onreadystatechange=function(){200==s.status?(console.log("--ok"),e()):(console.log("--no"),o()),console.log("".concat(s.readyState," ").concat(s.status))},s.send(n)}).finally(function(){console.log("finally")}).then(function(){return new Promise(function(e,o){setTimeout(function(){e(d.innerHTML=t)},1e3)})}).catch(function(){return new Promise(function(e,o){setTimeout(function(){e(d.innerHTML=r)},1e3)})}).then(function(){console.log("xxxxx")}).then(function(){for(var e=1;e<c.length;e++)c[e].value=""})})}},"./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */function(e,o){e.exports=function(){var e=document.querySelector(".more"),o=document.querySelector(".overlay"),s=document.querySelector(".popup-close");document.body.addEventListener("click",function(e){(e.target.classList.contains("more")||e.target.classList.contains("description-btn"))&&(o.style.display="block",e.target.classList.add("more-splash"),document.body.style.overflow="hidden")}),s.addEventListener("click",function(){o.style.display="none",e.classList.remove("more-splash"),document.body.style.overflow=""})}},"./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */function(e,o){e.exports=function(){var s=1,o=document.querySelectorAll(".slider-item"),e=document.querySelector(".prev"),n=document.querySelector(".next"),t=document.querySelector(".slider-dots"),r=document.querySelectorAll(".dot");function u(e){e>o.length&&(s=1),e<1&&(s=o.length),o.forEach(function(e){e.style.display="none"}),r.forEach(function(e){e.classList.remove("dot-active")}),o[s-1].style.display="block",r[s-1].classList.add("dot-active")}function c(e){u(s+=e)}u(s),e.addEventListener("click",function(){return c(-1)}),n.addEventListener("click",function(){return c(1)}),t.addEventListener("click",function(e){for(var o=0;o<=r.length;o++)e.target.classList.contains("dot")&&e.target==r[o-1]&&u(s=o)})}},"./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! no static exports found */function(e,o){e.exports=function(){var t=document.querySelectorAll(".info-header-tab"),e=document.querySelector(".info-header"),r=document.querySelectorAll(".info-tabcontent");function u(e){for(var o=e;o<r.length;o++)r[o].classList.remove("show"),r[o].classList.add("hide")}u(1),e.addEventListener("click",function(e){var o,s=e.target;if(s&&s.classList.contains("info-header-tab"))for(var n=0;n<t.length;n++)s==t[n]&&(u(0),r[o=n].classList.contains("hide")&&(r[o].classList.remove("hide"),r[o].classList.add("show")))})}},"./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! exports provided: timer */function(e,o,s){"use strict";function n(){var e,o,s,n,t,r,u;e="timer",o="2020-06-01 12:00:00",s=document.getElementById(e),n=s.querySelector(".hours"),t=s.querySelector(".minutes"),r=s.querySelector(".seconds"),u=setInterval(function(){var e=function(e){var o=Date.parse(e)-Date.parse(new Date),s=Math.floor(o/1e3%60),n=Math.floor(o/1e3/60%60),t=Math.floor(o/1e3/60/60%24);return t<10&&(t="0"+t),n<10&&(n="0"+n),s<10&&(s="0"+s),{total:o,s:s,m:n,h:t,d:Math.floor(o/1e3/60/60/24)}}(o);e.total<=0&&(clearInterval(u),e.h=e.m=e.s="00");n.textContent=e.d+" д. "+e.h,t.textContent=e.m,r.textContent=e.s},1e3)}s.r(o),s.d(o,"timer",function(){return n})}});