(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{988:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return T}));var r=n(1),o=n.n(r),u=n(82),c=n(21),i=n(24);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,e){return(y=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}function b(t){var e=d();return function n(){var r=v(t),o;if(e){var u=v(this).constructor;o=Reflect.construct(r,arguments,u)}else o=r.apply(this,arguments);return h(this,o)}}function h(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}var w=function(t){s(n,t);var e=b(n);function n(){var t;a(this,n);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(t=e.call.apply(e,[this].concat(o))).state={url:null},t.componentWillUnmount=function(){t.mounted=!1},t}return p(n,[{key:"componentDidMount",value:function t(){var e=this;i.a.get("/config").then((function(t){200===t.data.code?e.mounted&&e.setState({url:t.data.data.connection_url}):c.a.error(t.data.message)})).catch((function(t){console.error(t)}))}},{key:"componentWillMount",value:function t(){this.mounted=!0}},{key:"render",value:function t(){return o.a.createElement("iframe",{src:this.state.url,width:"100%",height:"90%",style:O.iframe})}}]),n}(r.Component),O={iframe:{border:"none",overflow:"hidden",minHeight:"600px"}};function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e,n){return e&&S(t.prototype,e),n&&S(t,n),t}function P(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}function R(t,e){return(R=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}function E(t){var e=D();return function n(){var r=C(t),o;if(e){var u=C(this).constructor;o=Reflect.construct(r,arguments,u)}else o=r.apply(this,arguments);return k(this,o)}}function k(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?x(t):e}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}var T=function(t){P(n,t);var e=E(n);function n(){return _(this,n),e.apply(this,arguments)}return j(n,[{key:"render",value:function t(){return o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(w,null))}}]),n}(r.Component)}}]);