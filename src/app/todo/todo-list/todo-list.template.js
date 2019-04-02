import AbstractTemplate from '../../abstract/abstract.template';

export default class TodoListTemplate extends AbstractTemplate {
  constructor() {
    super();
  }

  get template() {
    return `
      <ul class="todo-list"></ul>
    `;
  }

  addTodo(todoItem) {
    this.element.appendChild(todoItem.render());
  }

  removeTodo(todoItem) {
    this.element.removeChild(todoItem.template.element);
  }
}
