/*global require describe it*/
var { expect } = require("chai");
var { stringSimilarity } = require("../dist/string-similarity");

describe("stringSimilarity", () => {
	
	it("Should return 1 for exact strings", () => {
		expect(stringSimilarity("String", "String")).to.equal(1);
		expect(stringSimilarity("So", "So", 2)).to.equal(1);
	});

	it("Should return 0 if strings are exact but substring length is larger", () => {
		expect(stringSimilarity("So", "So", 3)).to.equal(0);
	});

	it("Should return 0 if either string is empty", () => {
		expect(stringSimilarity("String", "")).to.equal(0);
		expect(stringSimilarity("", "String")).to.equal(0);
		expect(stringSimilarity("", "")).to.equal(0);
	});

	it("Should be case insensitive by default", () => {
		expect(stringSimilarity("TEST", "test")).to.equal(1);
	});

	it("Should be case sensitive if set", () => {
		expect(stringSimilarity("TEST", "test", undefined, true)).to.equal(0);
	});

	it("Should return strong match for rearranged words", () => {
		expect(stringSimilarity("Lorem ipsum dolor", "Dolor lorem ipsum")).to.be.above(0.75);
	});

	it("Should return strong match for misspellings", () => {
		expect(stringSimilarity("Lorem ipsum dolor", "Lorem ipsum dlr")).to.be.above(0.75);
	});
});