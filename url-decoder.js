const urlDecode = function(text) {
  let decodedURL = {};
  
  //go through the string and replaces the %20 with spaces, and stores that into a new variable
  let spacedString = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "%") {
      i++;
      i++;
      spacedString += ' ';
    } else {
      spacedString += text[i];
    }
  }

//separate the string at the & stories these items in an array  
  let propertyArray = spacedString.split("&")

  //separate these items in arrays at the =
  let newArray = [];

  for (let j = 0; j < propertyArray.length; j++) {
    let item = propertyArray[j].split("=");
    newArray.push(item);
  }
  //take the part to the left of the = and makes that a property of decodedURL, then the function takes the part to the right of the = and makes that the value of that property
  
  let propertyNames = [];
  let propertyValues = [];

  for (let k = 0; k < newArray.length; k++){
    let propertyName = newArray[k][0];
    propertyNames.push(propertyName);
  }
  for (let l = 0; l < newArray.length; l++){
    let propertyValue = newArray[l][1];
    propertyValues.push(propertyValue);
  }

  for (let m = 0; m < propertyNames.length; m++) {
    decodedURL[propertyNames[m]] = propertyValues[m];
  }

  return decodedURL;

}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);