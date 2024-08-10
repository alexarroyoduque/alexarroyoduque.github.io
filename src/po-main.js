import { LitElement, html, css } from 'lit-element';
import './po-template.js';
import './po-page-home.js';
import './po-page-profile.js';
import './po-page-professional.js';
import './po-page-personal.js';


export class PoMain extends LitElement {
  static get properties() {
    return {
      currentPage: { type: String }
    };
  }

  constructor() {
    super();
    this.currentPage = 'home';

    const devMessage =
    '\n' +
    'Un nuevo desafío ante ti...\n' +
    '────────────────▄────────────────\n' +
    '──────────────▄▀░▀▄──────────────\n' +
    '────────────▄▀░░░░░▀▄────────────\n' +
    '──────────▄▀░░░░░░░░░▀▄──────────\n' +
    '────────▄█▄▄▄▄▄▄▄▄▄▄▄▄▄█▄────────\n' +
    '───────▄▀▄─────────────▄▀▄───────\n' +
    '─────▄▀░░░▀▄─────────▄▀░░░▀▄─────\n' +
    '───▄▀░░░░░░░▀▄─────▄▀░░░░░░░▀▄───\n' +
    '─▄▀░░░░░░░░░░░▀▄─▄▀░░░░░░░░░░░▀▄─\n' +
    '▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\n' +
    '\n' +
    'Haz foco en cualquier parte del portafolio\n' +
    'e introduce el código Konami: \n' +
    '"▲, ▲, ▼, ▼, ◀, ▶, ◀, ▶, B, A".\n' +
    'Si usas un dispositivo táctil prueba con: \n' +
    '"▲, ▲, ▼, ▼, ◀, ▶, ◀, ▶, tap, tap".\n';

    console.log(devMessage);
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --theme-primary-font-family:  'Nunito', sans-serif;
        /* --theme-secondary-font-family: 'Titillium Web', sans-serif; */
        --theme-mono-font-family: 'Noto Sans Mono', monospac;

        --theme-color-green: #00ff4c;
        --theme-color-blue: #5be7ff;
        --theme-color-yellow: #faff00;
        --theme-color-gray-light: #eee;
        --theme-color-gray: #808080;

        --theme-color-primary: var(--theme-color-green);
        --theme-color-secondary: var(--theme-color-light);

        margin: 0px auto;

        /* background-color: red; */
      }
    `;
  }

  _navigate(page) {
    this.currentPage = page;
  }   

  render() {
    return html`
      <section>
        <po-template @navigate="${(e) => this._navigate(e.detail.page)}">
          ${this.currentPage === 'home' ? html`<po-page-home></po-page-home>` : ''}
          ${this.currentPage === 'professional' ? html`<po-page-professional></po-page-professional>` : ''}
          ${this.currentPage === 'personal' ? html`<po-page-personal></po-page-personal>` : ''}
          ${this.currentPage === 'profile' ? html`<po-page-profile></po-page-profile>` : ''}
        </po-template>
      </section>

    `;
  }


}

customElements.define('po-main', PoMain);
