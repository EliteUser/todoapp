import TodoListModel from './todo-list.model';
import TodoListTemplate from './todo-list.template';

export default class TodoListComponent {
  constructor() {
    this.model = new TodoListModel();
    this.template = new TodoListTemplate(this.model);
  }

  render() {
    return this.template.element;
  }

  addTodo(todoItem) {
    this.model.addTodo(todoItem);
    this.template.addTodo(todoItem);
  }

  removeTodo(todoItem) {
    this.model.removeTodo(todoItem);
    this.template.removeTodo(todoItem);
  }
}
