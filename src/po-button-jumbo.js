import { LitElement, html, css } from 'lit-element';

export class PoButtonJumbo extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      navigation: { type: String }
    };
  }

  constructor() {
    super();

  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      button {
        padding: 0;
        border: 4px solid blue;
        width: 16rem;
        height: 8rem;
        border: 4px solid var(--theme-color-blue);
        border-radius: 4px;
        background-size: cover;
      }

      button div {
        padding: .2rem;
        height: calc(100% - .4rem);
        background-color: rgb(0 0 0 / 40%);
        color: white;
        display: grid;
      }

      button span.title {
        font-size: 1.8rem;
        font-family: var(--theme-primary-font-family);
        display: inline-block;
      }

      button span.description {
        font-family: var(--theme-secondary-font-family);
        display: inline-block;
      }

    `;
  }

  _goTo(pageName) {
    console.log('_goTo')
    console.log(pageName)
    this.dispatchEvent(new CustomEvent('navigate', { detail: { page: pageName }, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <button @click=${()=>this._goTo(`${this.navigation}`)} style='background-image: url(${this.image});'>
        <div>
          <span class='title'>${this.title}</span>
          <span class='description'>${this.description}</span>
        </div>
      </button>
    `;
  }


}

customElements.define('po-button-jumbo', PoButtonJumbo);
