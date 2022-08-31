// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const alph = {
      a:"11", b:"21", c:"31", d:"41", e:"51", f:"12", g:"22", h:"32", i:"42",j:"42", k:"52", l:"13", m:"23", n:"33",
      o:"43", p:"53", q:"14", r:"24", s:"34", t:"44", u:"54", v:"15", w:"25", x:"35", y:"45", z:"55"
    };

    const decode = {
      11:"a", 21:"b", 31:"c", 41:"d", 51:"e", 12:"f", 22:"g", 32:"h", 42:"ji", 52:"k", 13:"l", 23:"m", 33:"n",
      43:"o", 53:"p", 14:"q", 24:"r", 34:"s", 44:"t", 54:"u", 15:"v", 25:"w", 35:"x", 45:"y", 55:"z"
    };
  
    let result = ""
    input.split(""); //t,e,s,t
    input.toLowerCase()
    
    if (encode) {
    for (let i = 0; i < input.length; i++){
      //set variable for each character input
      let currentLetter = input[i];
      //if character is a space add it to the result variable
      if (currentLetter === " ") {
        result += currentLetter;
      };
      if (currentLetter in alph) {
        //if the charactter is in alph add the value to result variable
        result += alph[currentLetter];
      }
    }
  }
    
  if (!encode) {
    //set variable for new input without spaces so the length and interation is correct
    let newInput = input.split(" ").join("");
    //check if length of input is odd or even. If odd return false
    if ((newInput.length % 2) != 0 ) {
      return false
    } 
    //interate through input by 2 to get two digit characters
    for (let i = 0; i < newInput.length; i+=2){
      //set variable for each character plus the following
      let currentCharacter = newInput[i];
      let followingCharacter = newInput[i + 1];
      let value = currentCharacter.concat(followingCharacter);
      //if character is a space add it directly to the result
      if (input[i] === " ") {
        result += input[i];
      } 
      if (value in decode) {
        //if value is in decode array, add value to result
        result += decode[value];
      }
    }
  }
return result;
}
return { polybius,
};
}) ()



module.exports = { polybius: polybiusModule.polybius };