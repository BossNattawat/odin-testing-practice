const {caesarCipher} = require("../code/caesarCipher")

test('caesarCipher Apple -> Fuuqj', () => {
    expect(caesarCipher("Apple", 5)).toBe("Fuuqj")
})

test('caesarCipher Boss -> Lycc', () => {
    expect(caesarCipher("Boss", 10)).toBe("Lycc")
})
