// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    let message = input.toLowerCase();
    let result = "";
    if (encode) {
      for (let i = 0; i < message.length; i++) {
        let character = message[i];
        if (character == " ") {
          result += character;
          continue;
        }
        for (let letter of standardAlphabet) {
          if (character == letter) {
            let codeIndex = standardAlphabet.indexOf(character);
            result += alphabet.charAt(codeIndex);
          }
        }
      }
      return result;
    } else {
      for (let i = 0; i < message.length; i++) {
        let character = message[i];
        if (character == " ") {
          result += character;
          continue;
        }
        for (let letter of alphabet) {
          if (character == letter) {
            let codeIndex = alphabet.indexOf(character);
            result += standardAlphabet.charAt(codeIndex);
          }
        }
      }
      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
