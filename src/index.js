class SmartCalculator {
  constructor(initialValue) {
    this.result = initialValue.toString();
  }

  valueOf() {
    return eval(this.result);
  }

  add(number) {
    this.result += '+' + number.toString();
    return this
  }

  subtract(number) {
    this.result += '-' + number.toString();
    return this
  }

  multiply(number) {
    this.result += '*' + number.toString();
    return this
  }

  devide(number) {
    this.result += '/' + number.toString();
    return this
  }

  pow(number) {
    this.result += '**' + number.toString();
    return this
  }
}

module.exports = SmartCalculator;
