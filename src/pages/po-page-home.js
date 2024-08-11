import { LitElement, html, css } from 'lit-element';
import '../components/po-card-jumbo.js';
import '../components/po-card-img.js';
import '../components/po-container-items.js';

export class PoPageHome extends LitElement {
  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    let card = this.shadowRoot.querySelector('po-card-jumbo');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'src/fonts/fontello.css';
    card.shadowRoot.appendChild(link);
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      po-card-jumbo,
      po-container-items {
        font-family: var(--theme-primary-font-family);
      }

    `;
  }

  render() {
    return html`

      <section>
        <po-card-jumbo
          img="src/images/alex.jpg"
          title="Welcome"
          navigation="profile"
          description="Descubre mis proyectos y la pasión que pongo en cada uno de ellos. ¡Explora y encuentra inspiración en mi portafolio!"
          .socialLinks="${[
            { icon: 'x-twitter', user: 'AlexArroyoDuque', href: 'https://twitter.com/alexarroyoduque' },
            { icon: 'github', user: 'AlexArroyoDuque', href: 'https://github.com/alexarroyoduque' },
            { icon: 'linkedin', user: 'AlexArroyoDuque', href: 'https://linkedin.com/in/alexarroyoduque' },
            { icon: 'mail', user: 'AlexArroyoDuque', href: 'mailto:alexarroyoduque@gmail.com' },
            { icon: 'cv', user: 'AlexArroyoDuque', href: 'https://docs.google.com/document/d/13RB4YZKHHN0AC8j_bDa7oLzwMvFWHs6U7m7y7GptPOU/edit#heading=h.sq3vcim9i8z8' }
          ]}">
        ></po-card-jumbo>

      </section>
    `;
  }


}

customElements.define('po-page-home', PoPageHome);
