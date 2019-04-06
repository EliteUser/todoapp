import AppTemplate from './app.template';
import TodoModule from './components/todo/todo.module';

export default class AppComponent {
  constructor() {
    this.template = new AppTemplate();
    this.appElement = document.querySelector('#app');
    this.todoModule = new TodoModule();
  }

  init() {
    this.render();
  }

  render() {
    this.appElement.appendChild(this.template.element);
    this.todoModule.init();
  }
}
