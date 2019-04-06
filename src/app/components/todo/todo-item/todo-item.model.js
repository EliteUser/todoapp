export default class TodoItemModel {
  constructor(id, name) {
    this.id = id;
    this._name = name;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
}
