const {reverseString} = require("../code/reverseString")

test('reverseString Hello -> olleH', () => {
    expect(reverseString("Hello")).toBe("olleH")
})

test('reverseString Boss Nattawat -> tawattaN ssoB', () => {
    expect(reverseString("Boss Nattawat")).toBe("tawattaN ssoB")
})