import { LitElement, html, css } from 'lit-element';
import { companies, projects } from '../database/professional.js';
import '../components/po-card-img.js';

export class PoPageProfessional extends LitElement {
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

      po-container-items,
      po-card-img {
        font-family: var(--theme-primary-font-family);
      }

      .projects {
        display: flex;
        flex-wrap: wrap; /* Allows cards to wrap to the next line */
        justify-content: center; /* Centers the cards horizontally */
        gap: .8rem .2rem; /* Adds space between the cards */
        padding: 1rem 0 1rem 0; /* Adds padding around the cards */
      }

      /* Optionally, add responsiveness */
      @media (max-width: 600px) {
        .projects {
          gap: 10px; /* Adjust gap for smaller screens */
        }
      }
    `;
  }

  render() {
    return html`
      <section>
        <po-container-items mode="full" .items=${companies}></po-container-items>

        <section class="projects">
          ${projects.map(project => html`
            <po-card-img
              title="${project.title}"
              subtitle="${project.subtitle}"
              img="${project.img}"
              description="${project.description}"
              modalTemplate="${project.modalTemplate}">
            </po-card-img>
          `)}
        </section>
      </section>
    `;
  }
}

customElements.define('po-page-professional', PoPageProfessional);
