import { LitElement, html, css } from 'lit-element';

export class PoContainerItems extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      items: { type: Array },
      mode: { type: String }, // Propiedad para determinar el modo (mini o completo)
    };
  }

  constructor() {
    super();
    this.mode = 'full'; // Establece el modo predeterminado como 'full'
  }

  static get styles() {
    return css`
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

      /* Elimina la línea en el último ítem */
      .item:last-child {
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
    `;
  }

  render() {
    return html`
      <div class="container">
        <div class="title">${this.title}</div>
        <div class="items-list">
          ${this.items.map(
            (item) => html`
              <div class="item">
                <div class="item-header">
                  <img src="${item.img}" alt="${item.title}" />
                  <div class="item-content">
                    <div class="item-title">${item.title}</div>
                    <div class="item-subtitle" ?hidden=${!item.subtitle}>${item.subtitle}</div>
                    <div class="item-description responsive-large">${item.description}</div>
                  </div>
                </div>
                <div class="item-description responsive-small">${item.description}</div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define('po-container-items', PoContainerItems);
