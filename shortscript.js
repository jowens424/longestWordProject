function shortestWord(text, bool) {
  let wordArray = text.split(' ')
  let result = ''
  let maxLength = 0
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < maxLength || maxLength === 0) {
      maxLength = wordArray[i].length
      result = wordArray[i];
    }
  }

  if(bool){
   result = result.length
  }
  return result;
}


$(function() {
  module("Shortest Word");
  test("shortestWord()", t => {
    t.equal(shortestWord('wind and willows', false), "and", "wind and willow test");
  });
  
    test("shortestWord()", t => {
    t.equal(shortestWord('cats in the cradle', false), "in", "cats in the cradle test");
  });

  test("shortestWordLength()", t => {
    t.equal(shortestWord('example two', true), 3, " length test");
  });
  
   test("shortestWordLength()", t => {
    t.equal(shortestWord('Paul Simon', true), 4, " length test");
  });


  QUnit.done = function(stats) {
    console.log('QUnit Done: ' + stats.total + ' tests run, ' + stats.passed + ' tests passed, ' + stats.failed + ' tests failed');
  };
}); // ready
