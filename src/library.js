const read = require("readline-sync").question;

const startGame = function() {
  console.log(welcomeNote());
  let players = readPlayerNames();
  turnChanger(players); 
}
const deleteElementByIndex = function(list,index) {
  return list.slice(0,index).concat(list.slice(index+1));
}

const welcomeNote = function() {
  return "welcome to TIC TAC TOE ";
}

const createArray = function(size,text="") {
  return new Array(size).fill(text)
}

const readPlayerNames  = function()  {
  let player1 = read("Please enter player1 name: ")
  let player2 = read("Please enter player2 name: ")
  return [player1,player2];
}

const isSubset = function (set1,set2)  {
  return set2.every(function (element)  {
    return set1.includes(element);
  })
};

const isWin = function(moves) {
  let winChances = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  return winChances.some(function(list) {
    return isSubset(moves,list);
  });
}

const printBoard = function(board) {
  let line = createArray(board.length*4+1,"-").join("");
  let prBoard = "";
  for(let i of board) {
    prBoard += line + "\n|" + i.map((x) => " "+x+" |").join("")+"\n";
  }
  return prBoard+line;
}

const generateBoard = function(moves) {
  let board = createArray(9," ");
  let turn = ["X","O"];
  for(let index = 0; index < 2  ; index++) {
    for(let position = 0; position < moves[index].length; position++) {
      board[moves[index][position]-1] = turn[index];
    }
  }
  return [board.slice(0,3),board.slice(3,6),board.slice(6,9)]
}

const turnChanger  = function(players) {
  let moves=[[],[]];
  let inputs = [1,2,3,4,5,6,7,8,9]
  let board;
  console.log(printBoard(generateBoard(moves)));
  for(let index=0;index<9;index++) {
    let msg = "please enter "+players[index%2]+" turn : "; 
    let move = read(msg);
    if(!inputs.includes(+move)) {
      console.log("invalid input give input in this :",inputs);
      index--;
    } else {
      moves[index%2].push(+move);
      inputs = deleteElementByIndex(inputs,inputs.indexOf(+move));
      board = (generateBoard(moves));
      console.log(printBoard(board));
      if(isWin(moves[index%2])) {
        console.log("won the match");
        return moves;
      };
    }
  };
  console.log("draw");
  return moves;
}

module.exports =  { 
  welcomeNote,
  readPlayerNames,
  startGame,
  deleteElementByIndex,
  generateBoard,
  createArray,
  printBoard,
  isSubset,
  isWin
};
