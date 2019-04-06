import AbstractTemplate from '../../abstract/abstract.template';
import './todo-list.scss';

export default class TodoListTemplate extends AbstractTemplate {
  constructor() {
    super();
  }

  get template() {
    return `
      <div class="todo-list">
        <ul class="todo-list__list"></ul>
      </div>
    `;
  }

  addTodo(todoItem) {
    this.element.appendChild(todoItem.render());
  }

  removeTodo(todoItem) {
    this.element.removeChild(todoItem.template.element);
  }
}
