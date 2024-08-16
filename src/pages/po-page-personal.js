import { LitElement, html, css } from 'lit';
import { projects, secrets } from '../database/personal.js';
import '../components/po-card-img.js';

export class PoPagePersonal extends LitElement {
  constructor() {
    super();
    // Escucha el evento 'global-secrets-active-changed' para solicitar una actualización
    window.addEventListener('global-secrets-active-changed', (event) => {
      this.requestUpdate();
    });
  }

  static styles = css`
    :host {
      display: block;
    }

    po-card-img {
      font-family: var(--theme-primary-font-family);
    }

    .projects {
      display: flex;
      flex-wrap: wrap; /* Permite que las tarjetas se envuelvan a la siguiente línea */
      justify-content: center; /* Centra las tarjetas horizontalmente */
      gap: .8rem .2rem; /* Añade espacio entre las tarjetas */
      margin-bottom: .8rem;
    }

    [hidden] {
      display: none;
    }
  `;

  render() {
    return html`
      <section>

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

        <section class="projects" ?hidden=${!window.GLOBAL_SECRETS_ACTIVE}>
          ${secrets.map(project => html`
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

customElements.define('po-page-personal', PoPagePersonal);
