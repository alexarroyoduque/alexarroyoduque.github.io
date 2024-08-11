import { LitElement, html, css } from 'lit-element';
import { education, skills } from './database/profile.js';
import './po-card-img.js';

export class PoPageProfile extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      po-container-items {
        margin-bottom: 1rem;
      } 

      po-container-items {
        font-family: var(--theme-primary-font-family);
      }
    `;
  }

  render() {
    return html`
      <section>
        <po-container-items mode="full" .items=${[
          {
            title: 'Alejandro Arroyo Duque',
            img: 'src/images/alex.jpg',
            subtitle: 'Front-end developer',
            description: 'Apasionado en explotar el potencial de la web. En mi tiempo libre creo proyectos experimentales de videojuegos y lancé el podcast #PixelOculto para hablar de ellos. Además continuamente busco aprender sobre otras áreas como UX, agilismo, etc.',
          }
        ]}></po-container-items>

        <po-container-items title="Formación" mode="mini" .items=${education}></po-container-items>
        <po-container-items title="Habilidades" mode="mini" .items=${skills}></po-container-items>
      </section>
    `;
  }
}

customElements.define('po-page-profile', PoPageProfile);
