!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.PMLibrary=t(require("React")):e.PMLibrary=t(e.React)}(this,(e=>(()=>{"use strict";var t={883:t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};n.r(o),n.d(o,{PaymentManager:()=>i});var a=n(883),c=n.n(a);function u(e){const t=window[e.LibraryName]?.[e.ComponentName];return c().createElement("div",null,c().createElement("h1",null,"React App"),t?c().createElement(t,{PM_URI:e.PM_Uri,PaymentRequest:e.PaymentRequest}):null)}function i(e){const[t,r]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{e.PluginScripts.forEach((e=>{const t=document.createElement("script");t.src=e,t.async=!0,document.head.appendChild(t)})),console.log("Scripts Loadded!"),r(!0)}),[]),React.createElement(React.Fragment,null," ",React.createElement("h1",null,"PM Script"),t&&React.createElement(u,{PM_Uri:e.PM_Uri,LibraryName:e.LibraryName,ComponentName:e.ComponentName,PaymentRequest:e.PaymentRequest}," "))}return o})()));