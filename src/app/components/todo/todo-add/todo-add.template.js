import AbstractTemplate from '../../abstract/abstract.template';
import './todo-add.scss';

export default class TodoAddTemplate extends AbstractTemplate {
  get template() {
    return `
      <div class="todo-add">
        <form class="todo-add__form" action="#">
          <div class="todo-add__wrapper">
            <label class="todo-add__label" for="todo-add">Type your task here</label>
            <input class="todo-add__input" type="text" id="todo-add" placeholder="Buy food">
          </div>
          <button class="todo-add__button button button--add" type="submit">Add Todo</button>
        </form>
      </div>
    `;
  }
}
