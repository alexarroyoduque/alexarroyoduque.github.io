function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){keys.push.apply(keys,Object.getOwnPropertySymbols(object))}if(enumerableOnly)keys=keys.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});return keys}function _objectSpread(target){for(var i=1,source;i<arguments.length;i++){source=null!=arguments[i]?arguments[i]:{};if(i%2){ownKeys(source,!0).forEach(function(key){babelHelpers.defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new o(n,t,s)},S=(s,n)=>{e?s.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):n.forEach(e=>{const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)})},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;var cssTag={CSSResult:o,adoptStyles:S,css:i,getCompatibleStyle:c,supportsAdoptingStyleSheets:e,unsafeCSS:r};/**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const e$1=(e,t,o)=>{Object.defineProperty(t,o,e)},t$1=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),o$1=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:_objectSpread({},o,{key:n});return null!=e&&(i.finisher=function(t){e(t,n)}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n)}};var base={decorateProperty:o$1,legacyPrototypeMethod:e$1,standardPrototypeMethod:t$1};/**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const e$2=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return{kind:t,elements:s,finisher(n){customElements.define(e,n)}}})(e,n);var customElement={customElement:e$2};function e$3(e){return o$1({finisher:(r,t)=>{Object.assign(r.prototype[t],e)}})}var eventOptions={eventOptions:e$3};/**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?_objectSpread({},e,{finisher(n){n.createProperty(e.key,i)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,i)}},e$4=(i,e,n)=>{e.constructor.createProperty(n,i)};function n$1(n){return(t,o)=>void 0!==o?e$4(n,t,o):i$1(n,t)}var property={property:n$1};function e$5(e){return o$1({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}var queryAll={queryAll:e$5},n$2;const e$6=null!=(null===(n$2=window.HTMLSlotElement)||void 0===n$2?void 0:n$2.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter(o=>o.nodeType===Node.ELEMENT_NODE);function l(n){const{slot:l,selector:t}=null!=n?n:{};return o$1({descriptor:o=>({get(){var o;const r="slot"+(l?`[name=${l}]`:":not([name])"),i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(r),s=null!=i?e$6(i,n):[];return t?s.filter(o=>o.matches(t)):s},enumerable:!0,configurable:!0})})}var queryAssignedElements={queryAssignedElements:l};function o$2(o,n,r){let l$1,s=o;return"object"==typeof o?(s=o.slot,l$1=o):l$1={flatten:n},r?l({slot:s,flatten:n,selector:r}):o$1({descriptor:e=>({get(){var e,t;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==n?void 0:n.assignedNodes(l$1))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}var queryAssignedNodes={queryAssignedNodes:o$2};function e$7(e){return o$1({descriptor:r=>({get(){var _this=this;return babelHelpers.asyncToGenerator(function*(){var r;return yield _this.updateComplete,null===(r=_this.renderRoot)||void 0===r?void 0:r.querySelector(e)})()},enumerable:!0,configurable:!0})})}var queryAsync={queryAsync:e$7};function i$2(i,n){return o$1({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]}}return t}})}var query={query:i$2};function t$2(t){return n$1(_objectSpread({},t,{state:!0}))}var state={state:t$2},s$1;const e$8=window,r$1=e$8.trustedTypes,h=r$1?r$1.emptyScript:"",o$3=e$8.reactiveElementPolyfillSupport,n$3={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:+t;break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l$1={attribute:!0,type:String,converter:n$3,reflect:!1,hasChanged:a},d="finalized";class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))}),t}static createProperty(t,i=l$1){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$1}static finalize(){if(this.hasOwnProperty(d))return!1;this[d]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i))}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l$1){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$3).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$3;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}_$Ej(){var _this2=this;return babelHelpers.asyncToGenerator(function*(){_this2.isUpdatePending=!0;try{yield _this2._$E_}catch(t){Promise.reject(t)}const t=_this2.scheduleUpdate();return null!=t&&(yield t),!_this2.isUpdatePending})()}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,i)=>this[i]=t),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)}),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach(t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}u[d]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==o$3||o$3({ReactiveElement:u}),(null!==(s$1=e$8.reactiveElementVersions)&&void 0!==s$1?s$1:e$8.reactiveElementVersions=[]).push("1.6.3");var reactiveElement={ReactiveElement:u,defaultConverter:n$3,notEqual:a,CSSResult:o,adoptStyles:S,css:i,getCompatibleStyle:c,supportsAdoptingStyleSheets:e,unsafeCSS:r},t$3;/**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const i$3=window,s$2=i$3.trustedTypes,e$9=s$2?s$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$4="$lit$",n$4=`lit$${(Math.random()+"").slice(9)}$`,l$2="?"+n$4,h$1=`<${l$2}>`,r$2=document,u$1=()=>r$2.createComment(""),d$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$1=Array.isArray,v=t=>c$1(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$1="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=/>|[ 	\n\f\r](?:([^\s"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r"'`<>=]|("|')|))|$)/g,g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r$2.createTreeWalker(r$2,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$9?e$9.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:"\""===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h$1:0<=v?(e.push(d),s.slice(0,v)+o$4+s.slice(v)+n$4+w):s+n$4+(-2===v?(e.push(void 0),i):w)}return[P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$4)||i.startsWith(n$4)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$4).split(n$4),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k})}else v.push({type:6,index:r})}for(const i of t)h.removeAttribute(i)}if(y.test(h.tagName)){const t=h.textContent.split(n$4),i=t.length-1;if(0<i){h.textContent=s$2?s$2.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$1()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$1())}}}else if(8===h.nodeType)if(h.data===l$2)v.push({type:2,index:r});else{let t=-1;for(;-1!==(t=h.data.indexOf(n$4,t+1));)v.push({type:7,index:r}),t+=n$4.length-1}r++}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function S$1(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$1(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S$1(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$2).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h]}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++)}return C.currentNode=r$2,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$1(this,t,i),d$1(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&d$1(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$2.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else{const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$1()),this.k(u$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,2<s.length||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S$1(this,t,i,0),n=!d$1(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S$1(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d$1(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const I=s$2?s$2.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=S$1(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S$1(this,t)}}const j={O:o$4,P:n$4,A:l$2,C:1,M:V,L:M,R:v,D:S$1,I:R,V:k,H:L,N:z,U:H,F:Z},B=i$3.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$3=i$3.litHtmlVersions)&&void 0!==t$3?t$3:i$3.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u$1(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l};var litHtml={_$LH:j,html:x,noChange:T,nothing:A,render:D,svg:b},l$3,o$5;/**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const r$3=u;class s$3 extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}s$3.finalized=!0,s$3._$litElement$=!0,null===(l$3=globalThis.litElementHydrateSupport)||void 0===l$3||l$3.call(globalThis,{LitElement:s$3});const n$5=globalThis.litElementPolyfillSupport;null==n$5||n$5({LitElement:s$3});const h$2={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(o$5=globalThis.litElementVersions)&&void 0!==o$5?o$5:globalThis.litElementVersions=[]).push("3.3.3");var litElement={LitElement:s$3,UpdatingElement:r$3,_$LE:h$2,CSSResult:o,adoptStyles:S,css:i,getCompatibleStyle:c,supportsAdoptingStyleSheets:e,unsafeCSS:r,ReactiveElement:u,defaultConverter:n$3,notEqual:a,_$LH:j,html:x,noChange:T,nothing:A,render:D,svg:b};/**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var index={CSSResult:o,adoptStyles:S,css:i,getCompatibleStyle:c,supportsAdoptingStyleSheets:e,unsafeCSS:r,ReactiveElement:u,defaultConverter:n$3,notEqual:a,_$LH:j,html:x,noChange:T,nothing:A,render:D,svg:b,LitElement:s$3,UpdatingElement:r$3,_$LE:h$2,decorateProperty:o$1,legacyPrototypeMethod:e$1,standardPrototypeMethod:t$1,customElement:e$2,property:n$1,state:t$2,eventOptions:e$3,query:i$2,queryAll:e$5,queryAsync:e$7,queryAssignedElements:l,queryAssignedNodes:o$2};/**
    * @license
    * Copyright 2017 Google LLC
    * SPDX-License-Identifier: BSD-3-Clause
    */const t$4={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$a=t=>(...e)=>({_$litDirective$:t,values:e});class i$4{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}var directive={Directive:i$4,PartType:t$4,directive:e$a};class e$b extends i$4{constructor(i){if(super(i),this.et=A,i.type!==t$4.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===A||null==r)return this.ft=void 0,this.et=r;if(r===T)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.ft;this.et=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e$b.directiveName="unsafeHTML",e$b.resultType=1;const o$6=e$a(e$b);var unsafeHtml={UnsafeHTMLDirective:e$b,unsafeHTML:o$6},unsafeHtml$1={UnsafeHTMLDirective:e$b,unsafeHTML:o$6};const projects=[{title:"MicroMachines Military parche al espa\xF1ol",img:"src/images/personal/micromachines.jpg",subtitle:"2024",description:"Traducci\xF3n para MicroMachines Military de Megadrive.",modalTemplate:"src/modals/personal/micromachines.html"},{title:"Dart master",img:"src/images/personal/dart-master.jpg",subtitle:"2022",description:"Juego de dardos para GameBoy y navegador.",modalTemplate:"src/modals/personal/dart-master.html"},{title:"Orlog",img:"src/images/personal/orlog.jpg",subtitle:"2021",description:"Adaptaci\xF3n web del juego de dados Orlog de Assassins\xB4s Creed Valhalla.",modalTemplate:"src/modals/personal/orlog.html"},{title:"Peteypedia",img:"src/images/personal/peteypedia.jpg",subtitle:"2020",description:"R\xE9plica en espa\xF1ol de la Peteypedia de Watchmen de la serie de HBO.",modalTemplate:"src/modals/personal/peteypedia.html"},{title:"amiibum",img:"src/images/personal/amiibum.jpg",subtitle:"2019",description:"Marca tus amiibos de Nintendo en esta app hecha con lit-html.",modalTemplate:"src/modals/personal/amiibum.html"},{title:"Galaxia oculta",img:"src/images/personal/galaxia-oculta.jpg",subtitle:"2016 - Actualmente",description:"Canal de podcast. Programa principal sobre videojuegos #pixelOculto y #cantinaOculta para otros contenidos.",modalTemplate:"src/modals/personal/galaxia-oculta.html"},{title:"Colaborador VGA",img:"src/images/personal/vga.jpg",subtitle:"2014 - Actualmente",description:"He participado impartiendo charlas sobre videojuegos en el meetup VGA.",modalTemplate:"src/modals/personal/vga.html"},{title:"Project Black",img:"src/images/personal/project-black.png",subtitle:"2017",description:"Desarrollado junto a Samuel Dorado Rodr\xEDguez dentro de la iniciativa \"Hacking the game\" de s|ngular.",modalTemplate:"src/modals/personal/project-black.html"},{title:"Where is it?",img:"src/images/personal/where-is-it.jpg",subtitle:"2016",description:"Un juego muy sencillo que ocupa menos de 1 kb.",modalTemplate:"src/modals/personal/where-is-it.html"},{title:"Master Wars",img:"src/images/personal/master-wars.jpg",subtitle:"2016",description:"Experimento con React y la Api de Marvel.",modalTemplate:"src/modals/personal/master-wars.html"},{title:"Shootem Totem",img:"src/images/personal/shootem-totem.jpg",subtitle:"2016",description:"Shoot\xB4em up fren\xE9tico. Se puede usar el m\xF3vil para manejar la nave mandando ordenes por websockets.",modalTemplate:"src/modals/personal/shootem-totem.html"},{title:"Master Gun",img:"src/images/personal/master-gun.jpg",subtitle:"2015",description:"Shooter al estilo western hecho con Polymer.",modalTemplate:"src/modals/personal/master-gun.html"},{title:"Gau el experto",img:"src/images/personal/gau.jpg",subtitle:"2015",description:"Aventura interactiva donde el protagonista es un experto en tecnolog\xEDa.",modalTemplate:"src/modals/personal/gau.html"},{title:"Egypt Adventure",img:"src/images/personal/egypt-adventure.jpg",subtitle:"2014 - 2015",description:"Juego de plataformas con toques RPG. Desarrollado en HTML5 con PhaserJS. Disponible para PC y OSX.",modalTemplate:"src/modals/personal/egypt-adventure.html"},{title:"Arcade Pi",img:"src/images/personal/raspberry-pi.jpg",subtitle:"2014",description:"Usando el sistema operativo PiMame mont\xE9 una consola arcade para emular sistemas cl\xE1sicos.",modalTemplate:"src/modals/personal/arcade-pi.html"},{title:"Click Master",img:"src/images/personal/click-master.jpg",subtitle:"2013",description:"Cu\xE1nto tardas en hacer 211 clicks sin pasarte? Mini juego hecho con AngularJS.",modalTemplate:"src/modals/personal/click-master.html"}],secrets=[{title:"Trainvial",img:"src/images/personal/trainvial.jpg",subtitle:"2012",description:"Mi primer experimento con AngularJS. Demo de un trivial compatible con las plataformas m\xF3viles y escritorio.",modalTemplate:"src/modals/personal/trainvial.html"},{title:"Battleship - Hundir la flota",img:"src/images/personal/battleship.jpg",subtitle:"2016",description:"Experimento con Angular 2.",modalTemplate:"src/modals/personal/battleship.html"},{title:"Invitado a Radio GameOn",img:"src/images/personal/game-on.png",subtitle:"13/07/2016",description:"Mi primera colaboraci\xF3n en radio.",modalTemplate:"src/modals/personal/game-on.html"},{title:"Cromos de Egypt Adventure",img:"src/images/personal/egypt-adventure-cards.jpg",subtitle:"2015",description:"Explora detalles de Egypt Adventure con los cromos promocionales realizados para la campa\xF1a de marketing.",modalTemplate:"src/modals/personal/egypt-adventure-cards.html"},{title:"Portafolio",img:"src/images/personal/portfolio.jpg",subtitle:"2015",description:"Descubre las tecnolog\xEDas y motivaciones que han llevado a cabo este proyecto.",modalTemplate:"src/modals/personal/portfolio.html"}];var personal={projects:projects,secrets:secrets};const companies=[{title:"SNGULAR",img:"src/images/companies/sngular.jpg",subtitle:"Mayo 2016 - Actualidad",description:"Principalmente dedicado al desarrollo de proyectos con web componentes en BBVA."},{title:"GFT/Adesis Netlife",img:"src/images/companies/gft.jpg",subtitle:"Septiembre 2012 - Enero 2016",description:"En Adesis, inicialmente apoy\xE9 al equipo de Front-end en el desarrollo, planificaci\xF3n y resoluci\xF3n de incidencias. Trabaj\xE9 con tecnolog\xEDas avanzadas como JADE, AngularJS y NodeJS, y particip\xE9 en el dise\xF1o de la arquitectura front-end para aplicaciones de Mapfre y Bankia. Mi principal responsabilidad fue desarrollar componentes web con directivas de AngularJS, creando un cat\xE1logo para los desarrolladores. Posteriormente, GFT adquiri\xF3 Adesis y pas\xE9 a formar parte de su equipo."}],projects$1=[{title:"BBVA - Cells Apps",subtitle:"s|ngular, 2016 - actualidad",img:"src/images/professional/bbva-cells.jpg",description:"Cells es la propuesta de BBVA para el desarrollo front basada en webcomponents.",modalTemplate:"src/modals/professional/bbva-cells-apps.html"},{title:"Bankia - Arq. front",subtitle:"Adesis Netlife/GFT 2013 - 2016",img:"src/images/professional/bankia.jpg",description:"Sentar las bases de una arquitectura web moderna que permita crear aplicaciones agilmente",modalTemplate:"src/modals/professional/bankia.html"},{title:"Mapfre GAIA",subtitle:"Adesis Netlife, 2013",img:"src/images/professional/mapfre.jpg",description:"El framework GAIA agilizar\xE1 el desarrollo web arrastrando componentes",modalTemplate:"src/modals/professional/gaia.html"},{title:"Seguros Bancomer",subtitle:"Adesis Netlife, 2012",img:"src/images/professional/bancomer.jpg",description:"Renovaci\xF3n de la presencia digital de Seguros Bancomer (BBVA)",modalTemplate:"src/modals/professional/bancomer-seguros.html"},{title:"Plantillas XSLT-FO",subtitle:"Adesis Netlife, 2012",img:"src/images/professional/bancomer.jpg",description:"Generaci\xF3n de plantillas XSLT-FO que alimentadas de archivos XML permitiesen la generaci\xF3n de documentos PDF din\xE1micos.",modalTemplate:"src/modals/professional/xslt.html"}];var professional={companies:companies,projects:projects$1};const skills=[{title:"HTML5",img:"src/images/skills/html5.jpg"},{title:"CSS3",img:"src/images/skills/css3.jpg"},{title:"JavaScript",img:"src/images/skills/javascript.png"},{title:"Lit",img:"src/images/skills/lit.jpg",description:"Librer\xEDa para el desarrollo de web components"},{title:"Polymer",img:"src/images/skills/polymer.jpg",description:"Framework de desarrollo para crear web components"},{title:"AngularJS",img:"src/images/skills/angular.jpg",description:"HTML mejorado para aplicaciones web alucinantes"},{title:"PhaserJS",img:"src/images/skills/phaser.jpg",description:"Framework r\xE1pido y divertido para hacer juegos HTML5 para escritorio y m\xF3viles"},{title:"Git",img:"src/images/skills/git.jpg",description:"Software de control de versiones"},{title:"NodeJS",img:"src/images/skills/node.jpg",description:"Entorno de programaci\xF3n en la capa de servidor basado en ECMAScript"},{title:"GruntJS",img:"src/images/skills/grunt.jpg",description:"Librer\xEDa JavaScript para realizar tareas autom\xE1ticas"},{title:"Gulp",img:"src/images/skills/gulp.jpg",description:"Librer\xEDa JavaScript para realizar tareas autom\xE1ticas basada en streams"},{title:"Bower",img:"src/images/skills/bower.png",description:"Manejador para instalar dependencias"},{title:"Yeoman",img:"src/images/skills/yeoman.png",description:"Generador de esqueletos de aplicaci\xF3n"},{title:"Sass",img:"src/images/skills/sass.jpg",description:"Vitamina tus hojas de estilo extendiendo sus caracter\xEDsticas"},{title:"Jade",img:"src/images/skills/jade.jpg",description:"Genera plantillas HTML con una sintaxis m\xE1s sencilla y mucho m\xE1s"},{title:"jQuery",img:"src/images/skills/jquery.gif",description:"Escribe menos c\xF3digo para manejar el DOM, eventos, etc, ..."},{title:"Bootstrap",img:"src/images/skills/bootstrap.jpg",description:"Framework de HTML, CSS y JS para crear p\xE1ginas web"},{title:"Lodash",img:"src/images/skills/lodash.png",description:"Librer\xEDa javascript con gran cantidad de m\xE9todos para manejar objetos y arrays"},{title:"Raphael",img:"src/images/skills/raphael.png",description:"Librer\xEDa para dibujar gr\xE1ficos vectoriales en la web de forma sencilla"},{title:"D3",img:"src/images/skills/d3.png",description:"Crea gr\xE1ficos alucinantes con esta librer\xEDa"}],education=[{img:"src/images/education/psm1.png",title:"Profesional Scrum Master I",description:"scrum.org",subtitle:"2018"},{img:"src/images/education/gamificacion-intro-docentes.png",title:"Introducci\xF3n a la gamificaci\xF3n para docentes",href:"https://goo.gl/rDzPXK",description:"Telef\xF3nica scolarTIC",subtitle:"2016"},{img:"src/images/education/carlosIII.gif",title:"Grado en ingenier\xEDa inform\xE1tica",description:"CarlosIII",subtitle:"2013"},{img:"src/images/education/mongo.png",title:"M101JS: MongoDB for Node.js Developers",href:"https://s3.amazonaws.com/edu-cert.10gen.com/downloads/03820222566b45cabdc47bbb8d23b3fb/Certificate.pdf",description:"MongoDB",subtitle:"2013"}];var profile={education:education,skills:skills};class PoCardImg extends s$3{static get properties(){return{img:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},modalTemplate:{type:String},_isModalOpen:{type:Boolean},_modalContent:{type:String}}}constructor(){super();this._isModalOpen=!1;this._modalContent=""}static get styles(){return i`
      :host {
        display: block;
        font-family: Arial, sans-serif;
        max-width: 280px; /* Fixed width */
        margin: 0 auto; /* Center the card horizontally */
      }
  
      .card {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        width: 100%; /* Take full width of the parent container */
        height: 400px; /* Fixed height */
        position: relative;
      }
  
      .card img {
        width: 100%;
        height: 45%;
        object-fit: cover;
      }
  
      .card-content {
        padding: 0 .7rem .7rem .7rem;
        height: 55%;
        box-sizing: border-box;
      }
  
      .card-title {
        font-size: 1.5em;
        color: #333;
      }
  
      .card-subtitle {
        font-size: .95rem;
        color: #555;
        margin-bottom: 10px;
      }
  
      .card-description {
        font-size: 1em;
        color: #777;
        margin-bottom: 15px;
      }
  
      .card-button,
      .modal-close {
        display: inline-block;
        padding: 10px 20px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        font-family: var(--theme-mono-font-family);
        background-color: #fff;
        color: black;
        border: 1px solid black;
        text-transform: uppercase;
      }
  
      .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 1000;
        overflow-y: auto;
      }
  
      .modal.open {
        display: flex;
      }
  
      .modal-content {
        background-color: #fff;
        padding: 0;
        border-radius: 10px;
        max-width: 500px;
        width: 90%;
        box-sizing: border-box;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
        position: relative;
      }
  
      .modal-title {
        font-size: 1.8em;
        margin: 20px;
        color: #333;
        position: sticky;
        top: 0;
        background-color: #fff;
        z-index: 10;
      }
  
      .modal-description {
        padding-bottom: .5rem;
        font-size: 1em;
        color: #555;
        margin: 0 20px;
        overflow-y: auto;
        flex: 1;
        box-shadow: inset 0px 6px 6px -6px rgba(0, 0, 0, 0.2),
                    inset 0px -6px 6px -6px rgba(0, 0, 0, 0.2);
      }
  
      .modal-close {
        border-color: #dc3545;
        color: #dc3545;
        transform: none;
        cursor: pointer;
        position: sticky;
        bottom: 0;
        margin-top: 20px;
        margin-bottom: 20px;
        z-index: 10;
        margin-left: 20px;
        margin-right: 20px;
      }
  
      @media (max-width: 600px) {
        .modal-content {
          max-width: 90%;
          width: 90%;
          max-height: 90%;
        }
      }
    `}_openModal(){var _this3=this;return babelHelpers.asyncToGenerator(function*(){if(_this3.modalTemplate){try{const response=yield fetch(_this3.modalTemplate);if(response.ok){_this3._modalContent=yield response.text();_this3._isModalOpen=!0}else{console.error("Failed to load template:",response.status)}}catch(error){console.error("Error loading template:",error)}}})()}_closeModal(){this._isModalOpen=!1}render(){return x`
      <div class="card">
        <img src="${this.img}" alt="${this.title}" />
        <div class="card-content">
          <div class="card-title">${this.title}</div>
          <div class="card-subtitle">${this.subtitle}</div>
          <div class="card-description">${this.description}</div>
          <a @click="${this._openModal}" class="card-button">SABER MÁS</a>
        </div>
      </div>

      <div class="modal ${this._isModalOpen?"open":""}">
        <div class="modal-content">
          <div class="modal-title">${this.title}</div>
          <div class="modal-description">${o$6(this._modalContent)}</div>
          <a @click="${this._closeModal}" class="modal-close">cerrar</a>
        </div>
      </div>
    `}}customElements.define("po-card-img",PoCardImg);var poCardImg={PoCardImg:PoCardImg};class PoCardJumbo extends s$3{static get properties(){return{title:{type:String},description:{type:String},img:{type:String},socialLinks:{type:Array},buttonText:{type:String},navigation:{type:String}}}constructor(){super();this.title="Bienvenido";this.description="Explora mi portafolio para descubrir mis proyectos y habilidades.";this.socialLinks=[];this.buttonText="Descubre m\xE1s";this.navigation="#"}static get styles(){return i`
      :host {
        display: block;
        margin: 0 auto;
        padding: 40px;
        max-width: 800px;
        border-radius: 15px;
        background-color: #fff;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        text-align: center;
      }

      .card {
        display: grid;
        grid-template-areas: 
          "image"
          "title"
          "description"
          "slot";
        gap: 20px;
      }

      .profile-pic {
        grid-area: image;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin: 0 auto;
      }

      .title {
        grid-area: title;
        font-size: 2em;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
      }

      .description {
        grid-area: description;
        font-size: 1.2em;
        color: #555;
        line-height: 1.6;
      }

      .slot-content {
        grid-area: slot;
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap; /* Permite que los elementos se envuelvan a la siguiente línea */
      }

      .social-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: #333;
        color: #fff;
        border-radius: 50%;
        font-size: 1.5em;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
        text-decoration: none;
      }

      .social-button:hover {
        background-color: #007bff;
        color: #fff;
      }

      button {
        display: inline-block;
        padding: 10px 20px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        font-family: var(--theme-mono-font-family);
        background-color: #fff;
        color: black;
        border: 1px solid black;
        text-transform: uppercase;
        margin-top: 20px; /* Añadido para separar el botón de la tarjeta */
      }

      @media (max-width: 600px) {
        :host {
          padding: 20px;
        }

        .card {
          gap: 15px;
        }

        .title {
          font-size: 1.5em;
        }

        .description {
          font-size: 1em;
        }

        .slot-content {
          gap: 10px;
        }

        .social-button {
          width: 35px;
          height: 35px;
          font-size: 1.2em;
        }

        button {
          padding: 8px 16px;
          font-size: 0.9em;
        }
      }
    `}_handleButtonClick(){const navigateEvent=new CustomEvent("navigate",{detail:{page:this.navigation},bubbles:!0,composed:!0});this.dispatchEvent(navigateEvent)}render(){return x`
      <div class="card">
        <img class="profile-pic" src="${this.img}" alt="${this.title}" />
        <div class="title">${this.title}</div>
        <div class="description">${this.description}</div>
        <div class="slot-content">
          ${this.socialLinks.map(link=>x`
              <a href="${link.href}" class="social-button" target="_blank" rel="noopener noreferrer" title="${link.href}">
                <i class="fab icon-${link.icon}"></i>
              </a>
            `)}
        </div>
      </div>
      <button @click="${this._handleButtonClick}">${this.buttonText}</button>
    `}}customElements.define("po-card-jumbo",PoCardJumbo);var poCardJumbo={PoCardJumbo:PoCardJumbo};class PoContainerItems extends s$3{static get properties(){return{title:{type:String},items:{type:Array},mode:{type:String// Propiedad para determinar el modo (mini o completo)
}}}constructor(){super();this.mode="full";// Establece el modo predeterminado como 'full'
}static get styles(){return i`
      :host {
        display: block;
        font-family: Arial, sans-serif;
      }

      .container {
        margin: 0 auto;
        padding: 1rem;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .title {
        font-size: 2em;
        margin-bottom: 20px;
        text-align: center;
        color: #333;
      }

      .items-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: .5rem;
      }

      .item-header {
        display: flex;
        align-items: flex-start;
      }

      .item-header img {
        width: 100px; /* Ancho fijo para la imagen */
        height: 100px; /* Alto fijo para la imagen */
        border-radius: 50%; /* Imagen redondeada */
        margin-right: 20px;
      }

      .item-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
      }

      .item-title {
        font-size: 1.5em;
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
      }

      .item-subtitle {
        font-size: 1.2em;
        color: #777;
        margin-bottom: 5px;
      }

      .item-description {
        font-size: 1em;
        color: #555;
        text-align: left;
      }

      /* Estilos para el modo 'mini' */
      :host([mode='mini']) .container {
        max-width: 100%;
        padding: 10px;
      }

      :host([mode='mini']) .items-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Por defecto, 3 columnas */
        gap: 15px;
      }

      :host([mode='mini']) .item {
        flex-direction: column;
        padding: 0; /* Sin padding */
      }

      :host([mode='mini']) .item-header {
        background: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
      }

      :host([mode='mini']) .item img {
        width: 50px;
        height: 50px;
        margin-right: 15px;
        border-radius: 50%; /* Mantén la imagen redondeada */
      }

      :host([mode='mini']) .item-title {
        font-size: 1.2em;
        margin-bottom: 5px;
      }

      :host([mode='mini']) .item-subtitle {
        font-size: 1em;
        margin-bottom: 5px;
      }

      :host([mode='mini']) .item-description {
        font-size: 0.9em;
      }

      /* Responsividad para 2 y 1 columna(s) */
      @media (max-width: 900px) {
        :host([mode='mini']) .items-list {
          grid-template-columns: repeat(2, 1fr); /* 2 columnas */
        }
      }

      @media (max-width: 600px) {
        :host([mode='mini']) .items-list {
          grid-template-columns: 1fr; /* 1 columna */
        }
      }
    `}render(){return x`
      <div class="container">
        <div class="title">${this.title}</div>
        <div class="items-list">
          ${this.items.map(item=>x`
              <div class="item">
                <div class="item-header">
                  <img src="${item.img}" alt="${item.title}" />
                  <div class="item-content">
                    <div class="item-title">${item.title}</div>
                    <div class="item-subtitle" ?hidden=${!item.subtitle}>${item.subtitle}</div>
                    <div class="item-description">${item.description}</div>
                  </div>
                </div>
              </div>
            `)}
        </div>
      </div>
    `}}customElements.define("po-container-items",PoContainerItems);var poContainerItems={PoContainerItems:PoContainerItems};class PoTemplate extends s$3{static get properties(){return{}}constructor(){super()}static get styles(){return i`
    :host {
      display: block;
      margin: 0;
      font-family: Arial, sans-serif;
      color: #333;
      box-sizing: border-box;
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 10px 0;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1000;
    }

    button {
      display: inline-block;
      padding: 10px 20px;
      text-align: center;
      cursor: pointer;
      text-decoration: none;
      font-family: var(--theme-mono-font-family);
      background-color: #fff;
      color: black;
      /* border: 1px solid black; */
      border: 0;
      text-transform: uppercase;
    }


    .main {
      margin-top: 60px; /* To prevent content from being hidden under the header */
      padding: 20px;
    }
    @media (max-width: 520px) {
        button {
          padding: 5px;
        }
      }
  `}_handleClick(pageName){this.dispatchEvent(new CustomEvent("navigate",{detail:{page:pageName},bubbles:!0,composed:!0}))}render(){return x`
      <header class="header">
        <button @click=${()=>this._handleClick("home")}>Inicio</button>
        <button @click=${()=>this._handleClick("profile")}>Perfil</button>
        <button @click=${()=>this._handleClick("professional")}>Experiencia</button>
        <button @click=${()=>this._handleClick("personal")}>Proyectos Personales</button>
      </header>
      <main class="main">
        <slot></slot>
      </main>
    `}}customElements.define("po-template",PoTemplate);var poTemplate={PoTemplate:PoTemplate};class PoPageHome extends s$3{static get properties(){return{}}constructor(){super()}firstUpdated(){let card=this.shadowRoot.querySelector("po-card-jumbo");const link=document.createElement("link");link.rel="stylesheet";link.href="src/fonts/fontello.css";card.shadowRoot.appendChild(link)}static get styles(){return i`
      :host {
        display: block;
      }

      po-card-jumbo,
      po-container-items {
        font-family: var(--theme-primary-font-family);
      }

    `}render(){return x`

      <section>
        <po-card-jumbo
          img="src/images/alex.jpg"
          title="Welcome"
          navigation="profile"
          description="Descubre mis proyectos y la pasión que pongo en cada uno de ellos. ¡Explora y encuentra inspiración en mi portafolio!"
          .socialLinks="${[{icon:"x-twitter",user:"AlexArroyoDuque",href:"https://twitter.com/alexarroyoduque"},{icon:"github",user:"AlexArroyoDuque",href:"https://github.com/alexarroyoduque"},{icon:"linkedin",user:"AlexArroyoDuque",href:"https://linkedin.com/in/alexarroyoduque"},{icon:"mail",user:"AlexArroyoDuque",href:"mailto:alexarroyoduque@gmail.com"},{icon:"cv",user:"AlexArroyoDuque",href:"https://docs.google.com/document/d/13RB4YZKHHN0AC8j_bDa7oLzwMvFWHs6U7m7y7GptPOU/edit#heading=h.sq3vcim9i8z8"}]}">
        ></po-card-jumbo>

      </section>
    `}}customElements.define("po-page-home",PoPageHome);var poPageHome={PoPageHome:PoPageHome};class PoPageProfile extends s$3{static get properties(){return{}}constructor(){super()}static get styles(){return i`
      :host {
        display: block;
      }

      po-container-items {
        margin-bottom: 1rem;
      } 

      po-container-items {
        font-family: var(--theme-primary-font-family);
      }
    `}render(){return x`
      <section>
        <po-container-items .items=${[{title:"Alejandro Arroyo Duque",img:"src/images/alex.jpg",subtitle:"Front-end developer",description:"Apasionado en explotar el potencial de la web. En mi tiempo libre creo proyectos experimentales de videojuegos y lanc\xE9 el podcast #PixelOculto para hablar de ellos. Adem\xE1s continuamente busco aprender sobre otras \xE1reas como UX, agilismo, etc."}]}></po-container-items>

        <po-container-items title="Formación" mode="mini" .items=${education}></po-container-items>
        <po-container-items title="Habilidades" mode="mini" .items=${skills}></po-container-items>
      </section>
    `}}customElements.define("po-page-profile",PoPageProfile);var poPageProfile={PoPageProfile:PoPageProfile};class PoPageProfessional extends s$3{static get properties(){return{}}constructor(){super()}static get styles(){return i`
      :host {
        display: block;
      }

      po-container-items,
      po-card-img {
        font-family: var(--theme-primary-font-family);
      }

      .projects {
        display: flex;
        flex-wrap: wrap; /* Allows cards to wrap to the next line */
        justify-content: center; /* Centers the cards horizontally */
        gap: .8rem .2rem; /* Adds space between the cards */
        padding: 1rem 0 1rem 0; /* Adds padding around the cards */
      }

      /* Optionally, add responsiveness */
      @media (max-width: 600px) {
        .projects {
          gap: 10px; /* Adjust gap for smaller screens */
        }
      }
    `}render(){return x`
      <section>
        <po-container-items .items=${companies}></po-container-items>

        <section class="projects">
          ${projects$1.map(project=>x`
            <po-card-img
              title="${project.title}"
              subtitle="${project.subtitle}"
              img="${project.img}"
              description="${project.description}"
              modalTemplate="${project.modalTemplate}">
            </po-card-img>
          `)}
        </section>
      </section>
    `}}customElements.define("po-page-professional",PoPageProfessional);var poPageProfessional={PoPageProfessional:PoPageProfessional};class PoPagePersonal extends s$3{static get properties(){return{}}constructor(){super();window.addEventListener("global-secrets-active-changed",event=>{this.requestUpdate()})}static get styles(){return i`
      :host {
        display: block;
      }

      po-card-img {
        font-family: var(--theme-primary-font-family);
      }

      .projects {
        display: flex;
        flex-wrap: wrap; /* Allows cards to wrap to the next line */
        justify-content: center; /* Centers the cards horizontally */
        gap: .8rem .2rem; /* Adds space between the cards */
        margin-bottom: .8rem;
      }

      [hidden] {
        display: none;
      }

    `}render(){return x`
      <section>

        <section class="projects">
          ${projects.map(project=>x`
            <po-card-img
              title="${project.title}"
              subtitle="${project.subtitle}"
              img="${project.img}"
              description="${project.description}"
              modalTemplate="${project.modalTemplate}">
            </po-card-img>
          `)}
        </section>

        <section class="projects" ?hidden=${!window.GLOBAL_SECRETS_ACTIVE}>
          ${secrets.map(project=>x`
            <po-card-img
              title="${project.title}"
              subtitle="${project.subtitle}"
              img="${project.img}"
              description="${project.description}"
              modalTemplate="${project.modalTemplate}">
            </po-card-img>
          `)}
        </section>

      </section>
    `}}customElements.define("po-page-personal",PoPagePersonal);var poPagePersonal={PoPagePersonal:PoPagePersonal};class PoMain extends s$3{static get properties(){return{currentPage:{type:String}}}constructor(){super();this.currentPage="home";const devMessage="\n"+"Un nuevo desaf\xEDo ante ti...\n"+"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"+"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"+"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"+"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"+"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"+"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n"+"\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\n"+"\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\n"+"\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\n"+"\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\n"+"\n"+"Haz foco en cualquier parte del portafolio\n"+"e introduce el c\xF3digo Konami: \n"+"\"\u25B2, \u25B2, \u25BC, \u25BC, \u25C0, \u25B6, \u25C0, \u25B6, B, A\".\n"+"Si usas un dispositivo t\xE1ctil prueba con: \n"+"\"\u25B2, \u25B2, \u25BC, \u25BC, \u25C0, \u25B6, \u25C0, \u25B6, tap, tap\".\n";console.log(devMessage)}static get styles(){return i`
      :host {
        display: block;
        --theme-primary-font-family:  'Nunito', sans-serif;
        /* --theme-secondary-font-family: 'Titillium Web', sans-serif; */
        --theme-mono-font-family: 'Noto Sans Mono', monospac;

        --theme-color-green: #00ff4c;
        --theme-color-blue: #5be7ff;
        --theme-color-yellow: #faff00;
        --theme-color-gray-light: #eee;
        --theme-color-gray: #808080;

        --theme-color-primary: var(--theme-color-green);
        --theme-color-secondary: var(--theme-color-light);

        margin: 0px auto;

        /* background-color: red; */
      }
    `}_navigate(page){this.currentPage=page}render(){return x`
      <section>
        <po-template @navigate="${e=>this._navigate(e.detail.page)}">
          ${"home"===this.currentPage?x`<po-page-home></po-page-home>`:""}
          ${"professional"===this.currentPage?x`<po-page-professional></po-page-professional>`:""}
          ${"personal"===this.currentPage?x`<po-page-personal></po-page-personal>`:""}
          ${"profile"===this.currentPage?x`<po-page-profile></po-page-profile>`:""}
        </po-template>
      </section>

    `}}customElements.define("po-main",PoMain);var poMain={PoMain:PoMain};export{base as $base,cssTag as $cssTag,customElement as $customElement,directive as $directive,eventOptions as $eventOptions,index as $index,litElement as $litElement,litHtml as $litHtml,personal as $personal,poCardImg as $poCardImg,poCardJumbo as $poCardJumbo,poContainerItems as $poContainerItems,poMain as $poMain,poPageHome as $poPageHome,poPagePersonal as $poPagePersonal,poPageProfessional as $poPageProfessional,poPageProfile as $poPageProfile,poTemplate as $poTemplate,professional as $professional,profile as $profile,property as $property,query as $query,queryAll as $queryAll,queryAssignedElements as $queryAssignedElements,queryAssignedNodes as $queryAssignedNodes,queryAsync as $queryAsync,reactiveElement as $reactiveElement,state as $state,unsafeHtml as $unsafeHtml,unsafeHtml$1 as $unsafeHtml$1,o as CSSResult,o as CSSResult$1,o as CSSResult$2,o as CSSResult$3,i$4 as Directive,s$3 as LitElement,s$3 as LitElement$1,t$4 as PartType,PoCardImg,PoCardJumbo,PoContainerItems,PoMain,PoPageHome,PoPagePersonal,PoPageProfessional,PoPageProfile,PoTemplate,u as ReactiveElement,u as ReactiveElement$1,u as ReactiveElement$2,e$b as UnsafeHTMLDirective,e$b as UnsafeHTMLDirective$1,r$3 as UpdatingElement,r$3 as UpdatingElement$1,h$2 as _$LE,h$2 as _$LE$1,j as _$LH,j as _$LH$1,j as _$LH$2,S as adoptStyles,S as adoptStyles$1,S as adoptStyles$2,S as adoptStyles$3,companies,i as css,i as css$1,i as css$2,i as css$3,e$2 as customElement,e$2 as customElement$1,o$1 as decorateProperty,o$1 as decorateProperty$1,n$3 as defaultConverter,n$3 as defaultConverter$1,n$3 as defaultConverter$2,e$a as directive,education,e$3 as eventOptions,e$3 as eventOptions$1,c as getCompatibleStyle,c as getCompatibleStyle$1,c as getCompatibleStyle$2,c as getCompatibleStyle$3,x as html,x as html$1,x as html$2,e$1 as legacyPrototypeMethod,e$1 as legacyPrototypeMethod$1,T as noChange,T as noChange$1,T as noChange$2,a as notEqual,a as notEqual$1,a as notEqual$2,A as nothing,A as nothing$1,A as nothing$2,projects,projects$1,n$1 as property,n$1 as property$1,i$2 as query,i$2 as query$1,e$5 as queryAll,e$5 as queryAll$1,l as queryAssignedElements,l as queryAssignedElements$1,o$2 as queryAssignedNodes,o$2 as queryAssignedNodes$1,e$7 as queryAsync,e$7 as queryAsync$1,D as render,D as render$1,D as render$2,secrets,skills,t$1 as standardPrototypeMethod,t$1 as standardPrototypeMethod$1,t$2 as state,t$2 as state$1,e as supportsAdoptingStyleSheets,e as supportsAdoptingStyleSheets$1,e as supportsAdoptingStyleSheets$2,e as supportsAdoptingStyleSheets$3,b as svg,b as svg$1,b as svg$2,r as unsafeCSS,r as unsafeCSS$1,r as unsafeCSS$2,r as unsafeCSS$3,o$6 as unsafeHTML,o$6 as unsafeHTML$1};