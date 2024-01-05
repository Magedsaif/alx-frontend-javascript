export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getters
  get code() {
    return (this._code = code);
  }

  get name() {
    return (this._name = name);
  }

  // setters
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  set name(name) {
    this._name = name;
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // instance methods
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
