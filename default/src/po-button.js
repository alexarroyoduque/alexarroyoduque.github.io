import{LitElement,html,css}from"../node_modules/lit-element/index.js";export class PoButton extends LitElement{static get properties(){return{mode:{type:String},text:{type:String},navigation:{type:String},payload:{type:Object},color:{type:String},action:{type:String},disabled:{type:Boolean},hidden:{type:Boolean,attribute:!0,reflect:!0}}}constructor(){super();this.mode="";this.hidden=!1;this.disabled=!1;this.payload={}}static get styles(){return css`
      :host {
        display: block;
      }
      button {
        width: var(--mc-button-width, 10rem);
        border: 0;
        padding: .3rem;
        text-transform: uppercase;
        font-family: var(--theme-primary-font-family);
        font-size: 1.7rem;
        background-color: var(--theme-color-gray-light);
      }

      button[mode="mini"] {
        width: var(--mc-button-width, 6rem);
        font-size: 1.2rem;
        height: 2rem;
      }

      button[mode="nano"] {
        width: var(--mc-button-width, auto);
        padding: 0.1rem 0.5rem;
        font-size: .8rem;
      }

      button[disabled] {
        cursor: not-allowed;
        background-color: var(--theme-color-gray-light);
        color: var(--theme-color-gray);
        opacity: .5;
      }
    `}_emmitAction(action,payload){console.log("_emmitAction",this.action);if(!this.disabled){if(this.action){this.dispatchEvent(new CustomEvent(this.action,{detail:{action:this.action,payload},bubbles:!0,composed:!0}))}}}_emmitNavigation(pageName,payload){console.log("_emmitNavigation",pageName);if(!this.disabled){if(this.navigation){this.dispatchEvent(new CustomEvent("navigate",{detail:{page:pageName,payload},bubbles:!0,composed:!0}))}}}_do(navigation,action,payload){this._emmitAction(action,payload);this._emmitNavigation(navigation,payload)}render(){return html`
      <button
        @click=${()=>this._do(this.navigation,this.action,this.payload)}
        mode=${this.mode}
        style='background-color: ${!this.disabled?this.color:"var(--theme-color-gray-light)"};'
        ?disabled=${this.disabled}
        ?hidden=${this.hidden}
      >
        <span>${this.text}</span>
      </button>
    `}}customElements.define("po-button",PoButton);