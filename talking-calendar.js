const talkingCalendar = function(date) {
  let year = date[0] + date[1] + date[2] + date [3];
  let month = date[5] + date[6];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let inputDay = parseInt(date[8] + date[9]);
  let returnDay;

  if (inputDay == 01 || inputDay == 21 || inputDay === 31) {
    returnDay = inputDay + 'st';
  } else if (inputDay == 02 || inputDay === 22) {
    returnDay = inputDay + 'nd';
  } else if (inputDay == 03 || inputDay == 23) {
    returnDay = inputDay + 'rd';
  } else {
    returnDay = inputDay + 'th';
  }

  return months[month - 1] + ' ' + returnDay + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));