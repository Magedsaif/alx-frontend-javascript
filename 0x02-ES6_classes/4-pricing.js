import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // getter
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // setters
  set amount(newAmount) {
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    }
  }

  // instance method
  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new Error('Conversion Rate must be a number');
    }
    return amount * conversionRate;
  }
}
