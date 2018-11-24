const {equal,deepEqual} = require('assert');
const {
  welcomeNote,
  deleteElementByIndex,
  generateBoard,
  createArray
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

describe('generateBoard',()=>{
  let line = new Array(13).fill("-").join("");
  it('should generate empty board',()=>{
    let expectedOutput = line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(generateBoard([[],[]]),expectedOutput);
  });
  it('should generate single element filled board',()=>{
    let expectedOutput = line+"\n"+"| X |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(generateBoard([[1],[]]),expectedOutput);
    expectedOutput = line+"\n"+"| O |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(generateBoard([[],[1]]),expectedOutput);
    expectedOutput = line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   | O |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(generateBoard([[],[6]]),expectedOutput);
    expectedOutput = line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   | X |   |"+"\n"+line
    deepEqual(generateBoard([[8],[]]),expectedOutput);
  });
  it('should generate multi element filled board',()=>{
    let expectedOutput = line+"\n"+"| X | O |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(generateBoard([[1],[2]]),expectedOutput);
    expectedOutput = line+"\n"+"| O |   |   |"+"\n"+line+"\n"+"|   | X |   |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(generateBoard([[5],[1]]),expectedOutput);
    expectedOutput = line+"\n"+"| O | O | O |"+"\n"+line+"\n"+"| X | X | X |"+"\n"+line+"\n"+"|   |   |   |"+"\n"+line
    deepEqual(generateBoard([[4,5,6],[1,2,3]]),expectedOutput);
    expectedOutput = line+"\n"+"| X | X | X |"+"\n"+line+"\n"+"| X | X | X |"+"\n"+line+"\n"+"| X | X | X |"+"\n"+line
    deepEqual(generateBoard([[1,2,3,4,5,6,7,8,9],[]]),expectedOutput);
    expectedOutput = line+"\n"+"| O | O | O |"+"\n"+line+"\n"+"| O | O | O |"+"\n"+line+"\n"+"| O | O | O |"+"\n"+line
    deepEqual(generateBoard([[],[1,2,3,4,5,6,7,8,9]]),expectedOutput);
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

