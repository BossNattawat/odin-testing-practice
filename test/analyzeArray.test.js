const {analyzeArray} = require("../code/analyzeArray")

test('analyzeArray [1,8,3,4,2,6] => { average: 4, min: 1, max: 8, length: 6 }', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 })
})

test('analyzeArray Hello World! => Input must be array', () => {
    expect(analyzeArray("Hello World!")).toBe("Input must be array")
})

test('analyzeArray ["Hello", 2, 3, 5, 8, 9] => All elements in the array must be numbers"', () => {
    expect(analyzeArray(["Hello", 2, 3, 5, 8, 9])).toBe("All elements in the array must be numbers")
})