const {equal,deepEqual} = require('assert');
const {
  welcomeNote,
  deleteElementByIndex
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
