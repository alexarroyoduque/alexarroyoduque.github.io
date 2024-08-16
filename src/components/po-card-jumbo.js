import { LitElement, html, css } from 'lit';

export class PoCardJumbo extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    img: { type: String },
    socialLinks: { type: Array },
    buttonText: { type: String },
    navigation: { type: String },
  };

  constructor() {
    super();
    this.title = 'Bienvenido';
    this.description = 'Explora mi portafolio para descubrir mis proyectos y habilidades.';
    this.socialLinks = [];
    this.buttonText = 'Descubre más';
    this.navigation = '#';
  }

  static styles = css`
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
  `;

  _handleButtonClick() {
    const navigateEvent = new CustomEvent('navigate', {
      detail: { page: this.navigation },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(navigateEvent);
  }

  render() {
    return html`
      <div class="card">
        <img class="profile-pic" src="${this.img}" alt="${this.title}" />
        <div class="title">${this.title}</div>
        <div class="description">${this.description}</div>
        <div class="slot-content">
          ${this.socialLinks.map(
            (link) => html`
              <a
                href="${link.href}"
                class="social-button"
                target="_blank"
                rel="noopener noreferrer"
                title="${link.href}"
              >
                <i class="fab icon-${link.icon}"></i>
              </a>
            `
          )}
        </div>
      </div>
      <button @click=${this._handleButtonClick}>${this.buttonText}</button>
    `;
  }
}

customElements.define('po-card-jumbo', PoCardJumbo);
