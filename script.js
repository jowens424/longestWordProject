function longestWord(text) {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length
      result = [wordArray[i], maxLength]
    }
  }

  return result
}



$(function() {
  module("Longest Word");
  test("longestWord()", t => {
    t.deepEqual(longestWord('wind and willows'), ["willows", 7], "wind and willow test");
  });

test("longestWord()", t => {
    t.deepEqual(longestWord('cats in the cradle'), ["cradle", 6], "cats in the cradle test");
  });
  
 test("longestWord()", t => {
    t.deepEqual(longestWord('pied piper at the gate'), ["piper", 5], "pied piper test");
  });


  QUnit.done = function(stats) {
    console.log('QUnit Done: ' + stats.total + ' tests run, ' + stats.passed + ' tests passed, ' + stats.failed + ' tests failed');
  };
}); // ready
