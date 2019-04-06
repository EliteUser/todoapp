import TodoAddComponent from './todo-add/todo-add.component';
import TodoListComponent from './todo-list/todo-list.component';
import TodoItemComponent from './todo-item/todo-item.component';

export default class TodoModule {
  constructor() {
    this.listComponent = new TodoListComponent();
    this.addComponent = new TodoAddComponent();

    this.addComponent.onAddBtnClick = (id, name) => {
      const todoItem = new TodoItemComponent(id, name);

      todoItem.onDeleteBtnClick = () => {
        this.listComponent.removeTodo(todoItem);
      };

      this.listComponent.addTodo(todoItem);
      this.render();
    };
  }

  init() {
    this.render();
  }

  render() {
    const appElement = document.querySelector('.app');

    appElement.appendChild(this.addComponent.render());
    appElement.appendChild(this.listComponent.render());
  }
}
