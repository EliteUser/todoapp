import TodoAddModel from './todo-add.model';
import TodoAddTemplate from './todo-add.template';

export default class TodoAddComponent {
  constructor() {
    this.model = new TodoAddModel();
    this.template = new TodoAddTemplate(this.model);

    this.bind();
  }

  render() {
    return this.template.element;
  }

  isInputValid() {
    return !(this.model.name === '' || this.model.name == null);
  }

  bind() {
    const todoInput = this.template.element.querySelector('.todo-add__input');
    const addButton = this.template.element.querySelector('.todo-add__button');

    todoInput.addEventListener('input', event => {
      this.model.name = event.target.value;
    });

    addButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (this.isInputValid()) {
        const id = Date.now();
        const name = this.model.name;

        this.model.name = '';
        todoInput.value = '';

        this.onAddBtnClick(id, name);
      }
    });
  }

  onAddBtnClick() {
  }
}
