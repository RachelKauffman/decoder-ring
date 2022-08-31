// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let input = "zebra magazine";
  let shift = 3;
  caesar(input, shift)

  function caesar(input, shift, encode = true) {
    if(shift === 0 || shift > 25 || shift < -25 || !shift){
      return false;
    }
    
    if (encode === false) {
       shift = shift * -1;
    }

    const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let result = "";
    let newInput = input.toLowerCase();
    let newIndex;
  
   for (let i = 0; i < newInput.length; i++){
    let currentLetter = newInput[i];
    if (!alph.includes(currentLetter)) {
      result += currentLetter;
      continue;
    }

    let letterIndex = alph.indexOf(currentLetter);
    newIndex = letterIndex + shift;
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    } 
    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }
    result += alph[newIndex];
   }
   return result;
  }
    return {
    caesar,
  };
})
();

module.exports = { caesar: caesarModule.caesar };
