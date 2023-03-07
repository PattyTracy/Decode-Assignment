// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
const polybiusSquare = {
  1: {1:'a', 2:'b', 3:'c',4:'d', 5:'e'},
  2: {1:'f', 2:'g', 3:'h', 4:'i/j', 5: 'k'},
  3: {1:'l', 2:'m', 3:'n', 4:'o', 5:'p'},
  4: {1:'q', 2:'r', 3:'s', 4:'t', 5:'u'},
  5: {1:'v', 2:'w', 3:'x', 4:'y', 5:'z'},
}
  function polybiusEncode(message) {
    let encoded = [];
    let lower = message.toLowerCase();
    let lowerLetters = lower.split("");
    lowerLetters.forEach((char) => {
      if (char === " ") {
        encoded.push(char);
      } else {
        for (let i = 1; i < 6; i++) {
          for (let j = 1; j < 6; j++) {
            if (polybiusSquare[i][j].includes(char)) {
              encoded.push(j,i);
            }
          }
          
        }
      }
    })
       return encoded.join('');
}
function polybiusDecode(message) {
  
  const polySquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"]
    ];
  
      let decoded = "";
   
      for (let i = 0; i < message.length; i = i + 2) {       
        if (message[i] === " ") {        
          decoded = decoded + " ";
          i = i - 1;
          continue;
        }  
        if (!message[i + 1]) return false;
        decoded = decoded + polySquare[message[i + 1] - 1][message[i] - 1];
}
      return decoded;
}
  
  function polybius(input, encode = true) {
    if (encode) {
      return polybiusEncode(input);
    } else {
      return polybiusDecode(input);
    }
  }

  return {
    polybius,
  }; 
})();

module.exports = { polybius: polybiusModule.polybius };
