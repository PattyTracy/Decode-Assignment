const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

  describe("substitution", () => {
   it("should maintain spaces throughout", () => {
     let expected = "rocky balboa";
     let actual = substitution("scim* op!ocp", "poiu%lkjh&m!zxcvasdfgqwe*y", false);
     expect(actual).to.eql(expected);
   })
     let expected = "scim* op!ocp";
      let actual = substitution("Rocky Balboa", "poiu%lkjh&m!zxcvasdfgqwe*y", true);
      expect(actual).to.eql(expected);
  })

  it("should ignore capital letters", () => {
    let expected = "pvc!!c is%%u"
    let actual = substitution("Apollo Creed", "poiu%lkjh&m!zxcvasdfgqwe*y", true);
    expect(actual).to.eql(expected);
  })

    it("should include an alphabet parameter that is exactly 26 characters long", () => {
       let expected = false;
       let actual = substitution("Chicken Little", "poiu%lkjh&m!zxcvasdfgqwe");
        expect(actual).to.eql(expected);
      
        expected = false;
        actual = substitution("ijhim%! nhssn%", "poiulkjhmnbzxcvasdfgqw!@#$%&?e", false);
        expect(actual).to.eql(expected);
  })
    it("should contain no duplicate characters in the alphabet parameter", ()=> {
       let expected = false;
       let actual = substitution("Begin the Beguine", "poiu%lkjh&lnb!zxcvasdfgqwe");
      expect(actual).to.eql(expected);
      
        expected = false;
        actual = substitution("o%kh! sj% o%kdh!%", "poiu%lkjh&lnb!zxcvasdfgqwe", false);
        expect(actual).to.eql(expected);
     })
    it("should return false if the substitution alphabet is missing", () => {
      let expected = false;
      let actual = substitution("pizza pizza");
      expect(actual).to.eql(expected);
      
      expected = false;
      actual = substitution("xheep xheep", false);
      expect(actual).to.eql(expected);
    })