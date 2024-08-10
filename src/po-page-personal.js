import { LitElement, html, css } from 'lit-element';
import { projects, secrets } from './database/personal.js';
import './po-card-img.js';

export class PoPagePersonal extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();

    window.addEventListener('global-secrets-active-changed', (event) => {
      this.requestUpdate();
    });

  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      po-card-img {
        font-family: var(--theme-primary-font-family);
      }

      .projects {
        display: flex;
        flex-wrap: wrap; /* Allows cards to wrap to the next line */
        justify-content: center; /* Centers the cards horizontally */
        gap: .8rem .2rem; /* Adds space between the cards */
        margin-bottom: .8rem;
      }

      [hidden] {
        display: none;
      }

    `;
  }

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
