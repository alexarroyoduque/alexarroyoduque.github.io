import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export class PoCardImg extends LitElement {
  static properties = {
    img: { type: String },
    title: { type: String },
    subtitle: { type: String },
    description: { type: String },
    modalTemplate: { type: String },
    _isModalOpen: { state: true },
    _modalContent: { state: true },
  };

  constructor() {
    super();
    this._isModalOpen = false;
    this._modalContent = '';
  }

static styles = css`
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
  `;

  async _openModal() {
    if (this.modalTemplate) {
      try {
        const response = await fetch(this.modalTemplate);
        if (response.ok) {
          this._modalContent = await response.text();
          this._isModalOpen = true;
        } else {
          console.error('Failed to load template:', response.status);
        }
      } catch (error) {
        console.error('Error loading template:', error);
      }
    }
  }

  _closeModal() {
    this._isModalOpen = false;
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.img}" alt="${this.title}" />
        <div class="card-content">
          <div class="card-title">${this.title}</div>
          <div class="card-subtitle">${this.subtitle}</div>
          <div class="card-description">${this.description}</div>
          <a @click=${this._openModal} class="card-button">SABER MÁS</a>
        </div>
      </div>

      <div class="modal ${this._isModalOpen ? 'open' : ''}">
        <div class="modal-content">
          <div class="modal-title">${this.title}</div>
          <div class="modal-description">${unsafeHTML(this._modalContent)}</div>
          <a @click=${this._closeModal} class="modal-close">cerrar</a>
        </div>
      </div>
    `;
  }
}

customElements.define('po-card-img', PoCardImg);
