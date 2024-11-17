const { capitalize } = require("../code/capitalize")

test('capitalize boss -> Boss', () => {
    expect(capitalize("boss")).toBe("Boss")
})
