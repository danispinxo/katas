const generateBoard = function(player1, player2) {
  let board = [];
  let newLines = [];

  for (let i = 0; i < 8; i++) {
    newLines = [];
    for (let j = 0; j < 8; j++) {
      if ((player1[0] === i && player1[1] === j) || (player2[0] === i && player2[1] === j)) {
        newLines.push(1);
      } else {
        newLines.push(0);
      }
    }
    board.push(newLines);
  }
  return board
}
const queenThreat = function(board) {

  let threatLevel = false;

  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    threatLevel = true;
  } else if (whiteQueen[0] === blackQueen[1] && blackQueen[0] === whiteQueen[1]) {
    threatLevel = true; 
  }

  return threatLevel;
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));