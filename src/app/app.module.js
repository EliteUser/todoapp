import AppComponent from './app.component';

class App {
  constructor() {
    this.component = new AppComponent();
  }

  init() {
    this.initComponents();
    this.initServiceWorker();
  }

  initComponents() {
    this.component.init();
  }

  initServiceWorker() {
    if (!navigator.serviceWorker) {
      return;
    }

    navigator.serviceWorker
      .register('./js/sw.js')
      .then(() => {
        window.console.log('sw registered successfully!');
      })
      .catch((error) => {
        window.console.log('Some error while registering sw: ', error);
      });
  }
}

export default new App();
