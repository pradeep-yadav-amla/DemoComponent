/*! For license information please see SpreedlyUI.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SpreedlyComponent=t():e.SpreedlyComponent=t()}(this,(()=>(()=>{"use strict";var e={626:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,".spreedly-modalSection,.achModalSection {\n    padding: 10px;\n    font-family: sans-serif;\n}\n\n.spreedly-modalTitle, .achModalTitle {\n    font-size: 20px;\n    font-weight: 500;\n    text-transform: uppercase;\n}\n\n.spreedly-horizontalSpace {\n    background-color: #000000;\n    height: 1px;\n    margin: 15px 0 10px 0;\n}\n\n.spreedly-cardDetailsSection ,  .achCardDetailsSection {\n    border: 1px solid #cccccc;\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.spreedly-formLabel, .achFormLabel {\n    font-weight: 400;\n    font-size: 16px;\n    margin: 10px 0 10px;\n    display: block;\n}\n\n.spreedly-formInput,.achFormInput  {\n    width: 50%;\n    border: 1px solid #cccccc;\n    border-radius: 5px;\n    padding: 4px;\n    outline: none;\n    height: 30px;\n    margin-bottom: 15px;\n    box-sizing:  content-box !important;\n}\n\n.spreedly-expiryDateCVVSection {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    column-gap: 10px;\n    max-height: 95px;\n}\n\n.spreedly-expirationDateSection {\n    display: flex;\n    gap: 10px;\n}\n  \n\n.spreedly-expiryDateCVVSection input {\n    width: 100px;\n}\n\n.spreedly-formActionButtons, .spreedly-ach-formActionsButtons {\n    display: flex;\n    justify-content: flex-end;\n    gap: 20px;\n    align-items: center;\n    margin: 15px 0;\n}\n\n.spreedly-btnDefault {\n    padding: 8px 10px;\n    border-radius: 5px;\n    background: #000000;\n    color: #ffffff;\n    border: 1px solid #000000;\n}\n\n.spreedly-btnDefault:hover {\n    background: transparent;\n    color: #000000;\n}\n\n.spreedly-btnSecondary, .btnDefault {\n    padding: 8px 10px;\n    border-radius: 5px;\n    border: 1px solid #000000;\n}\n.spreedly-btnSecondary:hover {\n    background: #000000;\n    color: #ffffff;\n    opacity: 0.6;\n}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},287:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var E=g.prototype=new b;E.constructor=g,m(E,v.prototype),E.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,w={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var o,a={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:i,ref:c,props:a,_owner:w.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var k=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,o,a,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return i=i(l=e),e=""===a?"."+R(l,0):a,x(i)?(o="",null!=e&&(o=e.replace(k,"$&/")+"/"),L(i,t,o,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",x(e))for(var s=0;s<e.length;s++){var u=a+R(c=e[s],s);l+=L(c,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(c=e.next()).done;)l+=L(c=c.value,t,o,u=a+R(c,s++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function j(e,t,r){if(null==e)return e;var n=[],o=0;return L(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:T,ReactCurrentOwner:w};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:j,forEach:function(e,t,r){j(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return j(e,(function(){t++})),t},toArray:function(e){return j(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.act=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)S.call(t,s)&&!C.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},159:(e,t,r)=>{e.exports=r(287)},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=n.base?l[0]+n.base:l[0],u=a[s]||0,p="".concat(s," ").concat(u);a[s]=u+1;var d=r(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var y=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:y,references:1})}i.push(p)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var l=n(e,o),s=0;s<a.length;s++){var u=r(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var n={};r.r(n),r.d(n,{default:()=>P});var o={ACH:"ACH",CREDIT_CARD:"CreditCard"},a=r(72),i=r.n(a),c=r(825),l=r.n(c),s=r(659),u=r.n(s),p=r(56),d=r.n(p),f=r(540),y=r.n(f),m=r(113),h=r.n(m),v=r(626),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=u().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=y(),i()(v.A,b),v.A&&v.A.locals&&v.A.locals;var g=r(159);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function x(){x=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),c=new O(n||[]);return o(i,"_invoke",{value:R(e,r,c)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",y="executing",m="completed",h={};function v(){}function b(){}function g(){}var S={};s(S,i,(function(){return this}));var w=Object.getPrototypeOf,C=w&&w(w(T([])));C&&C!==r&&n.call(C,i)&&(S=C);var _=g.prototype=v.prototype=Object.create(S);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,i,c){var l=p(e[o],e,a);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==E(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(u).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function R(t,r,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=L(c,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?m:f,s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(E(t)+" is not iterable")}return b.prototype=g,o(_,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=s(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},N(k.prototype),s(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(_),s(_,l,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}function S(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){S(a,n,o,i,c,"next",e)}function c(e){S(a,n,o,i,c,"throw",e)}i(void 0)}))}}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,L(n.key),n)}}function _(e,t,r){return t=k(t),function(e,t){if(t&&("object"==E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,N()?Reflect.construct(t,r||[],k(e).constructor):t.apply(e,r))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function L(e){var t=function(e){if("object"!=E(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==E(t)?t:t+""}var j=function(e){function t(e){var r,n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=r=_(this,t,[e]),a=!1,(o=L(o="iframeRendered"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r.spreedlyScript=null,r.state={isCardExpirationValid:!1,isCVVValid:!1,isCardNumberValid:!1,isCardHolderNameValid:!1,displayError:!1},r.onclickPayNowHandler=r.onclickPayNowHandler.bind(r),r.onclickCancelHandler=r.onclickCancelHandler.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(t,e),r=t,n=[{key:"InitSpreedly",value:function(e,t,r){try{Spreedly?Spreedly.init(e,{numberEl:t,cvvEl:r}):this.props.setErrorResponse({error:"Spreedly library not defined",hasError:!0})}catch(e){this.props.setErrorResponse({error:String(e),hasError:!0})}}},{key:"registerPaymentMethodEvent",value:(a=w(x().mark((function e(){var t,r,n=this;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){var e=w(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.setClientResponse({paymentToken:t}),n.props.setInitiatePlaceOrderAction(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=w(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.setErrorResponse({error:"Invalid payment method token",hasError:!0});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Spreedly.on("paymentMethod",function(){var e=w(x().mark((function e(n,o){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==n){e.next=5;break}return e.next=3,t(n);case 3:e.next=6;break;case 5:r();case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"registerErrorEvent",value:function(){var e=this,t=function(){var t=w(x().mark((function t(r){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.setErrorResponse({error:r,hasError:!0}),Spreedly.reload();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Spreedly.on("errors",(function(e){var r="";e.forEach((function(e){r&&(r+=e.message+"<br/>")})),""!=r&&t(r)}))}},{key:"registerOnReadyEvent",value:function(){Spreedly.on("ready",(function(e){Spreedly.setFieldType("cvv","text"),Spreedly.setStyle("number","width: 50%; border-radius: 5px; border: 1px solid #cccccc; padding: 4px;outline:none;height:30px;margin-bottom:15px;"),Spreedly.setStyle("cvv","width: 15%; border-radius: 5px; border: 1px solid #cccccc; padding: 4px;height:30px; font-size: 91%;")}))}},{key:"registerFieldEvent",value:function(){var e=this;Spreedly.on("fieldEvent",(function(e,r,n,o){t(r,e,n,o)}));var t=function(t,r,n,o){var a=function(t){var r;"american_express"===(null==t||null===(r=t.cardType)||void 0===r?void 0:r.toLowerCase())&&4!==t.cvvLength?e.setState({isCVVValid:!1}):e.setState({isCVVValid:t.validCvv})},i=function(t){e.setState({isCardNumberValid:t.validNumber})};"input"==t&&("number"==n&&(e.setState({isCardNumberValid:o.validNumber}),i(o),a(o)),"cvv"==n&&(a(o),i(o)))}}},{key:"onclickCancelHandler",value:function(){this.props.setInitiateCancelAction(!0)}},{key:"validateCardExpiration",value:function(){var e=document.getElementById("month").value,t=document.getElementById("year").value,r=Number(Number((new Date).getMonth().toString())+1),n=Number((new Date).getFullYear().toString());return""==e||""==t?(this.setState({isCardExpirationValid:!1}),!1):Number(t)>n?(this.setState({isCardExpirationValid:!0}),!0):Number(t)!=n?(this.setState({isCardExpirationValid:!1}),!1):Number(e)<=12&&Number(e)>=r?(this.setState({isCardExpirationValid:!0}),!0):void 0}},{key:"validateCardHolderName",value:function(){var e=document.getElementById("card_holder_name");return e.value.split(" ").filter((function(e){return""!=e})).length>=1?(e.style.border="1px solid #cccccc",this.setState({isCardHolderNameValid:!0}),!0):(e.style.border="1px solid red",this.setState({isCardHolderNameValid:!1}),!1)}},{key:"validateCardDetails",value:function(){this.state.isCVVValid?Spreedly.setStyle("cvv","border: 1px solid #cccccc"):Spreedly.setStyle("cvv","border: 1px solid red"),this.state.isCardNumberValid?Spreedly.setStyle("number","border: 1px solid #cccccc"):Spreedly.setStyle("number","border: 1px solid red");var e=this.validateCardExpiration();if(e){var t=document.getElementById("month"),r=document.getElementById("year");t.style.border="1px solid #cccccc",r.style.border="1px solid #cccccc"}else{var n=document.getElementById("month"),o=document.getElementById("year");n.style.border="1px solid red",o.style.border="1px solid red"}var a=this.validateCardHolderName();return!!(this.state.isCVVValid&&e&&this.state.isCardNumberValid&&a)}},{key:"onclickPayNowHandler",value:function(){try{if(this.props.paymentRequest.paymentMethodType&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.CREDIT_CARD.toLowerCase()&&this.validateCardDetails()){var e=this.createPaymentRequest();Spreedly.tokenizeCreditCard(e)}else if(this.props.paymentRequest&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.ACH.toLowerCase()){var t=document.getElementById("bank-account-number").value,r=document.getElementById("routing-number").value;if(t&&r){var n=btoa(t+"/"+r);this.props.setClientResponse({paymentToken:n}),this.props.setInitiatePlaceOrderAction(!0)}}}catch(e){this.props.setErrorResponse({error:String(e),hasError:!0})}}},{key:"createPaymentRequest",value:function(){for(var e="1px solid #cccccc",t={},r=0,n=["month","year","address1","address2","city","state","zip","country","card_holder_name"];r<n.length;r++){var o=n[r];if("month"===o||"year"===o){var a=document.getElementById(o);a&&""!=a.value&&(a.style.border=e,t[o]=a.value)}else if("card_holder_name"===o){t.first_name="",t.last_name="";var i=document.getElementById(o);if(i){var c=i.value.split(" ").filter((function(e){return""!=e}));i.style.border=e,1===c.length?(t.first_name="Not provided",t.last_name=c[0]):(t.first_name=c[0],t.last_name=c[c.length-1])}}else this.setBillingAddressDetails(o,t)}return Spreedly.setStyle("number","border: "+e+";"),Spreedly.setStyle("cvv","border: "+e+";"),t}},{key:"setBillingAddressDetails",value:function(e,t){"address1"==e&&(t[e]=this.props.paymentRequest.billingAddress.addressLine1),"address2"==e&&(t[e]=this.props.paymentRequest.billingAddress.addressLine2),"city"==e&&(t[e]=this.props.paymentRequest.billingAddress.city),"state"==e&&(t[e]=this.props.paymentRequest.billingAddress.state),"zip"==e&&(t[e]=this.props.paymentRequest.billingAddress.zipCode),"country"==e&&(t[e]=this.props.paymentRequest.billingAddress.country)}},{key:"componentWillUnmount",value:function(){document&&this.spreedlyScript&&document.head.removeChild(this.spreedlyScript)}},{key:"componentDidMount",value:function(){var e=this;this.props.paymentRequest.paymentMethodType&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.CREDIT_CARD.toLowerCase()&&!this.iframeRendered&&this.props.clientToken?(this.iframeRendered=!0,this.spreedlyScript=document.createElement("script"),this.spreedlyScript.src="https://core.spreedly.com/iframe/iframe-v1.min.js",this.spreedlyScript.async=!0,document.head.appendChild(this.spreedlyScript),this.spreedlyScript.onload=function(){e.InitSpreedly(e.props.clientToken,"spreedly-number","spreedly-cvv"),e.registerPaymentMethodEvent(),e.registerErrorEvent(),e.registerOnReadyEvent(),e.registerFieldEvent()}):(this.props.paymentRequest.paymentMethodType.toLowerCase(),o.ACH.toLowerCase())}},{key:"render",value:function(){return g.createElement(g.Fragment,null,this.props.paymentRequest&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.CREDIT_CARD.toLowerCase()&&g.createElement("div",{className:"spreedly-modalSection"},g.createElement("h2",{className:"spreedly-modalTitle"},"Pay and Submit"),g.createElement("div",{className:"spreedly-horizontalSpace"}),g.createElement("form",null,g.createElement("section",{className:"spreedly-cardDetailsSection"},g.createElement("div",null,g.createElement("label",{className:"spreedly-formLabel",htmlFor:"cardHolderName","data-test-selector":"lblCardHolderName"},"Cardholder Name"),g.createElement("input",{className:"spreedly-formInput",placeholder:"Cardholder Name",id:"card_holder_name"})),g.createElement("div",null,g.createElement("label",{className:"spreedly-formLabel",htmlFor:"creditCardNumber"},"Credit Card Number"),g.createElement("div",{id:"spreedly-number",style:{maxHeight:"55px"}})),g.createElement("section",{className:"spreedly-expiryDateCVVSection"},g.createElement("div",null,g.createElement("label",{className:"spreedly-formLabel",htmlFor:"expirationDate"},"Expiration Date"),g.createElement("div",{className:"spreedly-expirationDateSection"},g.createElement("div",null,g.createElement("input",{className:"spreedly-formInput",type:"text",id:"month",size:3,maxLength:2,placeholder:"MM"}),g.createElement("span",{className:""}," /")),g.createElement("div",{className:"inline-block"},g.createElement("input",{className:"spreedly-formInput",type:"text",id:"year",size:5,maxLength:4,placeholder:"YYYY"})))),g.createElement("div",null,g.createElement("label",{className:"spreedly-formLabel",htmlFor:"cvv"},"CVV"),g.createElement("div",{id:"spreedly-cvv",className:""})))),g.createElement("section",{className:"spreedly-formActionButtons"},g.createElement("button",{className:"spreedly-btnDefault",id:"submit-payment",type:"button",onClick:this.onclickPayNowHandler}," ","Submit Payment"),g.createElement("button",{className:"spreedly-btnSecondary",id:"cancel-payment",type:"button",onClick:this.onclickCancelHandler}," ","Cancel Payment")))),this.props.paymentRequest&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.ACH.toLowerCase()&&g.createElement("div",{className:"achModalSection"},g.createElement("h2",{className:"achModalTitle"},"Bank Details"),g.createElement("div",{className:"achHorizontalSpace"}),g.createElement("form",{id:"ach-form"},g.createElement("section",{className:"achCardDetailsSection"},g.createElement("div",null,g.createElement("label",{className:"achFormLabel",htmlFor:"accountHolderName","data-test-selector":"lblAccountHolderName"},"Account Holder Name",g.createElement("span",{className:"requiredField"},"*")),g.createElement("input",{className:"achFormInput",placeholder:"Account Holder Name",id:"account-holder-name",maxLength:12})),g.createElement("div",null,g.createElement("label",{className:"achFormLabel",htmlFor:"accountType","data-test-selector":"lblAccountType"},"Account Type",g.createElement("span",{className:"requiredField"},"*")),g.createElement("select",{id:"account-type",name:"bank_account_type",style:{height:"30px",borderRadius:"5px",border:"1px solid #cccccc",padding:"4px",marginBottom:"15px"}},g.createElement("option",{value:"",disabled:!0,selected:!0},"Select type"),g.createElement("option",{value:"checking"},"Checking"),g.createElement("option",{value:"savings"},"Savings"))),g.createElement("div",null,g.createElement("label",{className:"achFormLabel",htmlFor:"bankAccountNumber","data-test-selector":"lblBankAccountNumber"},"Bank Account Number",g.createElement("span",{className:"requiredField"},"*")),g.createElement("input",{className:"achFormInput",placeholder:"Account Number ",id:"bank-account-number",maxLength:12})),g.createElement("div",null,g.createElement("label",{className:"achFormLabel",htmlFor:"Routing Number","data-test-selector":"lblRoutingNumber"},"Routing Number",g.createElement("span",{className:"requiredField"},"*")),g.createElement("input",{className:"achFormInput",placeholder:"",id:"routing-number",maxLength:12}))),g.createElement("section",{className:"spreedly-ach-formActionsButtons"},g.createElement("button",{className:"spreedly-btnDefault",id:"submit-payment",type:"button",onClick:this.onclickPayNowHandler},"Submit Payment"),g.createElement("button",{className:"spreedly-btnSecondary",id:"cancel-payment",type:"button",onClick:this.onclickCancelHandler},"Cancel Payment")))))}}],n&&C(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,a}(g.Component);const P=j;return n})()));