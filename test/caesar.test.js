const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar submission tests written by Thinkful", () => {
    describe("error handling",() => {
        it("should return false if the shift value is equal to 0", () => {
            const input = "zebra magazine";
            const shift = 0;
            const actual = caesar(input, shift);
            const expected = false
         expect(actual).to.eql(expected);
    });
        it("should return false if the shift value is less than -25",() => {
            const input = "zebra magazine";
            const shift = -30;
            const actual = caesar(input, shift);
            const expected = false;
         expect(actual).to.eql(expected);
    });
        it("should return false if the shift value is greater than 25",() => {
            const input = "zebra magazine";
            const shift = 30
            const actual = caesar(input, shift);
            const expected = false;
        expect(actual).to.eql(expected);
    });
    it("should return false if no shift calue is given", () => {
        const input = "message"
        const shift = ""
        const actual = caesar(input, shift);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    });

describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
        const input = "message";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = 'phvvdjh';
        expect(actual).to.eql(expected);
    });
    it ("should leave spaces and other symbols as is", () => {
        const input = "a message.";
        const shift = 3;
        const actual = caesar(input, shift);
        const expected = "d phvvdjh.";
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const input = "Have a great day";
        const shift = 1;
        const actual = caesar(input, shift);
        const expected = "ibwf b hsfbu ebz"
        expect(actual).to.eql(expected);
    });
    it("should handle letters at the end of the alphabet", () => {
        const input = "zebra magazine";
        const shift = 2
        const actual = caesar(input, shift);
        const expected = "bgdtc ocicbkpg";
        expect(actual).to.eql(expected);
    });
    it("should allow for a negative shift that will shift to the left", () =>{
        const input = "message";
        const shift = -3;
        const actual = caesar(input, shift);
        const expected = "jbppxdb";
        expect(actual).to.eql(expected);
    });
});
describe("decoding a message", () => {
    it("should decode a message by shifting letters", () => {
        const input = "gymmuay";
        const shift = 6;
        const encode = false;
        const actual = caesar(input, shift);
        const expected = "message";
        expect(actual).to.equal(expected);
    });
});
});
