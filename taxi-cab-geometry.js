const blocksAway = function(directions) {
  let cabLocation = {};
  let eastValue = 0;
  let northValue = 0;

  if (directions[0] === "right") {
    eastValue += directions[1];
  } else if (directions[0] === "left") {
    northValue += directions [1];
  }

  if (directions[0] === "right" && directions[2] === "left") {
    northValue += directions[3];
  } else if (directions[0] === "left" && directions[2] === "right") {
    eastValue += directions[3];
  }
 
  for (let i = 4; i < directions.length; i ++) {
    if (directions[i - 2] === "left" && directions[i] === "left") {
      eastValue -= directions[i + 1];
      i++;
    } else if (directions [i - 4] === "right" && directions[i - 2] === "right" && directions[i] === "right") {
      eastValue -= directions[i + 1];
      i++;
    }else if (directions[i - 2] === "right" && directions[i] === "left") {
      northValue += directions[i + 1];
      i++;
    } else if (directions[i - 2] === "right" && directions[i] === "left") {
      northValue -= directions[i + 1];
      i++;
    } else if (directions[i - 2] === "left" && directions[i] === "right") {
      eastValue += directions[i + 1];
      i++;
    } else if (directions[i - 2] === "right" && directions[i] === "right") {
      northValue -= directions[i + 1];
      i++;
    }
  }

  cabLocation.east = eastValue;
  cabLocation.north = northValue;
  
  return cabLocation;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));