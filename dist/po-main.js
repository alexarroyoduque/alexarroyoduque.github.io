(()=>{var O=globalThis,H=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),le=new WeakMap,w=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(H&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&le.set(t,e))}return e}toString(){return this.cssText}},de=o=>new w(typeof o=="string"?o:o+"",void 0,D),m=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((i,s,a)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[a+1],o[0]);return new w(t,o,D)},q=(o,e)=>{if(H)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=O.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},R=H?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return de(t)})(o):o;var{is:Le,defineProperty:Ue,getOwnPropertyDescriptor:Oe,getOwnPropertyNames:He,getOwnPropertySymbols:Re,getPrototypeOf:ze}=Object,z=globalThis,pe=z.trustedTypes,Ne=pe?pe.emptyScript:"",Be=z.reactiveElementPolyfillSupport,k=(o,e)=>o,I={toAttribute(o,e){switch(e){case Boolean:o=o?Ne:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},me=(o,e)=>!Le(o,e),ce={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:me};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Ue(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:a}=Oe(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return s?.call(this)},set(r){let g=s?.call(this);a.call(this,r),this.requestUpdate(e,g,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;let e=ze(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){let t=this.properties,i=[...He(t),...Re(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(R(s))}else e!==void 0&&t.push(R(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return q(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:I).toAttribute(t,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let a=i.getPropertyOptions(s),r=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:I;this._$Em=s,this[s]=r.fromAttribute(t,a.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??me)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,a]of i)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[k("elementProperties")]=new Map,b[k("finalized")]=new Map,Be?.({ReactiveElement:b}),(z.reactiveElementVersions??=[]).push("2.0.4");var K=globalThis,N=K.trustedTypes,he=N?N.createPolicy("lit-html",{createHTML:o=>o}):void 0,xe="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ve="?"+v,De=`<${ve}>`,_=document,j=()=>_.createComment(""),C=o=>o===null||typeof o!="object"&&typeof o!="function",Q=Array.isArray,qe=o=>Q(o)||typeof o?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,ge=/>/g,$=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,be=/"/g,$e=/^(?:script|style|textarea|title)$/i,Y=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),l=Y(1),Ke=Y(2),Qe=Y(3),y=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ye=new WeakMap,A=_.createTreeWalker(_,129);function Ae(o,e){if(!Q(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}var Ie=(o,e)=>{let t=o.length-1,i=[],s,a=e===2?"<svg>":e===3?"<math>":"",r=T;for(let g=0;g<t;g++){let n=o[g],h,u,d=-1,f=0;for(;f<n.length&&(r.lastIndex=f,u=r.exec(n),u!==null);)f=r.lastIndex,r===T?u[1]==="!--"?r=ue:u[1]!==void 0?r=ge:u[2]!==void 0?($e.test(u[2])&&(s=RegExp("</"+u[2],"g")),r=$):u[3]!==void 0&&(r=$):r===$?u[0]===">"?(r=s??T,d=-1):u[1]===void 0?d=-2:(d=r.lastIndex-u[2].length,h=u[1],r=u[3]===void 0?$:u[3]==='"'?be:fe):r===be||r===fe?r=$:r===ue||r===ge?r=T:(r=$,s=void 0);let x=r===$&&o[g+1].startsWith("/>")?" ":"";a+=r===T?n+De:d>=0?(i.push(h),n.slice(0,d)+xe+n.slice(d)+v+x):n+v+(d===-2?g:x)}return[Ae(o,a+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},M=class o{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,r=0,g=e.length-1,n=this.parts,[h,u]=Ie(e,t);if(this.el=o.createElement(h,i),A.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=A.nextNode())!==null&&n.length<g;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(xe)){let f=u[r++],x=s.getAttribute(d).split(v),U=/([.?@])?(.*)/.exec(f);n.push({type:1,index:a,name:U[2],strings:x,ctor:U[1]==="."?V:U[1]==="?"?F:U[1]==="@"?W:E}),s.removeAttribute(d)}else d.startsWith(v)&&(n.push({type:6,index:a}),s.removeAttribute(d));if($e.test(s.tagName)){let d=s.textContent.split(v),f=d.length-1;if(f>0){s.textContent=N?N.emptyScript:"";for(let x=0;x<f;x++)s.append(d[x],j()),A.nextNode(),n.push({type:2,index:++a});s.append(d[f],j())}}}else if(s.nodeType===8)if(s.data===ve)n.push({type:2,index:a});else{let d=-1;for(;(d=s.data.indexOf(v,d+1))!==-1;)n.push({type:7,index:a}),d+=v.length-1}a++}}static createElement(e,t){let i=_.createElement("template");return i.innerHTML=e,i}};function S(o,e,t=o,i){if(e===y)return e;let s=i!==void 0?t.o?.[i]:t.l,a=C(e)?void 0:e._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),a===void 0?s=void 0:(s=new a(o),s._$AT(o,t,i)),i!==void 0?(t.o??=[])[i]=s:t.l=s),s!==void 0&&(e=S(o,s._$AS(o,e.values),s,i)),e}var J=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??_).importNode(t,!0);A.currentNode=s;let a=A.nextNode(),r=0,g=0,n=i[0];for(;n!==void 0;){if(r===n.index){let h;n.type===2?h=new P(a,a.nextSibling,this,e):n.type===1?h=new n.ctor(a,n.name,n.strings,this,e):n.type===6&&(h=new X(a,this,e)),this._$AV.push(h),n=i[++g]}r!==n?.index&&(a=A.nextNode(),r++)}return A.currentNode=_,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},P=class o{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,i,s){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),C(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&C(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=M.createElement(Ae(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let a=new J(s,this),r=a.u(this.options);a.p(t),this.T(r),this._$AH=a}}_$AC(e){let t=ye.get(e.strings);return t===void 0&&ye.set(e.strings,t=new M(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let a of e)s===t.length?t.push(i=new o(this.O(j()),this.O(j()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}},E=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,a){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=c}_$AI(e,t=this,i,s){let a=this.strings,r=!1;if(a===void 0)e=S(this,e,t,0),r=!C(e)||e!==this._$AH&&e!==y,r&&(this._$AH=e);else{let g=e,n,h;for(e=a[0],n=0;n<a.length-1;n++)h=S(this,g[i+n],t,n),h===y&&(h=this._$AH[n]),r||=!C(h)||h!==this._$AH[n],h===c?e=c:e!==c&&(e+=(h??"")+a[n+1]),this._$AH[n]=h}r&&!s&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},V=class extends E{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}},F=class extends E{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}},W=class extends E{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??c)===y)return;let i=this._$AH,s=e===c&&i!==c||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==c&&(i===c||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},X=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}};var Ge=K.litHtmlPolyfillSupport;Ge?.(M,P),(K.litHtmlVersions??=[]).push("3.2.0");var _e=(o,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let a=t?.renderBefore??null;i._$litPart$=s=new P(e.insertBefore(j(),a),a,void 0,t??{})}return s._$AI(o),s};var p=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=_e(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return y}};p._$litElement$=!0,p.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:p});var Je=globalThis.litElementPolyfillSupport;Je?.({LitElement:p});(globalThis.litElementVersions??=[]).push("4.1.0");var Z=class extends p{static properties={headerItems:{type:Array},currentPage:{type:String}};constructor(){super(),this.headerItems=[],this.currentPage=""}static styles=m`
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
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
        border: 0;
        text-transform: uppercase;
        transition: background-color 0.3s ease;
      }

      .selected {
        background-color: #333;
        color: #fff;
      }

      .main {
        margin-top: 60px; /* Para evitar que el contenido quede oculto bajo el encabezado */
        padding: 20px;
      }

      @media (max-width: 520px) {
        button {
          padding: 5px;
        }
      }
    `;_handleClick(e){this.dispatchEvent(new CustomEvent("navigate",{detail:{page:e},bubbles:!0,composed:!0}))}render(){return l`
      <header class="header">
        ${this.headerItems.map(e=>l`
            <button 
              @click=${()=>this._handleClick(e.id)}
              class="${this.currentPage===e.id?"selected":""}">
              ${e.text}
            </button>
          `)}
      </header>
      <main class="main">
        <slot></slot>
      </main>
    `}};customElements.define("po-template",Z);var ee=class extends p{static properties={title:{type:String},description:{type:String},img:{type:String},socialLinks:{type:Array},buttonText:{type:String},navigation:{type:String}};constructor(){super(),this.title="Bienvenido",this.description="Explora mi portafolio para descubrir mis proyectos y habilidades.",this.socialLinks=[],this.buttonText="Descubre m\xE1s",this.navigation="#"}static styles=m`
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
      flex-wrap: wrap;
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
      margin-top: 20px;
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
  `;_handleButtonClick(){let e=new CustomEvent("navigate",{detail:{page:this.navigation},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){return l`
      <div class="card">
        <img class="profile-pic" src="${this.img}" alt="${this.title}" />
        <div class="title">${this.title}</div>
        <div class="description">${this.description}</div>
        <div class="slot-content">
          ${this.socialLinks.map(e=>l`
              <a
                href="${e.href}"
                class="social-button"
                target="_blank"
                rel="noopener noreferrer"
                title="${e.href}"
              >
                <i class="fab icon-${e.icon}"></i>
              </a>
            `)}
        </div>
      </div>
      <button @click=${this._handleButtonClick}>${this.buttonText}</button>
    `}};customElements.define("po-card-jumbo",ee);var Se={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ee=o=>(...e)=>({_$litDirective$:o,values:e}),B=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this.t=e,this._$AM=t,this.i=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var L=class extends B{constructor(e){if(super(e),this.it=c,e.type!==Se.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===c||e==null)return this._t=void 0,this.it=e;if(e===y)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};L.directiveName="unsafeHTML",L.resultType=1;var we=Ee(L);var te=class extends p{static properties={img:{type:String},title:{type:String},subtitle:{type:String},description:{type:String},modalTemplate:{type:String},_isModalOpen:{state:!0},_modalContent:{state:!0}};constructor(){super(),this._isModalOpen=!1,this._modalContent=""}static styles=m`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 280px;
      margin: 0 auto;
    }

    .card {
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      width: 100%;
      height: 400px;
      position: relative;
    }

    .card img {
      width: 100%;
      height: 45%;
      object-fit: cover;
    }

    .card-content {
      padding: 0 0.7rem 0.7rem 0.7rem;
      height: 55%;
      box-sizing: border-box;
    }

    .card-title {
      font-size: 1.5em;
      color: #333;
    }

    .card-subtitle {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 0.2rem;
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
      padding-bottom: 0.5rem;
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
  `;async _openModal(){if(this.modalTemplate)try{let e=await fetch(this.modalTemplate);e.ok?(this._modalContent=await e.text(),this._isModalOpen=!0):console.error("Failed to load template:",e.status)}catch(e){console.error("Error loading template:",e)}}_closeModal(){this._isModalOpen=!1}render(){return l`
      <div class="card">
        <img src="${this.img}" alt="${this.title}" />
        <div class="card-content">
          <div class="card-title">${this.title}</div>
          <div class="card-subtitle">${this.subtitle}</div>
          <div class="card-description">${this.description}</div>
          <a @click=${this._openModal} class="card-button">SABER MÁS</a>
        </div>
      </div>

      <div class="modal ${this._isModalOpen?"open":""}">
        <div class="modal-content">
          <div class="modal-title">${this.title}</div>
          <div class="modal-description">${we(this._modalContent)}</div>
          <a @click=${this._closeModal} class="modal-close">cerrar</a>
        </div>
      </div>
    `}};customElements.define("po-card-img",te);var ie=class extends p{static properties={title:{type:String},items:{type:Array},mode:{type:String}};constructor(){super(),this.mode="full"}static styles=m`
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

    :host([mode='full']) .item {
      border-bottom: 1px solid #eee;
    }

    :host([mode='full']) .item:last-child {
      border-bottom: none;
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

    .responsive-small {
      display: none;
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

      :host([mode='full']) .responsive-large {
        display: none;
      }

      :host([mode='full']) .responsive-small {
        display: block;
      }
      
      :host([mode='mini']) .responsive-small {
        display: none;
      }
    }
  `;render(){return l`
      <div class="container">
        <div class="title">${this.title}</div>
        <div class="items-list">
          ${this.items.map(e=>l`
              <div class="item">
                <div class="item-header">
                  <img src="${e.img}" alt="${e.title}" />
                  <div class="item-content">
                    <div class="item-title">${e.title}</div>
                    <div class="item-subtitle" ?hidden=${!e.subtitle}>${e.subtitle}</div>
                    <div class="item-description responsive-large">${e.description}</div>
                  </div>
                </div>
                <div class="item-description responsive-small">${e.description}</div>
              </div>
            `)}
        </div>
      </div>
    `}};customElements.define("po-container-items",ie);var se=class extends p{constructor(){super()}firstUpdated(){let e=this.shadowRoot.querySelector("po-card-jumbo"),t=document.createElement("link");t.rel="stylesheet",t.href="./dist/fonts/fontello.css",e.shadowRoot.appendChild(t)}static styles=m`
      :host {
        display: block;
      }

      po-card-jumbo,
      po-container-items {
        font-family: var(--theme-primary-font-family);
      }
    `;render(){return l`
      <section>
        <po-card-jumbo
          img="./dist/images/alex.jpg"
          title="Welcomo"
          navigation="profile"
          description="Aquí encontrarás quien soy y a lo que me dedico. Descubrirás un pedacito de mi alma en cada uno de mis proyectos personales. No te conformes solo con mirar, explora, sumérgete y deja que cada idea te inspire. ¡Adelante!"
          .socialLinks="${[{icon:"x-twitter",user:"AlexArroyoDuque",href:"https://twitter.com/alexarroyoduque"},{icon:"github",user:"AlexArroyoDuque",href:"https://github.com/alexarroyoduque"},{icon:"linkedin",user:"AlexArroyoDuque",href:"https://linkedin.com/in/alexarroyoduque"},{icon:"mail",user:"AlexArroyoDuque",href:"mailto:alexarroyoduque@gmail.com"},{icon:"cv",user:"AlexArroyoDuque",href:"https://docs.google.com/document/d/13RB4YZKHHN0AC8j_bDa7oLzwMvFWHs6U7m7y7GptPOU/edit#heading=h.sq3vcim9i8z8"}]}">
        </po-card-jumbo>
      </section>
    `}};customElements.define("po-page-home",se);var ke=[{title:"HTML5",img:"./dist/images/skills/html5.jpg"},{title:"CSS3",img:"./dist/images/skills/css3.jpg"},{title:"JavaScript",img:"./dist/images/skills/javascript.png"},{title:"Lit",img:"./dist/images/skills/lit.jpg",description:"Librer\xEDa para el desarrollo de web components"},{title:"Polymer",img:"./dist/images/skills/polymer.jpg",description:"Framework de desarrollo para crear web components"},{title:"AngularJS",img:"./dist/images/skills/angular.jpg",description:"HTML mejorado para aplicaciones web alucinantes"},{title:"PhaserJS",img:"./dist/images/skills/phaser.jpg",description:"Framework r\xE1pido y divertido para hacer juegos HTML5 para escritorio y m\xF3viles"},{title:"Git",img:"./dist/images/skills/git.jpg",description:"Software de control de versiones"},{title:"NodeJS",img:"./dist/images/skills/node.jpg",description:"Entorno de programaci\xF3n en la capa de servidor basado en ECMAScript"},{title:"GruntJS",img:"./dist/images/skills/grunt.jpg",description:"Librer\xEDa JavaScript para realizar tareas autom\xE1ticas"},{title:"Gulp",img:"./dist/images/skills/gulp.jpg",description:"Librer\xEDa JavaScript para realizar tareas autom\xE1ticas basada en streams"},{title:"Bower",img:"./dist/images/skills/bower.png",description:"Manejador para instalar dependencias"},{title:"Yeoman",img:"./dist/images/skills/yeoman.png",description:"Generador de esqueletos de aplicaci\xF3n"},{title:"Sass",img:"./dist/images/skills/sass.jpg",description:"Vitamina tus hojas de estilo extendiendo sus caracter\xEDsticas"},{title:"Jade",img:"./dist/images/skills/jade.jpg",description:"Genera plantillas HTML con una sintaxis m\xE1s sencilla y mucho m\xE1s"},{title:"jQuery",img:"./dist/images/skills/jquery.gif",description:"Escribe menos c\xF3digo para manejar el DOM, eventos, etc, ..."},{title:"Bootstrap",img:"./dist/images/skills/bootstrap.jpg",description:"Framework de HTML, CSS y JS para crear p\xE1ginas web"},{title:"Lodash",img:"./dist/images/skills/lodash.png",description:"Librer\xEDa javascript con gran cantidad de m\xE9todos para manejar objetos y arrays"},{title:"Raphael",img:"./dist/images/skills/raphael.png",description:"Librer\xEDa para dibujar gr\xE1ficos vectoriales en la web de forma sencilla"},{title:"D3",img:"./dist/images/skills/d3.png",description:"Crea gr\xE1ficos alucinantes con esta librer\xEDa"}],Te=[{img:"./dist/images/education/psm1.png",title:"Profesional Scrum Master I",description:"scrum.org",subtitle:"2018"},{img:"./dist/images/education/gamificacion-intro-docentes.png",title:"Introducci\xF3n a la gamificaci\xF3n para docentes",href:"https://goo.gl/rDzPXK",description:"Telef\xF3nica scolarTIC",subtitle:"2016"},{img:"./dist/images/education/carlosIII.gif",title:"Grado en ingenier\xEDa inform\xE1tica",description:"CarlosIII",subtitle:"2013"},{img:"./dist/images/education/mongo.png",title:"M101JS: MongoDB for Node.js Developers",href:"https://s3.amazonaws.com/edu-cert.10gen.com/downloads/03820222566b45cabdc47bbb8d23b3fb/Certificate.pdf",description:"MongoDB",subtitle:"2013"}];var oe=class extends p{constructor(){super()}static styles=m`
    :host {
      display: block;
    }

    po-container-items {
      margin-bottom: 1rem;
      font-family: var(--theme-primary-font-family);
    }
  `;render(){return l`
      <section>
        <po-container-items mode="full" .items=${[{title:"Alejandro Arroyo Duque",img:"./dist/images/alex.jpg",subtitle:"Front-end developer",description:"Soy un apasionado de la web, siempre buscando llevarla al l\xEDmite para explotar todo su potencial. En mis ratos libres, creo proyectos experimentales de videojuegos, explorando nuevas tecnolog\xEDas y mantenerme en constante aprendizaje. Adem\xE1s, lanc\xE9 el podcast #PixelOculto para compartir mi afici\xF3n. Siempre estoy explorando nuevas \xE1reas, como UX, agilismo o cualquier tema que me mantenga motivado."}]}></po-container-items>

        <po-container-items title="Formación" mode="mini" .items=${Te}></po-container-items>
        <po-container-items title="Habilidades" mode="mini" .items=${ke}></po-container-items>
      </section>
    `}};customElements.define("po-page-profile",oe);var je=[{title:"SNGULAR",img:"./dist/images/companies/sngular.jpg",subtitle:"Mayo 2016 - Actualidad",description:"Principalmente dedicado al desarrollo de proyectos con web componentes en BBVA."},{title:"GFT/Adesis Netlife",img:"./dist/images/companies/gft.jpg",subtitle:"Septiembre 2012 - Enero 2016",description:"En Adesis, inicialmente apoy\xE9 al equipo de Front-end en el desarrollo, planificaci\xF3n y resoluci\xF3n de incidencias. Trabaj\xE9 con tecnolog\xEDas avanzadas como JADE, AngularJS y NodeJS, y particip\xE9 en el dise\xF1o de la arquitectura front-end para aplicaciones de Mapfre y Bankia. Mi principal responsabilidad fue desarrollar componentes web con directivas de AngularJS, creando un cat\xE1logo para los desarrolladores. Posteriormente, GFT adquiri\xF3 Adesis y pas\xE9 a formar parte de su equipo."}],Ce=[{title:"BBVA - Cells Apps",subtitle:"s|ngular, 2016 - actualidad",img:"./dist/images/professional/bbva-cells.jpg",description:"Cells es la propuesta de BBVA para el desarrollo front basada en webcomponents.",modalTemplate:"./dist/modals/professional/bbva-cells-apps.html"},{title:"Bankia - Arq. front",subtitle:"Adesis Netlife/GFT 2013 - 2016",img:"./dist/images/professional/bankia.jpg",description:"Sentar las bases de una arquitectura web moderna que permita crear aplicaciones agilmente",modalTemplate:"./dist/modals/professional/bankia.html"},{title:"Mapfre GAIA",subtitle:"Adesis Netlife, 2013",img:"./dist/images/professional/mapfre.jpg",description:"El framework GAIA agilizar\xE1 el desarrollo web arrastrando componentes",modalTemplate:"./dist/modals/professional/gaia.html"},{title:"Seguros Bancomer",subtitle:"Adesis Netlife, 2012",img:"./dist/images/professional/bancomer.jpg",description:"Renovaci\xF3n de la presencia digital de Seguros Bancomer (BBVA)",modalTemplate:"./dist/modals/professional/bancomer-seguros.html"},{title:"Plantillas XSLT-FO",subtitle:"Adesis Netlife, 2012",img:"./dist/images/professional/bancomer.jpg",description:"Generaci\xF3n de plantillas XSLT-FO que alimentadas de archivos XML permitiesen la generaci\xF3n de documentos PDF din\xE1micos.",modalTemplate:"./dist/modals/professional/xslt.html"}];var ae=class extends p{constructor(){super()}static styles=m`
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
  `;render(){return l`
      <section>
        <po-container-items mode="full" .items=${je}></po-container-items>

        <section class="projects">
          ${Ce.map(e=>l`
            <po-card-img
              title="${e.title}"
              subtitle="${e.subtitle}"
              img="${e.img}"
              description="${e.description}"
              modalTemplate="${e.modalTemplate}">
            </po-card-img>
          `)}
        </section>
      </section>
    `}};customElements.define("po-page-professional",ae);var Me=[{title:"MicroMachines Military parche al espa\xF1ol",img:"./dist/images/personal/micromachines.jpg",subtitle:"2024",description:"Traducci\xF3n para MicroMachines Military de Megadrive.",modalTemplate:"./dist/modals/personal/micromachines.html"},{title:"Dart master",img:"./dist/images/personal/dart-master.jpg",subtitle:"2022",description:"Juego de dardos para GameBoy y navegador.",modalTemplate:"./dist/modals/personal/dart-master.html"},{title:"Orlog",img:"./dist/images/personal/orlog.jpg",subtitle:"2021",description:"Adaptaci\xF3n web del juego de dados Orlog de Assassins\xB4s Creed Valhalla.",modalTemplate:"./dist/modals/personal/orlog.html"},{title:"Peteypedia",img:"./dist/images/personal/peteypedia.jpg",subtitle:"2020",description:"R\xE9plica en espa\xF1ol de la Peteypedia de Watchmen de la serie de HBO.",modalTemplate:"./dist/modals/personal/peteypedia.html"},{title:"amiibum",img:"./dist/images/personal/amiibum.jpg",subtitle:"2019",description:"Marca tus amiibos de Nintendo en esta app hecha con lit-html.",modalTemplate:"./dist/modals/personal/amiibum.html"},{title:"Galaxia oculta",img:"./dist/images/personal/galaxia-oculta.jpg",subtitle:"2016 - Actualmente",description:"Canal de podcast. Programa principal sobre videojuegos #pixelOculto y #cantinaOculta para otros contenidos.",modalTemplate:"./dist/modals/personal/galaxia-oculta.html"},{title:"Colaborador VGA",img:"./dist/images/personal/vga.jpg",subtitle:"2014 - Actualmente",description:"He participado impartiendo charlas sobre videojuegos en el meetup VGA.",modalTemplate:"./dist/modals/personal/vga.html"},{title:"Project Black",img:"./dist/images/personal/project-black.png",subtitle:"2017",description:'Desarrollado junto a Samuel Dorado Rodr\xEDguez dentro de la iniciativa "Hacking the game" de s|ngular.',modalTemplate:"./dist/modals/personal/project-black.html"},{title:"Where is it?",img:"./dist/images/personal/where-is-it.jpg",subtitle:"2016",description:"Un juego muy sencillo que ocupa menos de 1 kb.",modalTemplate:"./dist/modals/personal/where-is-it.html"},{title:"Master Wars",img:"./dist/images/personal/master-wars.jpg",subtitle:"2016",description:"Experimento con React y la Api de Marvel.",modalTemplate:"./dist/modals/personal/master-wars.html"},{title:"Shootem Totem",img:"./dist/images/personal/shootem-totem.jpg",subtitle:"2016",description:"Shoot\xB4em up fren\xE9tico. Se puede usar el m\xF3vil para manejar la nave mandando ordenes por websockets.",modalTemplate:"./dist/modals/personal/shootem-totem.html"},{title:"Master Gun",img:"./dist/images/personal/master-gun.jpg",subtitle:"2015",description:"Shooter al estilo western hecho con Polymer.",modalTemplate:"./dist/modals/personal/master-gun.html"},{title:"Gau el experto",img:"./dist/images/personal/gau.jpg",subtitle:"2015",description:"Aventura interactiva donde el protagonista es un experto en tecnolog\xEDa.",modalTemplate:"./dist/modals/personal/gau.html"},{title:"Egypt Adventure",img:"./dist/images/personal/egypt-adventure.jpg",subtitle:"2014 - 2015",description:"Juego de plataformas con toques RPG. Desarrollado en HTML5 con PhaserJS. Disponible para PC y OSX.",modalTemplate:"./dist/modals/personal/egypt-adventure.html"},{title:"Arcade Pi",img:"./dist/images/personal/raspberry-pi.jpg",subtitle:"2014",description:"Usando el sistema operativo PiMame mont\xE9 una consola arcade para emular sistemas cl\xE1sicos.",modalTemplate:"./dist/modals/personal/arcade-pi.html"},{title:"Click Master",img:"./dist/images/personal/click-master.jpg",subtitle:"2013",description:"Cu\xE1nto tardas en hacer 211 clicks sin pasarte? Mini juego hecho con AngularJS.",modalTemplate:"./dist/modals/personal/click-master.html"}],Pe=[{title:"Trainvial",img:"./dist/images/personal/trainvial.jpg",subtitle:"2012",description:"Mi primer experimento con AngularJS. Demo de un trivial compatible con las plataformas m\xF3viles y escritorio.",modalTemplate:"./dist/modals/personal/trainvial.html"},{title:"Battleship - Hundir la flota",img:"./dist/images/personal/battleship.jpg",subtitle:"2016",description:"Experimento con Angular 2.",modalTemplate:"./dist/modals/personal/battleship.html"},{title:"Invitado a Radio GameOn",img:"./dist/images/personal/game-on.png",subtitle:"13/07/2016",description:"Mi primera colaboraci\xF3n en radio.",modalTemplate:"./dist/modals/personal/game-on.html"},{title:"Cromos de Egypt Adventure",img:"./dist/images/personal/egypt-adventure-cards.jpg",subtitle:"2015",description:"Cromos promocionales de Egypt Adventure con interesantes detalles.",modalTemplate:"./dist/modals/personal/egypt-adventure-cards.html"},{title:"Portafolio",img:"./dist/images/personal/portfolio.jpg",subtitle:"2015",description:"Descubre las tecnolog\xEDas y motivaciones que han llevado a cabo este proyecto.",modalTemplate:"./dist/modals/personal/portfolio.html"}];var re=class extends p{constructor(){super(),window.addEventListener("global-secrets-active-changed",e=>{this.requestUpdate()})}static styles=m`
    :host {
      display: block;
    }

    po-card-img {
      font-family: var(--theme-primary-font-family);
    }

    .projects {
      display: flex;
      flex-wrap: wrap; /* Permite que las tarjetas se envuelvan a la siguiente línea */
      justify-content: center; /* Centra las tarjetas horizontalmente */
      gap: .8rem .2rem; /* Añade espacio entre las tarjetas */
      margin-bottom: .8rem;
    }

    [hidden] {
      display: none;
    }
  `;render(){return l`
      <section>

        <section class="projects">
          ${Me.map(e=>l`
            <po-card-img
              title="${e.title}"
              subtitle="${e.subtitle}"
              img="${e.img}"
              description="${e.description}"
              modalTemplate="${e.modalTemplate}">
            </po-card-img>
          `)}
        </section>

        <section class="projects" ?hidden=${!window.GLOBAL_SECRETS_ACTIVE}>
          ${Pe.map(e=>l`
            <po-card-img
              title="${e.title}"
              subtitle="${e.subtitle}"
              img="${e.img}"
              description="${e.description}"
              modalTemplate="${e.modalTemplate}">
            </po-card-img>
          `)}
        </section>

      </section>
    `}};customElements.define("po-page-personal",re);var ne=class extends p{static properties={currentPage:{type:String}};constructor(){super(),this.currentPage="home",console.log(`
Un nuevo desaf\xEDo ante ti...
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500
\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500
\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500\u2500\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2500\u2500
\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500\u2584\u2580\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2580\u2584\u2500
\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580

Haz foco en cualquier parte del portafolio
e introduce el c\xF3digo Konami: 
"\u25B2, \u25B2, \u25BC, \u25BC, \u25C0, \u25B6, \u25C0, \u25B6, B, A".
Si usas un dispositivo t\xE1ctil prueba con: 
"\u25B2, \u25B2, \u25BC, \u25BC, \u25C0, \u25B6, \u25C0, \u25B6, tap, tap".
`)}static styles=m`
      :host {
        display: block;
        --theme-primary-font-family: 'Nunito', sans-serif;
        --theme-mono-font-family: 'Noto Sans Mono', monospace;

        --theme-color-green: #00ff4c;
        --theme-color-blue: #5be7ff;
        --theme-color-yellow: #faff00;
        --theme-color-gray-light: #eee;
        --theme-color-gray: #808080;

        --theme-color-primary: var(--theme-color-green);
        --theme-color-secondary: var(--theme-color-light);

        margin: 0px auto;
      }
    `;_navigate(e){this.currentPage=e}render(){return l`
      <section>
        <po-template
          @navigate="${e=>this._navigate(e.detail.page)}"
          .headerItems=${[{text:"Inicio",id:"home"},{text:"Perfil",id:"profile"},{text:"Experiencia",id:"professional"},{text:"Proyectos Personales",id:"personal"}]}
          currentPage=${this.currentPage}
        >
          ${this.currentPage==="home"?l`<po-page-home></po-page-home>`:""}
          ${this.currentPage==="professional"?l`<po-page-professional></po-page-professional>`:""}
          ${this.currentPage==="personal"?l`<po-page-personal></po-page-personal>`:""}
          ${this.currentPage==="profile"?l`<po-page-profile></po-page-profile>`:""}
        </po-template>
      </section>
    `}};customElements.define("po-main",ne);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=po-main.js.map
