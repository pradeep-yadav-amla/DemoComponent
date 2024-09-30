/*! For license information please see SpreedlyUI.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SpreedlyUI=t():e.SpreedlyUI=t()}(this,(()=>(()=>{"use strict";var e={287:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var w=g.prototype=new b;w.constructor=g,h(w,v.prototype),w.isPureReactComponent=!0;var S=Array.isArray,x=Object.prototype.hasOwnProperty,E={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var o,a={},i=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,o)&&!P.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:u,props:a,_owner:E.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,o,a,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===a?"."+O(c,0):a,S(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),L(i,t,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,a=""===a?".":a+":",S(e))for(var s=0;s<e.length;s++){var l=a+O(u=e[s],s);c+=L(u,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(u=e.next()).done;)c+=L(u=u.value,t,o,l=a+O(u,s++),i);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function N(e,t,r){if(null==e)return e;var n=[],o=0;return L(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},T={transition:null},I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:T,ReactCurrentOwner:E};function A(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:N,forEach:function(e,t,r){N(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=A,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=E.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)x.call(t,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=A,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,r){return R.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,r){return R.current.useReducer(e,t,r)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return R.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},540:(e,t,r)=>{e.exports=r(287)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(){a=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),u=new R(n||[]);return i(a,"_invoke",{value:O(e,r,u)}),a}function y(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var d="suspendedStart",h="suspendedYield",m="executing",v="completed",b={};function g(){}function w(){}function S(){}var x={};f(x,c,(function(){return this}));var E=Object.getPrototypeOf,P=E&&E(E(T([])));P&&P!==r&&n.call(P,c)&&(x=P);var _=S.prototype=g.prototype=Object.create(x);function k(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function r(a,i,u,c){var s=y(e[a],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,u,c)}),(function(e){r("throw",e,u,c)})):t.resolve(f).then((function(e){l.value=e,u(l)}),(function(e){return r("throw",e,u,c)}))}c(s.arg)}var a;i(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function O(t,r,n){var o=d;return function(a,i){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=L(u,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=y(t,r,n);if("normal"===s.type){if(o=n.done?v:h,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=y(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,b;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(o(t)+" is not iterable")}return w.prototype=S,i(_,"constructor",{value:S,configurable:!0}),i(S,"constructor",{value:w,configurable:!0}),w.displayName=f(S,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,S):(e.__proto__=S,f(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},k(C.prototype),f(C.prototype,s,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new C(p(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(_),f(_,l,"Generator"),f(_,c,(function(){return this})),f(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}function i(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function u(e){i(a,n,o,u,c,"next",e)}function c(e){i(a,n,o,u,c,"throw",e)}u(void 0)}))}}r.r(n),r.d(n,{default:()=>$});var c="https://localhost:7197";function s(e){return l.apply(this,arguments)}function l(){return(l=u(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}return e.next=4,v(t);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.abrupt("return",{});case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=u(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}return e.next=4,E(t);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.abrupt("return",{});case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function y(e){return d.apply(this,arguments)}function d(){return(d=u(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}return e.next=4,g(t);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.abrupt("return",{});case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=u(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}return e.next=4,S(t);case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.abrupt("return",{});case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return(b=u(a().mark((function e(t){var r,n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(r=(r=c+"/Spreedly/CC/{PluginIdentifier}/Authorize").replace("{PluginIdentifier}",encodeURIComponent(null==t?void 0:t.configurationSetCode))).replace(/[?&]$/,""),console.log("client-layer Spreedly_Authorize : "+r+" requestBody  : "+JSON.stringify(t)),n=JSON.stringify(t),e.t0=n,e.next=8,_("POST");case 8:return e.t1=e.sent,o={body:e.t0,method:"POST",cache:"no-store",headers:e.t1},e.abrupt("return",fetch(r,o).then((function(e){var t=e.json();return console.log("Response : "+e+" , JSON response : "+t),t})));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=u(a().mark((function e(t){var r,n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(r=(r=c+"/Spreedly/ACH/{PluginIdentifier}/CreateBankAccount").replace("{PluginIdentifier}",encodeURIComponent(null==t?void 0:t.configurationSetCode))).replace(/[?&]$/,""),console.log("client-layer Spreedly_CreateBankAccount : "+r+" requestBody  : "+JSON.stringify(t)),n=JSON.stringify(t),e.t0=n,e.next=8,_("POST");case 8:return e.t1=e.sent,o={body:e.t0,method:"POST",cache:"no-store",headers:e.t1},e.abrupt("return",fetch(r,o).then((function(e){var t=e.json();return console.log("Response : "+e+" , JSON response : "+t),t})));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return x.apply(this,arguments)}function x(){return(x=u(a().mark((function e(t){var r,n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(r=(r=c+"/Spreedly/ACH/{PluginIdentifier}/CreateBankAccount").replace("{PluginIdentifier}",encodeURIComponent(null==t?void 0:t.configurationSetCode))).replace(/[?&]$/,""),console.log("client-layer Spreedly_ACH_Purchase : "+r+" requestBody  : "+JSON.stringify(t)),n=JSON.stringify(t),e.t0=n,e.next=8,_("POST");case 8:return e.t1=e.sent,o={body:e.t0,method:"POST",cache:"no-store",headers:e.t1},e.abrupt("return",fetch(r,o).then((function(e){var t=e.json();return console.log("Response : "+e+" , JSON response : "+t),t})));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return P.apply(this,arguments)}function P(){return(P=u(a().mark((function e(t){var r,n,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(r=(r=c+"/Spreedly/CC/{PluginIdentifier}/Capture").replace("{PluginIdentifier}",encodeURIComponent(null==t?void 0:t.configurationSetCode))).replace(/[?&]$/,""),console.log("client-layer Spreedly_Capture : "+r+" requestBody  : "+JSON.stringify(t)),n=JSON.stringify(t),e.t0=n,e.next=8,_("POST");case 8:return e.t1=e.sent,o={body:e.t0,method:"POST",cache:"no-store",headers:e.t1},e.abrupt("return",fetch(r,o).then((function(e){return e.json()})));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){var t=new Headers;return"post"!=(null==e?void 0:e.toLowerCase())&&"put"!=(null==e?void 0:e.toLowerCase())||t.set("Content-Type","application/json-patch+json"),t.set("Accept","text/plain"),t}var k={ACH:"ACH",CreditCard:"CreditCard"},C=r(540);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(){L=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),u=new R(n||[]);return o(i,"_invoke",{value:k(e,r,u)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var p="suspendedStart",y="suspendedYield",d="executing",h="completed",m={};function v(){}function b(){}function g(){}var w={};s(w,i,(function(){return this}));var S=Object.getPrototypeOf,x=S&&S(S(T([])));x&&x!==r&&n.call(x,i)&&(w=x);var E=g.prototype=v.prototype=Object.create(w);function P(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,a,i,u){var c=f(e[o],e,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==O(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,u)}))}u(c.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function k(t,r,n){var o=p;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===h){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var c=C(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(t,r,n);if("normal"===s.type){if(o=n.done?h:y,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=h,n.method="throw",n.arg=s.arg)}}}function C(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=f(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(O(t)+" is not iterable")}return b.prototype=g,o(E,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},P(_.prototype),s(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new _(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},P(E),s(E,c,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}function N(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){N(a,n,o,i,u,"next",e)}function u(e){N(a,n,o,i,u,"throw",e)}i(void 0)}))}}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,T(n.key),n)}}function T(e){var t=function(e){if("object"!=O(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==O(t)?t:t+""}function I(e,t,r){return t=F(t),function(e,t){if(t&&("object"==O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,A()?Reflect.construct(t,r||[],F(e).constructor):t.apply(e,r))}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}const $=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=I(this,t,[e])).onclickPaynowHandler=r.onclickPaynowHandler.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(t,e),r=t,n=[{key:"InitSpreedly",value:function(e,t,r){Spreedly.init(e,{numberEl:t,cvvEl:r})}},{key:"registerPaymentMethodEvent",value:(a=j(L().mark((function e(){var t,r,n=this;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="",r=function(){var e=j(L().mark((function e(t){var r,o;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!(o={paymentMethodToken:t,total:"100",gatewayCurrencyCode:"USD",orderId:"MA-100-99-ZXP",configurationSetCode:"Spreedly",isCapture:!0})){e.next=22;break}return e.next=5,s(o);case 5:if(!(r=e.sent)){e.next=21;break}if(!o.isCapture){e.next=16;break}return e.next=10,f({configurationSetCode:o.configurationSetCode,transactionId:r.TransactionId});case 10:return(r=e.sent)&&(n.props.SetPaymentResponse(r),n.props.SetPaymentProcessing(!1),n.props.SetPaymentSuccess(!0)),console.log("Capture response : "+JSON.stringify(r)),e.abrupt("return",r);case 16:return n.props.SetPaymentResponse(r),n.props.SetPaymentProcessing(!1),n.props.SetPaymentSuccess(!0),console.log("Authorize response : "+JSON.stringify(r)),e.abrupt("return",r);case 21:case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Spreedly.on("paymentMethod",function(){var e=j(L().mark((function e(n,o){var a,i;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(a=document.getElementById("payment_method_token"))||a.setAttribute("value",n),(i=document.getElementById("message"))&&(i.innerHTML="Success! The returned payment method token is: "+n),console.log("PMData :"+JSON.stringify(o)),""==(t=n)){e.next=9;break}return e.next=9,r(t);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"registerErrorEvent",value:function(){Spreedly.on("errors",(function(e){var t=document.getElementById("errors"),r="1px solid red";e.forEach((function(e){var n=document.getElementById(e.attribute);n?n.style.border=r:Spreedly.setStyle(e.attribute,"border: ".concat(r,";")),t&&(t.innerHTML+=e.message+"<br/>",alert(JSON.stringify(e)))}))}))}},{key:"registerOnReadyEvent",value:function(){Spreedly.on("ready",(function(e){Spreedly.setFieldType("number","text"),Spreedly.setFieldType("cvv","text"),Spreedly.setNumberFormat("maskedFormat"),Spreedly.setStyle("number","width: 67%; border-radius: 3px; border: 1px solid #ccc; padding: .65em .5em; font-size: 91%;"),Spreedly.setStyle("cvv","width: 30%; border-radius: 3px; border: 1px solid #ccc; padding: .65em .5em; font-size: 91%;")}))}},{key:"registerFieldEvent",value:function(){Spreedly.on("fieldEvent",(function(e,t,r,n){"input"===t&&(Spreedly.setStyle("cvv",n.validCvv?"background-color: #CDFFE6;":"background-color: #FFFFFF;"),Spreedly.setStyle("number",n.validNumber?"background-color: #CDFFE6;":"background-color: #FFFFFF;"))}))}},{key:"onclickPaynowHandler",value:function(){this.props.SetPaymentProcessing(!0),this.props.SetInitiatePlaceOrder(!0)}},{key:"setBillingAdddressDetails",value:function(e,t){"first_name"==e&&(t[e]=this.props.PaymentRequest.billingAddress.firstName),"last_name"==e&&(t[e]=this.props.PaymentRequest.billingAddress.lastName),"address1"==e&&(t[e]=this.props.PaymentRequest.billingAddress.addressLine1),"address2"==e&&(t[e]=this.props.PaymentRequest.billingAddress.addressLine2),"city"==e&&(t[e]=this.props.PaymentRequest.billingAddress.city),"state"==e&&(t[e]=this.props.PaymentRequest.billingAddress.state),"zip"==e&&(t[e]=this.props.PaymentRequest.billingAddress.zipCode),"country"==e&&(t[e]=this.props.PaymentRequest.billingAddress.country)}},{key:"componentDidUpdate",value:function(e,t,r){if(this.props.InitiatePayment)if(this.props.PaymentRequest.paymentMethodType.toLowerCase()===k.CreditCard.toLowerCase()){for(var n="1px solid #ccc",o=["first_name","last_name","month","year","address1","address2","city","state","zip","country"],a={},i=0;i<o.length;i++){var u=o[i];if("month"===u||"year"===u){var c=document.getElementById(u);c&&(c.style.border=n,a[u]=c.value)}else this.setBillingAdddressDetails(u,a)}Spreedly.setStyle("number","border: "+n+";"),Spreedly.setStyle("cvv","border: "+n+";"),Spreedly.tokenizeCreditCard(a)}else if(this.props.PaymentRequest.paymentMethodType.toLowerCase()===k.ACH.toLowerCase()){var s,l,f=null===(s=document.getElementById("accountHolderNumber"))||void 0===s?void 0:s.value,p=null===(l=document.getElementById("routingNumber"))||void 0===l?void 0:l.value;this.createPurchase(f,p)}}},{key:"createPurchase",value:(o=j(L().mark((function e(t,r){var n,o;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y({bankAccountNumber:t,routingNumber:r,configurationSetCode:this.props.PaymentRequest.configurationSetCode});case 2:if(!(n=e.sent).IsSuccess){e.next=11;break}return e.next=6,h({paymentMethodToken:n.GatewayPaymentMethodToken,total:this.props.PaymentRequest.total,gatewayCurrencyCode:this.props.PaymentRequest.gatewayCurrencyCode,orderId:this.props.PaymentRequest.orderId});case 6:return o=e.sent,this.props.SetPaymentResponse(o),this.props.SetPaymentProcessing(!1),this.props.SetPaymentSuccess(!0),e.abrupt("return",o);case 11:this.props.SetPaymentProcessing(!1),this.props.SetPaymentSuccess(!1);case 13:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"componentDidMount",value:function(){var e=this;if(this.props.PaymentRequest.paymentMethodType.toLowerCase()===k.CreditCard.toLowerCase()){var t=document.createElement("script");return t.src="https://core.spreedly.com/iframe/iframe-v1.min.js",t.async=!0,document.body.appendChild(t),t.onload=function(){e.InitSpreedly(e.props.PaymentRequest.spreedlyEnvironmentKey,"spreedly-number-test","spreedly-cvv-test"),e.registerPaymentMethodEvent(),e.registerErrorEvent(),e.registerOnReadyEvent(),e.registerFieldEvent();var t=document.getElementById("submit-payment");t&&t.addEventListener("click",e.onclickPaynowHandler)},function(){document.body.removeChild(t)}}if(this.props.PaymentRequest.paymentMethodType.toLowerCase()===k.ACH.toLowerCase()){var r=document.getElementById("submit-payment");r&&r.addEventListener("click",this.onclickPaynowHandler)}}},{key:"render",value:function(){return C.createElement(C.Fragment,null,this.props.PaymentRequest.paymentMethodType.toLowerCase()===k.CreditCard.toLowerCase()&&C.createElement("form",{id:"cc-form",acceptCharset:"UTF-8",className:"spf-form",method:"POST",action:"#"},C.createElement("input",{type:"hidden",name:"payment_method_token",id:"payment_method_token",value:""}),C.createElement("fieldset",{className:"spf-fs-cc"},C.createElement("h2",null,"Payment Details"),C.createElement("div",{className:"spf-field"},C.createElement("label",{className:"spf-field-group spf-number"},"Credit Card Number"),C.createElement("label",{className:"spf-field-group spf-verification_value"},"CVV"),C.createElement("div",{id:"spreedly-number-test",className:"spf-field-group spf-number spf-field-cc"}),C.createElement("div",{id:"spreedly-cvv-test",className:"spf-field-group spf-verification_value spf-field-cc"})),C.createElement("div",{className:"spf-field spf-field-exp"},C.createElement("label",null,"Expiration Date"),C.createElement("div",{className:"spf-field-group spf-month"},C.createElement("input",{type:"text",className:"spf-input-text spf-exp",id:"month",size:3,maxLength:2,placeholder:"MM"})),C.createElement("span",{className:"spf-exp-divider"},"/"),C.createElement("div",{className:"spf-field-group spf-year"},C.createElement("input",{type:"text",className:"spf-input-text spf-exp",id:"year",size:5,maxLength:4,placeholder:"YYYY"})))),C.createElement("fieldset",{className:"spf-field-submit"},C.createElement("button",{id:"submit-payment",type:"button",className:"button"},"Submit Payment"),C.createElement("div",{id:"message"}),C.createElement("div",{id:"errors"}))),this.props.PaymentRequest.paymentMethodType.toLowerCase()===k.ACH.toLowerCase()&&C.createElement("form",{id:"ach-form"},C.createElement("fieldset",{className:"spf-fs-cc"},C.createElement("h2",null,"Payment Details"),C.createElement("div",{className:"spf-field spf-field-exp"},C.createElement("label",null,"Bank Details"),C.createElement("div",{className:"spf-field-group spf-month"},C.createElement("input",{type:"text",className:"spf-input-text spf-exp",id:"accountHolderNumber",size:6,maxLength:12,placeholder:"Account Holder Number"})),C.createElement("span",{className:"spf-exp-divider"},"/"),C.createElement("div",{className:"spf-field-group spf-year"},C.createElement("input",{type:"text",className:"spf-input-text spf-exp",id:"routingNumber",size:5,maxLength:12,placeholder:"Routing Number"})))),C.createElement("fieldset",{className:"spf-field-submit"},C.createElement("button",{id:"submit-payment",type:"button",className:"button"},"Submit Payment"))))}}],n&&R(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,o,a}(C.Component);return n})()));