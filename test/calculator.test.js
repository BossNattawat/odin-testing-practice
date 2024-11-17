const calculator = require("../code/calculator")

test('calculate 5 + 7 -> 12', () => {
    expect(calculator.add(5,7)).toBe(12)
})

test('calculate 7 - 5 -> 2', () => {
    expect(calculator.subtract(7,5)).toBe(2)
})

test('calculate 20 / 4 -> 5', () => {
    expect(calculator.divide(20, 4)).toBe(5)
})

test('calculate 5 * 7 -> 35', () => {
    expect(calculator.multiply(5,7)).toBe(35)
})
