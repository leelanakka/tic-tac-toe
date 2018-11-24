const readline = require("readline-sync").question;

const startGame = function(){
  console.log(welcomeNote());
  console.log(readPlayerNames());
}
const welcomeNote = function(){
  return "welcome to TIC TAC TOE ";
}
const readPlayerNames  = function() {
  let player1 = readline("Please enter player1 name: ")
  let player2 = readline("Please enter player2 name: ")
  return [player1,player2];
}
module.exports = { 
  welcomeNote,
  readPlayerNames,
  startGame
};
