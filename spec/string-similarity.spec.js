var { expect } = require("chai");
var { getStringSimilarity } = require("../dist/string-similarity")

describe("getStringSimilarity", () => {
	
	it("Should return 1 for exact strings", () => {
		expect(getStringSimilarity("String", "String")).to.equal(1)
	})

	it("Should return 0 if either string is empty", () => {
		expect(getStringSimilarity("String", "")).to.equal(0)
		expect(getStringSimilarity("", "String")).to.equal(0)
		expect(getStringSimilarity("", "")).to.equal(0)
	})

	it("Should be case insensitive by default", () => {
		expect(getStringSimilarity("TEST", "test")).to.equal(1)
	})

	it("Should be case sensitive if needed", () => {
		expect(getStringSimilarity("TEST", "test", undefined, true)).to.equal(0)
	})

	it("Should return strong match for rearranged words", () => {
		expect(getStringSimilarity("Lorem ipsum dolor", "Dolor lorem ipsum")).to.be.above(0.75);
	})

	it("Should return strong match for misspellings", () => {
		expect(getStringSimilarity("Lorem ipsum dolor", "Lorem ipsum dlr")).to.be.above(0.75);
	})
})
//getStringSimilarity("Lorem ipsum", "Ipsum lorem")