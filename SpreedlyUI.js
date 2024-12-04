/*! For license information please see SpreedlyUI.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SpreedlyComponent=t():e.SpreedlyComponent=t()}(this,(()=>(()=>{"use strict";var e={559:(e,t,r)=>{r.d(t,{Ay:()=>c});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([e.id,".vtwksOESQtQkPzK7bdUO {\n    padding: 10px;\n}\n\n.m3H_okAzOB83oS4rUi93 {\n    font-size: 20px;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n.EBJyahCWdMtHW8d9bmuj {\n    background-color: #000000;\n    height: 1px;\n    margin: 15px 0 10px 0;\n}\n\n.D6AgvsVr54t4uWJ_qafG {\n    border: 1px solid #cccccc;\n    border-radius: 5px;\n    padding: 10px;\n    max-height: 300px;\n}\n\n.DHHWaYZ4RZC8_H9PBDOc {\n    font-weight: 400;\n    font-size: 16px;\n    margin: 10px 0 5px 0;\n}\n\n.gsph_d5EcxrTS0wCQKlK {\n    width: 50%;\n    border: 1px solid #cccccc;\n    border-radius: 5px;\n    padding: 4px;\n    outline: none;\n}\n\n.FmAdoo6mbTtQ3bzOa6nA {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    padding-bottom: 20px;\n    -moz-column-gap: 10px;\n         column-gap: 10px;\n}\n\n.aJpXWPAyukS_gxyRV6Aw {\n    display: flex;\n    gap: 10px;\n\n}\n\n.FmAdoo6mbTtQ3bzOa6nA input {\n    width: 100px;\n}\n\n.TAvbVQMIf1PasVuagAWK {\n    display: flex;\n    justify-content: flex-end;\n    gap: 20px;\n    align-items: center;\n    margin: 15px 0;\n}\n\n.LXyv3G020jRr5nx_5PU_ {\n    background: #000000;\n    color: #ffffff;\n}\n\n.LXyv3G020jRr5nx_5PU_:hover {\n    background: transparent;\n    color: #000000;\n}\n\n.XZvkJOKO8UGrv81W6dtQ, .LXyv3G020jRr5nx_5PU_ {\n    padding: 8px 10px;\n    border-radius: 5px;\n}\n.XZvkJOKO8UGrv81W6dtQ:hover {\n    background: #000000;\n    color: #ffffff;\n    opacity: 0.6;\n}",""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},287:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var E=g.prototype=new b;E.constructor=g,m(E,v.prototype),E.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,w={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var o,a={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=t[o]);var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:r,type:e,key:i,ref:c,props:a,_owner:w.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var N=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,o,a,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case n:s=!0}}if(s)return i=i(s=e),e=""===a?"."+R(s,0):a,x(i)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),L(i,t,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(s=0,a=""===a?".":a+":",x(e))for(var u=0;u<e.length;u++){var l=a+R(c=e[u],u);s+=L(c,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)s+=L(c=c.value,t,o,l=a+R(c,u++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function O(e,t,r){if(null==e)return e;var n=[],o=0;return L(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var j={current:null},A={transition:null},T={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:A,ReactCurrentOwner:w};function I(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:O,forEach:function(e,t,r){O(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=g,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.act=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!C.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:r,type:e.type,key:a,ref:i,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=I,t.useCallback=function(e,t){return j.current.useCallback(e,t)},t.useContext=function(e){return j.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return j.current.useDeferredValue(e)},t.useEffect=function(e,t){return j.current.useEffect(e,t)},t.useId=function(){return j.current.useId()},t.useImperativeHandle=function(e,t,r){return j.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return j.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return j.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return j.current.useMemo(e,t)},t.useReducer=function(e,t,r){return j.current.useReducer(e,t,r)},t.useRef=function(e){return j.current.useRef(e)},t.useState=function(e){return j.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return j.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return j.current.useTransition()},t.version="18.3.1"},540:(e,t,r)=>{e.exports=r(287)},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=n.base?s[0]+n.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var y=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:y,references:1})}i.push(p)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},159:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var n={};r.r(n),r.d(n,{default:()=>T});var o={ACH:"ACH",CREDIT_CARD:"CreditCard"},a="Submit Payment",i="Cancel Payment",c=r(540),s=r(72),u=r.n(s),l=r(825),p=r.n(l),d=r(659),f=r.n(d),y=r(56),m=r.n(y),h=r(159),v=r.n(h),b=r(113),g=r.n(b),E=r(559),x={};x.styleTagTransform=g(),x.setAttributes=m(),x.insert=f().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=v(),u()(E.Ay,x);const S=E.Ay&&E.Ay.locals?E.Ay.locals:void 0;function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(){C=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,i=Object.create(a.prototype),c=new j(n||[]);return o(i,"_invoke",{value:R(e,r,c)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",y="executing",m="completed",h={};function v(){}function b(){}function g(){}var E={};u(E,i,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(A([])));S&&S!==r&&n.call(S,i)&&(E=S);var _=g.prototype=v.prototype=Object.create(E);function k(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function r(o,a,i,c){var s=p(e[o],e,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==w(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(l).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function R(t,r,n){var o=d;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=L(c,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(t,r,n);if("normal"===u.type){if(o=n.done?m:f,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function L(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(w(t)+" is not iterable")}return b.prototype=g,o(_,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=u(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},k(N.prototype),u(N.prototype,c,(function(){return this})),t.AsyncIterator=N,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new N(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(_),u(_,s,"Generator"),u(_,i,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}function _(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function k(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){_(a,n,o,i,c,"next",e)}function c(e){_(a,n,o,i,c,"throw",e)}i(void 0)}))}}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,j(n.key),n)}}function R(e,t,r){return t=O(t),function(e,t){if(t&&("object"==w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,L()?Reflect.construct(t,r||[],O(e).constructor):t.apply(e,r))}function L(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(L=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function j(e){var t=function(e){if("object"!=w(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==w(t)?t:t+""}var A=function(e){function t(e){var r,n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=r=R(this,t,[e]),a=!1,(o=j(o="iframeRendered"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r.state={scriptLoaded:!1,isCardExpiratonValid:!1,isCVVValid:!1,isCardNumberValid:!1,isCardHolderNameValid:!1},r.onclickPayNowHandler=r.onclickPayNowHandler.bind(r),r.onclickCancelHandler=r.onclickCancelHandler.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(t,e),r=t,n=[{key:"InitSpreedly",value:function(e,t,r){try{Spreedly?Spreedly.init(e,{numberEl:t,cvvEl:r}):this.props.setErrorResponse({error:"Spreedly library not defined",hasError:!0})}catch(e){this.props.setErrorResponse({error:String(e),hasError:!0})}}},{key:"registerPaymentMethodEvent",value:(s=k(C().mark((function e(){var t,r,n=this;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){var e=k(C().mark((function e(t){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.setClientResponse({paymentToken:t}),n.props.setInitiatePlaceOrderAction(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=k(C().mark((function e(){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.setErrorResponse({error:"Invalid payment method token",hasError:!0});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Spreedly.on("paymentMethod",function(){var e=k(C().mark((function e(n,o){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==n){e.next=5;break}return e.next=3,t(n);case 3:e.next=6;break;case 5:r();case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})},{key:"registerErrorEvent",value:function(){var e=this,t=function(){var t=k(C().mark((function t(r){return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.setErrorResponse({error:r,hasError:!0}),Spreedly.reload();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Spreedly.on("errors",(function(e){var r="";e.forEach((function(e){r&&(r+=e.message+"<br/>")})),""!=r&&t(r)}))}},{key:"registerOnReadyEvent",value:function(){Spreedly.on("ready",(function(e){Spreedly.setFieldType("cvv","text"),Spreedly.setStyle("number","width: 49.5%; border-radius: 5px; border: 1px solid #cccccc; padding: 4px; outline:none; font-size:120%; font-family:inherit;font-weight:inherit;font-height:inherit;line-height:inherit;line-spacing:inherit;"),Spreedly.setStyle("cvv","width: 9xpx; border-radius: 5px; border: 1px solid #cccccc; padding: 4px; outline:none; font-size:120%; font-family:inherit;font-weight:inherit;font-height:inherit;line-height:inherit;line-spacing:inherit;")}))}},{key:"registerFieldEvent",value:function(){var e=this;Spreedly.on("fieldEvent",(function(e,r,n,o){t(r,e,n,o)}));var t=function(t,r,n,o){var a=function(t){e.setState({isCVVValid:t.validCvv}),t.validCvv?Spreedly.setStyle("cvv","background-color: #CDFFE6;"):Spreedly.setStyle("cvv","background-color: #FFFFFF;")},i=function(t){e.setState({isCardNumberValid:t.validNumber}),t.validNumber?Spreedly.setStyle("number","background-color: #CDFFE6;"):Spreedly.setStyle("number","background-color: #FFFFFF;")};"input"==t&&("number"==n&&(e.setState({isCardNumberValid:o.validNumber}),i(o),a(o)),"cvv"==n&&(a(o),i(o)))}}},{key:"onclickCancelHandler",value:function(){this.props.setInitiateCancelAction(!0)}},{key:"validateCardExpiration",value:function(){var e=document.getElementById("month").value,t=document.getElementById("year").value,r=Number(Number((new Date).getMonth().toString())+1),n=Number((new Date).getFullYear().toString());return""==e||""==t?(this.setState({isCardExpiratonValid:!1}),!1):Number(t)>n?(this.setState({isCardExpiratonValid:!0}),!0):Number(t)!=n?(this.setState({isCardExpiratonValid:!1}),!1):Number(e)>12||Number(e)>r?(this.setState({isCardExpiratonValid:!0}),!0):void 0}},{key:"validateCardHolderName",value:function(){var e=document.getElementById("card_holder_name");return e.value.split(" ").filter((function(e){return""!=e})).length>=1?(e.style.border="1px solid #cccccc",this.setState({isCardHolderNameValid:!0}),!0):(e.style.border="1px solid red",this.setState({isCardHolderNameValid:!1}),!1)}},{key:"validateCardDetails",value:function(){this.state.isCVVValid?Spreedly.setStyle("cvv","border: 1px solid #cccccc"):Spreedly.setStyle("cvv","border: 1px solid red"),this.state.isCardNumberValid?Spreedly.setStyle("number","border: 1px solid #cccccc"):Spreedly.setStyle("number","border: 1px solid red");var e=this.validateCardExpiration();if(e){var t=document.getElementById("month"),r=document.getElementById("year");t.style.border="1px solid #cccccc",r.style.border="1px solid #cccccc"}else{var n=document.getElementById("month"),o=document.getElementById("year");n.style.border="1px solid red",o.style.border="1px solid red"}var a=this.validateCardHolderName();return!!(this.state.isCVVValid&&e&&this.state.isCardNumberValid&&a)}},{key:"onclickPayNowHandler",value:function(){try{if(this.props.paymentRequest.paymentMethodType&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.CREDIT_CARD.toLowerCase()&&this.validateCardDetails()){var e=this.createPaymentRequest();Spreedly.tokenizeCreditCard(e)}else if(this.props.paymentRequest&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.ACH.toLowerCase()){var t=document.getElementById("accountHolderNumber").value,r=document.getElementById("routingNumber").value;if(t&&r){var n=btoa(t+"/"+r);this.setState({isCardExpiratonValid:!0,isCVVValid:!0,isCardNumberValid:!0}),this.props.setClientResponse({paymentToken:n}),this.props.setInitiatePlaceOrderAction(!0)}}}catch(e){this.props.setErrorResponse({error:String(e),hasError:!0})}}},{key:"createPaymentRequest",value:function(){for(var e="1px solid #ccc",t={},r=0,n=["month","year","address1","address2","city","state","zip","country","card_holder_name"];r<n.length;r++){var o=n[r];if("month"===o||"year"===o){var a=document.getElementById(o);a&&""!=a.value&&(a.style.border=e,t[o]=a.value)}else if("card_holder_name"===o){t.first_name="",t.last_name="";var i=document.getElementById(o);if(i){var c=i.value.split(" ").filter((function(e){return""!=e}));i.style.border=e,1===c.length?(t.first_name="Not provided",t.last_name=c[0]):(t.first_name=c[0],t.last_name=c[c.length-1])}}else this.setBillingAddressDetails(o,t)}return Spreedly.setStyle("number","border: "+e+";"),Spreedly.setStyle("cvv","border: "+e+";"),t}},{key:"setBillingAddressDetails",value:function(e,t){"address1"==e&&(t[e]=this.props.paymentRequest.billingAddress.addressLine1),"address2"==e&&(t[e]=this.props.paymentRequest.billingAddress.addressLine2),"city"==e&&(t[e]=this.props.paymentRequest.billingAddress.city),"state"==e&&(t[e]=this.props.paymentRequest.billingAddress.state),"zip"==e&&(t[e]=this.props.paymentRequest.billingAddress.zipCode),"country"==e&&(t[e]=this.props.paymentRequest.billingAddress.country)}},{key:"componentWillUnmount",value:function(){document&&this.spreedlyScript&&document.head.removeChild(this.spreedlyScript)}},{key:"componentDidMount",value:function(){var e=this;if(this.props.paymentRequest.paymentMethodType&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.CREDIT_CARD.toLowerCase()&&this.props.clientToken&&!this.iframeRendered)this.iframeRendered=!0,this.spreedlyScript=document.createElement("script"),this.spreedlyScript.src="https://core.spreedly.com/iframe/iframe-v1.min.js",this.spreedlyScript.async=!0,document.head.appendChild(this.spreedlyScript),this.spreedlyScript.onload=function(){e.InitSpreedly(e.props.clientToken,"spreedly-number","spreedly-cvv"),e.registerPaymentMethodEvent(),e.registerErrorEvent(),e.registerOnReadyEvent(),e.registerFieldEvent()};else if(this.props.paymentRequest.paymentMethodType.toLowerCase()===o.ACH.toLowerCase()){var t=document.getElementById("submit-payment");t&&t.addEventListener("click",this.onclickPayNowHandler)}}},{key:"render",value:function(){return c.createElement(c.Fragment,null,this.props.paymentRequest&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.CREDIT_CARD.toLowerCase()&&c.createElement("div",{className:S.modalSection},c.createElement("h2",{className:S.modalTitle},"Pay and Submit"),c.createElement("div",{className:S.horizontalSpace}),c.createElement("form",null,c.createElement("section",{className:S.cardDetailsSection},c.createElement("div",null,c.createElement("label",{className:S.formLabel,htmlFor:"cardHolderName","data-test-selector":"lblCardHolderName"}," ","Cardholder Name"),c.createElement("input",{className:S.formInput,placeholder:"Cardholder Name",id:"card_holder_name"})),c.createElement("div",null,c.createElement("label",{className:S.formLabel,htmlFor:"creditCardNumber"},"Credit Card Number"),c.createElement("div",{id:"spreedly-number",className:"spreedly-card-number h-10 auth-card-connect"})),c.createElement("section",{className:S.expiryDateCVVSection},c.createElement("div",null,c.createElement("label",{className:S.formLabel,htmlFor:"expirationDate"},"Expiration Date"),c.createElement("div",{className:S.expirationDateSection},c.createElement("div",{className:""},c.createElement("input",{className:S.formInput,type:"text",id:"month",size:3,maxLength:2,placeholder:"MM"})),c.createElement("span",{className:""}," /"),c.createElement("div",{className:"inline-block"},c.createElement("input",{className:S.formInput,type:"text",id:"year",size:5,maxLength:4,placeholder:"YYYY"})))),c.createElement("div",null,c.createElement("label",{className:S.formLabel,htmlFor:"cvv"},"CVV"),c.createElement("div",{id:"spreedly-cvv"})))),c.createElement("section",{className:S.formActionButtons},c.createElement("button",{type:"button",className:S.btnDefault,onClick:this.onclickPayNowHandler},a),c.createElement("button",{type:"button",className:S.btnSecondary,onClick:this.onclickCancelHandler},i)))),this.props.paymentRequest&&this.props.paymentRequest.paymentMethodType.toLowerCase()===o.ACH.toLowerCase()&&c.createElement("form",{id:"ach-form"},c.createElement("fieldset",{className:"spf-fs-cc"},c.createElement("h2",null),c.createElement("div",{className:"spf-field spf-field-exp"},c.createElement("label",null,"Bank Details"),c.createElement("div",{className:"spf-field-group spf-month"},c.createElement("input",{type:"text",className:"spf-input-text spf-exp",id:"accountHolderNumber",size:6,maxLength:12,placeholder:"Account Holder Number"})),c.createElement("span",{className:"spf-exp-divider"},"/"),c.createElement("div",{className:"spf-field-group spf-year"},c.createElement("input",{type:"text",className:"spf-input-text spf-exp",id:"routingNumber",size:5,maxLength:12,placeholder:"Routing Number"})))),c.createElement("fieldset",{className:"spf-field-submit"},c.createElement("button",{id:"submit-payment",type:"button",className:"button"},a),c.createElement("button",{id:"cancel-payment",type:"button",className:"button"},i))))}}],n&&N(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,s}(c.Component);const T=A;return n})()));