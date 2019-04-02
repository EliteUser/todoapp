import AbstractTemplate from '../../abstract/abstract.template';

export default class TodoAddTemplate extends AbstractTemplate {
  get template() {
    return `
      <section class="todo-add">
        <form class="todo-add__form" action="#">
          <input class="todo-add__input" type="text">
          <button class="todo-add__button button button--add" type="submit">Add Todo</button>
        </form>
      </section>
    `;
  }
}
