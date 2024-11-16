import Calculator from '@/number';

describe('Calculator', () => {

  test('result number type correctly', () => {
    const result = new Calculator(0.1).add(0.2).result();
    expect(typeof result).toBe('number');
  });

  test('should add float numbers correctly', () => {
    const result = new Calculator(0.1).add(0.2).result();
    expect(result).toBe(0.3);
  });

  test('should subtract numbers correctly', () => {
    const result = new Calculator(0.3).subtract(0.1).result();
    expect(result).toBe(0.2);
  });

  test('should multiply numbers correctly', () => {
    const result = new Calculator(0.1).multiply(0.2).result();
    expect(result).toBe(0.02);
  });

  test('should divide numbers correctly', () => {
    const result = new Calculator(0.1).divide(0.2).result();
    expect(result).toBe(0.5);
  });

  test('should handle large numbers', () => {
    const result = new Calculator('2000000000000000000000000000000').add('2000000000000000000000000000000').result();
    expect(result).toBe(4000000000000000000000000000000);
  });

  test('should throw error when dividing by zero', () => {
    const calculator = new Calculator(1);
    expect(() => calculator.divide(0)).toThrow('Cannot divide by zero');
  });

  test('should chain operations', () => {
    const result = new Calculator(1)
      .add(2)
      .subtract(1)
      .multiply(3)
      .divide(2)
      .resultToString();
    expect(result).toBe('3');
  });
});