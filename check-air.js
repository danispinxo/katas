const checkAir = function (samples, threshold) {
  let counter = 0;
  let pollutionPercent;

  //for loop that has a counter that counts number of dirty
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      counter += 1;
    }
  } 
  pollutionPercent = counter / samples.length;

  if (pollutionPercent > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))