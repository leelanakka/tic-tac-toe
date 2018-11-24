const read = require("readline-sync").question;

const startGame = function(){
  console.log(welcomeNote());
  let players = readPlayerNames();
  console.log(turnChanger(players)); 
}
const deleteElementByIndex = function(list,index){
  return list.slice(0,index).concat(list.slice(index+1));
}

const welcomeNote = function(){
  return "welcome to TIC TAC TOE ";
}

const readPlayerNames  = function() {
  let player1 = read("Please enter player1 name: ")
  let player2 = read("Please enter player2 name: ")
  return [player1,player2];
}

const generateBoard = function(moves){
  let list = new Array(9).fill(" ");
  let turn = ["X","O"];
  for(let index = 0; index < 2  ; index++){
   for(let position = 0; position < moves[index].length; position++){
     list[moves[index][position]-1] = turn[index];
   }
  }
  let line = new Array(13).fill("-").join("");
  let board = line + "\n";
  board += "| "+list[0]+" | "+list[1]+" | "+list[2]+" |\n"+line+"\n";
  board += "| "+list[3]+" | "+list[4]+" | "+list[5]+" |\n"+line+"\n";
  board += "| "+list[6]+" | "+list[7]+" | "+list[8]+" |\n"+line;
  return board;
}

const turnChanger  = function(players){
  let moves=[[],[]];
  let inputs = [1,2,3,4,5,6,7,8,9]
  for(let index=0;index<9;index++){
    let msg = "please enter "+players[index%2]+" turn : "; 
    let move = read(msg);
    if(!inputs.includes(+move)){
      console.log("invalid input give input in this :",inputs);
      index--;
    }else{
      moves[index%2].push(+move);
      inputs = deleteElementByIndex(inputs,inputs.indexOf(+move));
      console.log(generateBoard(moves));
    }
  };
  return moves;
}

module.exports = { 
  welcomeNote,
  readPlayerNames,
  startGame,
  deleteElementByIndex,
  generateBoard
};
