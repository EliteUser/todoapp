export default class TodoAddModel {
  constructor() {
    this._name = '';
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
}
