const {caesar} = require("../src/caesar.js");
const expect = require("chai").expect;

  describe("caesar", () => {
    it("should return false if shift value is = 0, < 25, > 25, or absent", () => { 
        let expected = false;
        let actual = caesar("chicken");
        expect(actual).to.eql(expected);
    
         expected = false;
         actual = caesar("chicken", 0);
        expect(actual).to.eql(expected);

         expected = false;
         actual = caesar("chicken", -50);
        expect(actual).to.eql(expected);
    
         expected = false;
         actual = caesar("chicken", 30);
        expect(actual).to.eql(expected);
    })
    it("should ignore capital letters", () => {
        let expected = "kykzm jmtcq s";
        let actual = caesar("Mambo Loves U", -2);
        expect(actual).to.eql(expected);
      
        expected = "ocodq nqxgu w";
        actual = caesar("Mambo Loves U", 24, false);
        expect(actual).to.eql(expected);
      })
    it("should handle shifts that go past the end of the alphabet by wrapping", () => {
        let expected = "ftq laa ue qjfdm";
        let actual = caesar("the zoo is extra", 12);
        expect(actual).to.eql(expected);
      
        expected = "gur mbb vf rkgen";
        actual = caesar("the zoo is extra", 13, false);
        expect(actual).to.eql(expected);
    })
    it("should maintain spaces and other nonalphabetic symbols in the message before and after encoding or decoding", () => {
        let expected = "jbcfuxyfjbcu zlyyxig!";
        let actual = caesar("Philadelphia Freedom!", 20);
        expect(actual).to.eql(expected);

        expected = "jbcfuxyfjbcu zlyyxig!";
        actual = caesar("Philadelphia Freedom!", -20, false);
        expect(actual).to.eql(expected);
    })
})// Write your tests here!
