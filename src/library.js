const read = require("readline-sync").question;

const startGame = function(){
  console.log(welcomeNote());
  let players = readPlayerNames();
  console.log(turnChanger(players)); 
}
const welcomeNote = function(){
  return "welcome to TIC TAC TOE ";
}

const readPlayerNames  = function() {
  let player1 = read("Please enter player1 name: ")
  let player2 = read("Please enter player2 name: ")
  return [player1,player2];
}

const turnChanger  = function(players){
  let moves=[[],[]];
  inputs = [1,2,3,4,5,6,7,8,9]
  for(let index=0;index<9;index++){
    let msg = "please enter "+players[index%2]+" turn : "; 
    let move = read(msg);
    if(!inputs.includes(+move)){
      console.log("invalid input give input in this :",inputs);
      index--;
    }else{
      moves[index%2].push(move);
    }
  };
  return moves;
}

module.exports = { 
  welcomeNote,
  readPlayerNames,
  startGame
};
