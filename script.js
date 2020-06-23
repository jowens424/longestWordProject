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

  return result
}


function longestWordLength(str) {
   var words = str.split(' ');
   var longest = 0;
   for (var i=0;i<words.length;i++) {
        if (words[i].length > longest) {
             longest = words[i].length;
        }  
   }
   return longest;
}



$(function() {
  module("Longest Word");
  test("longestWord()", t => {
    t.equal(longestWord('wind and willows'), "willows", "wind and willow test");
  });
  
    test("longestWord()", t => {
    t.equal(longestWord('cats in the cradle'), "cradle", "cats in the cradle test");
  });

  test("longestWordLength()", t => {
    t.equal(longestWordLength('example two'), 7, " length test");
  });
  
   test("longestWordLength()", t => {
    t.equal(longestWordLength('Paul Simon'), 5, " length test");
  });


  QUnit.done = function(stats) {
    console.log('QUnit Done: ' + stats.total + ' tests run, ' + stats.passed + ' tests passed, ' + stats.failed + ' tests failed');
  };
}); // ready test
