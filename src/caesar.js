// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  
if (!shift || shift < -25 || shift > 25) {
    return false;
  }
if (encode) {
    let result = [];
    input = input.toLowerCase();
let message = input.split("");
for (let i = 0; i < message.length; i++) {
    if (message[i].toLowerCase() != message[i].toUpperCase() ? message[i] = message[i].charCodeAt(message[i]) + shift : message[i] = message[i]);
    result.push(message[i]);
  } 
  for (i = 0; i < result.length; i++) {
      if (result[i] <= 96 && result[i] > 10 ? result[i] = result[i] + 26 : result[i] = result[i]);
      if (result[i] > 122 ? result[i] = result[i] - 26 : result[i] = result[i]); 
    }
  let encoded = [];
  for (i = 0; i < result.length; i++) {
      if (result[i] > 10 ? result[i] = String.fromCharCode(result[i]) : result[i] = result[i]);
      encoded.push(result[i]);
  }
  return(encoded.join(''));
  
  } else {
    let decodeShift = shift * -1;
    let result = [];
    input = input.toLowerCase();
let message = input.split(""); 
for (let i = 0; i < message.length; i++) {
    if (message[i].toLowerCase() != message[i].toUpperCase()) {
        message[i] = message[i].charCodeAt(message[i]) + decodeShift;
    }
result.push(message[i])
}
  for (i = 0; i < message.length; i++) {
      if (result[i] < 97 && result[i] > 10 ? result[i] = result[i] + 26 : result[i] = result[i]);
      if (result[i] > 122 ? result[i] = result[i] - 26 : result[i] = result[i]); 
    }
  let decoded = [];
  for (i = 0; i < result.length; i++) {
      if (result[i] > 10 ? result[i] = String.fromCharCode(result[i]) : result[i] = result[i]);
      decoded.push(result[i]);
  }
      return decoded.join('')
  }  
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
