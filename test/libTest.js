const {equal,deepEqual} = require('assert');
const {
  welcomeNote
} = require('../src/library.js');

describe('welcome note',function(){
  it('should return welcome note without args',()=>{
    equal(welcomeNote(),"welcome to TIC TAC TOE ");
  });
  it('should return welcome note with args',()=>{
    equal(welcomeNote(2),"welcome to TIC TAC TOE ");
  });
});
  
