function longestWordLength(text) {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''
     console.log(wordArray);
  for (let i = 0; i < wordArray.length; i++) {
  console.log('length');
   console.log(wordArray[i]);
  
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length;
      result = wordArray[i]
    }
  }
  return result.length;
}

function longestWord(text) {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > maxLength) {
      maxLength = wordArray[i].length
      result = wordArray[i]
    }
  }
  return result;
}



$(function() {
  module("Longest Word");
  test("longestWord()", t => {
    t.equal(longestWord('wind and willows'), "willows", "longest word testert");
  });

    test("longestWordLength()", t => {
    t.equal(longestWordLength('example two'), 7 , " length test");
  });
  
      test("longestWordLength()", t => {
    t.equal(longestWordLength('Paul Art Simon'), 5 , " length test");
  });
  

  QUnit.done = function(stats) {
    console.log('QUnit Done: ' + stats.total + ' tests run, ' + stats.passed + ' tests passed, ' + stats.failed + ' tests failed');
  };
}); // ready

