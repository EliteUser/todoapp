import TodoItemModel from '../todo-item/todo-item.model';
import TodoItemTemplate from '../todo-item/todo-item.template';

export default class TodoItemComponent {
  constructor(id, name) {
    this.model = new TodoItemModel(id, name);
    this.template = new TodoItemTemplate(this.model);
  }

  render() {
    this.bind();
    return this.template.element;
  }

  bind() {
    const deleteButton = this.template.element.querySelector('.todo-item__button');

    deleteButton.addEventListener('click', () => {
      this.onDeleteBtnClick();
    });
  }

  onDeleteBtnClick() {
  }
}
