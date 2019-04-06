export default class TodoListModel {
  constructor() {
    this.todoItems = [];
  }

  addTodo(item) {
    this.todoItems.push(item);
  }

  removeTodo(item) {
    this.todoItems.splice(this.todoItems.indexOf(item), 1);
  }
}
