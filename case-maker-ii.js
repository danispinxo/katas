const makeCase = function(input, theCase) {
  let encodedString = "";

  if (theCase === "camel" || theCase[1] === "camel") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        i++;
        encodedString += input[i].toUpperCase();
      } else {
        encodedString += input[i];
      } 
    }

  } else if (theCase === "pascal" || theCase[1] === "pascal") {
    encodedString += input[0].toUpperCase();

    for (let i = 1; i < input.length; i++) {
      if (input[i] === " ") {
        i++;
        encodedString += input[i].toUpperCase();
      } else {
        encodedString += input[i];
      } 
    };

  } else if (theCase === "snake" || theCase[1] === "snake") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        encodedString += "_";
      } else {
        encodedString += input[i];
      } 
    };

  } else if (theCase === "kebab" || theCase[1] === "kebab") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        encodedString += "-";
      } else {
        encodedString += input[i];
      } 
    };

  } else if (theCase === "title" || theCase[1] === "title") {
    encodedString += input[0].toUpperCase();

    for (let i = 1; i < input.length; i++) {
      if (input[i] === " ") {
        i++;
        encodedString += " " + input[i].toUpperCase();
      } else {
        encodedString += input[i];
      } 
    };

  } else if (theCase === "vowel" || theCase[1] === "vowel") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
        encodedString += input[i].toUpperCase();
      } else {
        encodedString += input[i];
      } 
    };

  } else if (theCase === "consonant" || theCase[1] === "consonant") {
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
        encodedString += input[i].toUpperCase();
      } else {
        encodedString += input[i];
      } 
    };
  }

  if (theCase[0] === "upper") {
    casedString = encodedString.toLocaleUpperCase();
    return casedString;
  } else if (theCase[0] === "lower") {
    casedString = encodedString.toLowerCase();
    return casedString;
  } else {
    return encodedString;
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));