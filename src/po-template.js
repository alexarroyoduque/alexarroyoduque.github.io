import { html, css, LitElement } from 'lit-element';


export class PoTemplate extends LitElement {
  static get properties() {
    return {
    };
  }

  constructor() {
    super();
    
  }

  static get styles() {
    return css`
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
  `;
  }

  _handleClick(pageName) {
    this.dispatchEvent(new CustomEvent('navigate', { detail: { page: pageName }, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <header class="header">
        <button @click=${() => this._handleClick('home')}>Inicio</button>
        <button @click=${() => this._handleClick('profile')}>Perfil</button>
        <button @click=${() => this._handleClick('professional')}>Experiencia</button>
        <button @click=${() => this._handleClick('personal')}>Proyectos Personales</button>
      </header>
      <main class="main">
        <slot></slot>
      </main>
    `;
  }
}

customElements.define('po-template', PoTemplate);
