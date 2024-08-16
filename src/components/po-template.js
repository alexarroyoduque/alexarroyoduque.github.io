import { html, css, LitElement } from 'lit';

class PoTemplate extends LitElement {
  static properties = {
    headerItems: { type: Array }, // Array que define los elementos del encabezado
    currentPage: { type: String }  // Página actual para resaltar el botón seleccionado
  };


  constructor() {
    super();
    this.headerItems = []; // Inicializar el array como vacío por defecto
    this.currentPage = ''; // Inicializar la página actual como cadena vacía por defecto
  }

  static styles = css`
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
    `;

  _handleClick(pageName) {
    this.dispatchEvent(new CustomEvent('navigate', { detail: { page: pageName }, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <header class="header">
        ${this.headerItems.map(
          (item) => html`
            <button 
              @click=${() => this._handleClick(item.id)}
              class="${this.currentPage === item.id ? 'selected' : ''}">
              ${item.text}
            </button>
          `
        )}
      </header>
      <main class="main">
        <slot></slot>
      </main>
    `;
  }
}

customElements.define('po-template', PoTemplate);
