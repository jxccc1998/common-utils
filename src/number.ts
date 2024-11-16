import Decimal from 'decimal.js-light';

class Calculator {
  private value: Decimal;

  constructor(initialValue: string | number) {
    this.value = new Decimal(initialValue);
  }

  add(num: string | number): Calculator {
    this.value = this.value.plus(num);
    return this;
  }

  subtract(num: string | number): Calculator {
    this.value = this.value.minus(num);
    return this;
  }

  multiply(num: string | number): Calculator {
    this.value = this.value.times(num);
    return this;
  }

  divide(num: string | number): Calculator {
    const decimalNum = new Decimal(num);
    if (decimalNum.isZero()) {
      throw new Error("Cannot divide by zero");
    }
    this.value = this.value.dividedBy(decimalNum);
    return this;
  }

  result(): number {
    return Number(this.value);
  }

  resultToString() : string {
    return this.value.toString()
  }
}

export default Calculator;