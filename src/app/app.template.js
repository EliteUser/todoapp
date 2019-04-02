import AbstractTemplate from './abstract/abstract.template';

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
