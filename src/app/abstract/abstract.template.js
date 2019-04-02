import { renderHTML } from '../../utils';

export default class AbstractTemplate {
  constructor() {
    if (new.target === AbstractTemplate) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one');
    }
  }

  get template() {
    throw new Error('Template is required');
  }

  get element() {
    if (!this._element) {
      this._element = this.render();
    }
    return this._element;
  }

  render() {
    return renderHTML(this.template);
  }
}
