const squareCode = function(message) {

  let noSpaces = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      noSpaces += "";
    } else {
      noSpaces += message[i];
    } 
  }

  let result = Math.ceil(Math.sqrt(noSpaces.length));
  let secretCode = "";

  for (let i = 0; i < result; i++) {
    for (let j = i; j < noSpaces.length; j += result) {
      secretCode += noSpaces[j];
    }
    secretCode += " ";
  }
  return secretCode;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
