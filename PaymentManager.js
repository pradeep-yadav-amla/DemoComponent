/*! For license information please see PaymentManager.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PaymentManager=t():e.PaymentManager=t()}(this,(()=>(()=>{"use strict";var e={287:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function v(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}function h(){}function S(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var _=S.prototype=new h;_.constructor=S,m(_,v.prototype),_.isPureReactComponent=!0;var P=Array.isArray,g=Object.prototype.hasOwnProperty,w={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,u={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)g.call(t,o)&&!j.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var f=Array(c),s=0;s<c;s++)f[s]=arguments[s+2];u.children=f}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:a,props:u,_owner:w.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,u,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return i=i(c=e),e=""===u?"."+k(c,0):u,P(i)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(i,t,o,"",(function(e){return e}))):null!=i&&(O(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(c=0,u=""===u?".":u+":",P(e))for(var f=0;f<e.length;f++){var s=u+k(a=e[f],f);c+=$(a,t,o,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),f=0;!(a=e.next()).done;)c+=$(a=a.value,t,o,s=u+k(a,f++),i);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function x(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},L={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:w};function q(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=i,t.PureComponent=S,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=q,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),u=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=w.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)g.call(t,f)&&!j.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==c?c[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:r,type:e.type,key:u,ref:i,props:o,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=q,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},540:(e,t,r)=>{e.exports=r(287)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};r.r(n),r.d(n,{default:()=>y});var o=r(540);function u(e){var t,r=null===(t=window[e.LibraryName])||void 0===t?void 0:t.default;return o.createElement("div",null,r?o.createElement(r,{InitiatePayment:e.InitiatePayment,PaymentRequest:e.PaymentRequest,SetPaymentSuccess:e.SetPaymentSuccess,SetPaymentProcessing:e.SetPaymentProcessing}):null)}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function c(e){var t=function(e){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}function f(e,t,r){return t=l(t),function(e,t){if(t&&("object"==i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,r||[],l(e).constructor):t.apply(e,r))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}const y=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=f(this,t,[e])).state={scriptLoaded:!1};var n=document.createElement("script");return n.src=r.props.PluginScript,n.async=!0,document.head.appendChild(n),n.onload=function(){r.setState({scriptLoaded:!0}),console.log("Scripts Loaded! :"+JSON.stringify(r.props.PluginScript))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return o.createElement(o.Fragment,null,this.state.scriptLoaded&&o.createElement(u,{InitiatePayment:this.props.InitiatePayment,PaymentRequest:this.props.PaymentRequest,LibraryName:this.props.LibraryName,SetPaymentProcessing:this.props.SetPaymentProcessing,SetPaymentSuccess:this.props.SetPaymentSuccess}," "))}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o.Component);return n})()));