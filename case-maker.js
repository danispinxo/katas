const camelCase = function(input) {
  let encodedString = "";
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      i++;
      encodedString += input[i].toUpperCase();
    } else {
      encodedString += input[i];
    } 
  }
  return encodedString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));