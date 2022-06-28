const multiplicationTable = function(maxValue) {
  let result = 0 ;
  let table = "";
  
  for (let i = 1 ; i <= maxValue ; i++){
      for (let x = 1 ; x <= maxValue ; x++){
        result = i * x;
        table += result + ' ';
      }
    table = table + "\n";
  }
  return table  
  };

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));