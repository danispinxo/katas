const calculateChange = function(total, cash) {
  let changeAmount = cash - total; 

  let returnChange = {};

  if (changeAmount >= 2000) {
    returnChange.twentyDollar = Math.floor(changeAmount/2000);
    changeAmount -= (returnChange.twentyDollar * 2000);
  }
  if (changeAmount >= 1000) {
    returnChange.tenDollar = Math.floor(changeAmount/1000);
    changeAmount -= (returnChange.tenDollar * 1000);
  }
  if (changeAmount >= 500) {
    returnChange.fiveDollar = Math.floor(changeAmount/500);
    changeAmount -= (returnChange.fiveDollar * 500);
  }
  if (changeAmount >= 200) {
    returnChange.twoDollar = Math.floor(changeAmount/200);
    changeAmount -= (returnChange.twoDollar * 200);
  }
  if (changeAmount >= 100) {
    returnChange.oneDollar = Math.floor(changeAmount/100);
    changeAmount -= (returnChange.oneDollar * 100);
  }
  if (changeAmount >= 25) {
    returnChange.quarter = Math.floor(changeAmount/25);
    changeAmount -= (returnChange.quarter * 25);
  }
  if (changeAmount >= 10) {
    returnChange.dime = Math.floor(changeAmount/10);
    changeAmount -= (returnChange.dime * 10);
  }
  if (changeAmount >= 5) {
    returnChange.nickel = Math.floor(changeAmount/5);
    changeAmount -= (returnChange.nickel * 5);
  }
  if (changeAmount >= 1) {
    returnChange.penny = Math.floor(changeAmount);
    changeAmount -= (returnChange.penny);
  }
  return returnChange;

  // omit any kinds of change you don't need to give back
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));