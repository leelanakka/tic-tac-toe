const read = require("readline-sync").question;

const startGame = function(){
  console.log(welcomeNote());
  let players = readPlayerNames();
  console.log(turnChanger(players)); 
}
const welcomeNote = function(){
  return "welcome to TIC TAC TOE ";
}

const readline  = function(msg) {
  return read(msg);
}

const readPlayerNames  = function() {
  let player1 = read("Please enter player1 name: ")
  let player2 = read("Please enter player2 name: ")
  return [player1,player2];
}

const turnChanger  = function(players){
  let moves=[[],[]];
  for(let index=0;index<9;index++){
    let msg = "please enter "+players[index%2]+" turn : "; 
    moves[index%2].push(read(msg));
  };
  return moves;
}

module.exports = { 
  welcomeNote,
  readPlayerNames,
  startGame
};
