import AbstractTemplate from './components/abstract/abstract.template';
import './app.scss';

export default class AppTemplate extends AbstractTemplate {
  constructor() {
    super();
  }

  get template() {
    return `
      <section class="app"></section>
    `;
  }
}
