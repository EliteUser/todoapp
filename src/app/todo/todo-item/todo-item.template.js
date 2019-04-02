import AbstractTemplate from '../../abstract/abstract.template';

export default class TodoItemTemplate extends AbstractTemplate {
  constructor(model) {
    super();

    this.model = model;
  }

  get template() {
    return `
      <li class="todo-item" id="${this.model.id}">
        <span class="todo-item__name">${this.model.name}</span>
        <button class="todo-item__button button button--close">X</button>
      </li>
    `;
  }
}
