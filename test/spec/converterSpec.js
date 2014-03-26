describe("My Calculator", function() {
    it("add numbers", function() {
        expect(calc.add(5,6)).toBe(11);
    })

it("multiply numbers", function () {
    expect(calc.multiply(6, 6)).toBe(36);
})
it("divide numbers", function () {
    expect(calc.divide(8, 2)).toBe(4);
})
it("subtract numbers", function () {
    expect(calc.subtract(10, 2)).toBe(8);
})

it("should be able to deal with strings", function () {
    expect(function() {calc.multiply("word")}).toThrow(new Error("Not a number"))
})
})