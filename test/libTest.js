const {equal,deepEqual} = require('assert');
const {
  welcomeNote,
  deleteElementByIndex,
  generateBoard,
  createArray,
  printBoard,
  isSubset,
  isWin
} = require('../src/library.js');

describe('welcome note',function(){
  it('should return welcome note without args',()=>{
    equal(welcomeNote(),"welcome to TIC TAC TOE ");
  });
  it('should return welcome note with args',()=>{
    equal(welcomeNote(2),"welcome to TIC TAC TOE ");
  });
});

describe('deleteElementByIndex',()=>{
  it('should work for empty array',()=>{
    deepEqual(deleteElementByIndex([],2),[]);
  });
  it('should work for single element array',()=>{
    deepEqual(deleteElementByIndex([1],2),[1]);
    deepEqual(deleteElementByIndex([1],0),[]);
  });
  it('should work for more than single element array',()=>{
    deepEqual(deleteElementByIndex([1,2,3,4,5],2),[1,2,4,5]);
    deepEqual(deleteElementByIndex(["sai","deepika","leela","durga","prasanth"],2),["sai","deepika","durga","prasanth"]);
  });
});

describe('printBoard',()=>{
  let line = new Array(13).fill("-").join("");
  it('should generate empty board',()=>{
    deepEqual(printBoard([]),"-");
  });
  it('should generate single element filled board',()=>{
    let expectedOutput = line+"\n"+"| X |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(printBoard([["X"," "," "],[" "," "," "],[" "," "," "]]),expectedOutput);
    expectedOutput = line+"\n"+"| O |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(printBoard([["O"," "," "],[" "," "," "],[" "," "," "]]),expectedOutput);
    expectedOutput = line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   | O |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(printBoard([[" "," "," "],[" "," ","O"],[" "," "," "]]),expectedOutput);
    expectedOutput = line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   | X |   |"+"\n"+line
    deepEqual(printBoard([[" "," "," "],[" "," "," "],[" ","X"," "]]),expectedOutput);
  });
  it('should generate multi element filled board',()=>{
    let expectedOutput = line+"\n"+"| X | O |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(printBoard([["X","O"," "],[" "," "," "],[" "," "," "]]),expectedOutput);
    expectedOutput = line+"\n"+"| O |   |   |"+"\n"+line+"\n"+"|   | X |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(printBoard([["O"," "," "],[" ","X"," "],[" "," "," "]]),expectedOutput);
    expectedOutput = line+"\n"+"| O | O | O |"+"\n"+line+"\n"+"| X | X | X |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(printBoard([["O","O","O"],["X","X","X"],[" "," "," "]]),expectedOutput);
    expectedOutput = line+"\n"+"| X | X | X |"+"\n"+line+"\n"+"| X | X | X |"+"\n"+line+"\n"+"| X | X | X |"+"\n"+line
    deepEqual(printBoard([["X","X","X"],["X","X","X"],["X","X","X"]]),expectedOutput);
    expectedOutput = line+"\n"+"| O | O | O |"+"\n"+line+"\n"+"| O | O | O |"+"\n"+line+"\n"+"| O | O | O |"+"\n"+line
    deepEqual(printBoard([["O","O","O"],["O","O","O"],["O","O","O"]]),expectedOutput);
  });
});

describe("createArray",function(){
  it("should create an empty array",()=>{
    deepEqual(createArray(0),[]);
    deepEqual(createArray(0,1),[]);
  });
  it("should create single element array",()=>{
    deepEqual(createArray(1),[""]);
    deepEqual(createArray(1,1),[1]);
  });
  it("should create multi-element array",()=>{
    deepEqual(createArray(2),["",""]);
    deepEqual(createArray(2,"hello"),["hello","hello"]);
    deepEqual(createArray(3,1),[1,1,1]);
    deepEqual(createArray(6," "),[" "," "," "," "," "," "]);
  });
});

describe('generateBoard',()=>{
  it('should generate empty board',()=>{
    deepEqual(generateBoard([[],[]]),[[" "," "," "],[" "," "," "],[" "," "," "]]);
  });
  it('should generate board with one element',()=>{
    deepEqual(generateBoard([[1],[]]),[["X"," "," "],[" "," "," "],[" "," "," "]]);
    deepEqual(generateBoard([[5],[]]),[[" "," "," "],[" ","X"," "],[" "," "," "]]);
    deepEqual(generateBoard([[],[2]]),[[" ","O"," "],[" "," "," "],[" "," "," "]]);
    deepEqual(generateBoard([[],[9]]),[[" "," "," "],[" "," "," "],[" "," ","O"]]);
  });
  it('should generate board with multiple elements',()=>{
    deepEqual(generateBoard([[1,3],[8,9]]),[["X"," ","X"],[" "," "," "],[" ","O","O"]]);
    deepEqual(generateBoard([[1],[8,9]]),[["X"," "," "],[" "," "," "],[" ","O","O"]]);
    deepEqual(generateBoard([[1,2,3,4],[4,5,6,7,8]]),[["X","X","X"],["O","O","O"],["O","O"," "]]);
  });
});
describe('isSubset',function(){
  it('should work for empty array',()=>{
    deepEqual(isSubset([],[]),true);
    deepEqual(isSubset([],[0]),false);
  });
  it('should work for single element array',()=>{
    deepEqual(isSubset([0],[]),true);
    deepEqual(isSubset([1],[1]),true);
  });
  it('should work for multi element array',()=>{ 
    deepEqual(isSubset([1,2],[2]),true);
    deepEqual(isSubset([1,2,3],[4,5]),false);
    deepEqual(isSubset([1,2],[-1,-2]),false);
    deepEqual(isSubset([1,2,3],[1,2]),true);
  });
});

describe('isWin',()=>{
  it('should work empty array',()=>{
    deepEqual(isWin([]),false);
  });
  it('should work single element array',()=>{
    deepEqual(isWin([1]),false);
    deepEqual(isWin([0]),false);
  });
  it('should work for multi element array',()=>{
    deepEqual(isWin([1,2,3]),true);
    deepEqual(isWin([7,5,3]),true);
    deepEqual(isWin([7,2,5,3]),true);
    deepEqual(isWin([7,2,4,3]),false);
  });
});
