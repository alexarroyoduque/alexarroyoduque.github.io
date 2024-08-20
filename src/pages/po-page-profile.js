import { LitElement, html, css } from 'lit';
import { education, skills } from '../database/profile.js';
import '../components/po-card-img.js';

export class PoPageProfile extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
    }

    po-container-items {
      margin-bottom: 1rem;
      font-family: var(--theme-primary-font-family);
    }
  `;

  render() {
    return html`
      <section>
        <po-container-items mode="full" .items=${[
          {
            title: 'Alejandro Arroyo Duque',
            img: './images/alex.jpg',
            subtitle: 'Front-end developer',
            description: 'Soy un apasionado de la web, siempre buscando llevarla al límite para explotar todo su potencial. En mis ratos libres, creo proyectos experimentales de videojuegos, explorando nuevas tecnologías y mantenerme en constante aprendizaje. Además, lancé el podcast #PixelOculto para compartir mi afición. Siempre estoy explorando nuevas áreas, como UX, agilismo o cualquier tema que me mantenga motivado.',
          }
        ]}></po-container-items>

        <po-container-items title="Formación" mode="mini" .items=${education}></po-container-items>
        <po-container-items title="Habilidades" mode="mini" .items=${skills}></po-container-items>
      </section>
    `;
  }
}

customElements.define('po-page-profile', PoPageProfile);
