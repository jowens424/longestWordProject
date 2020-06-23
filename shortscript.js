function shortestWord(text) {
  let wordArray = text.split(' ')
  let result = ''
  let maxLength = 0
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length < maxLength || maxLength === 0) {
      maxLength = wordArray[i].length
      result = [wordArray[i], maxLength];
    }
  }
  
  return result;
}


$(function() {
  module("Shortest Word");
  test("shortestWord()", t => {
    t.deepEqual(shortestWord('wind and willows'), ["and", 3], "wind and willow test");
  });
  
    test("shortestWord()", t => {
    t.deepEqual(shortestWord('cats in the cradle'), ["in", 2], "cats in the cradle test");
  });

  test("shortestWordLength()", t => {
    t.deepEqual(shortestWord('pied piper at the gate'), ["at", 2], "pied piper test");
  });
  

  QUnit.done = function(stats) {
    console.log('QUnit Done: ' + stats.total + ' tests run, ' + stats.passed + ' tests passed, ' + stats.failed + ' tests failed');
  };
}); // ready
