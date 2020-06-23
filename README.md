# Longest Word Project

-Write a method or function that returns the longest word in the sentence and its length  
-Write unit tests reworking code as needed  
-Add a method that returns the shortest word and length  

# Longest Word in the Sentence

* Used text.split to turn string tests into an array of substrings.  
* Used a for loop to compare the length of our wordArray variable to a maxLength of 0.  

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

* This function returned the longest word but not both longest word and the length of the longest word.    
* I updated the code for the result to return an array that included the maxLength variable:  

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
 
# Longest Word Tests

Utilizing QUnit, I first tested the functions using the equal assert where the test sentence assertion appeared between single quotes '', the expected value appeared immediately after (i.e. "cradle" highlighted below) and the name of the test followed in double quotes " ".   

  
    test("longestWord()", t => {  
    t.equal(longestWord('cats in the cradle'), "cradle", "cats in the cradle test");  
  });  


**These tests, though succesful for the initial function that only finds the longest word, were not succesful at testing for the array result.**    

* In order to test for the array result, I changed the equal assertion to deepEqual and the expected result to an array. All three tests passed.

*Unit Test*

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

# Shortest Word in the Sentence

My shortest word function involved similar code to my longest word function.  

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

where the updated if statement:  

**if (wordArray[i].length < maxLength || maxLength === 0) {**  

reflects that the split array string should be outputted if the string length is less than maxLength or maxLength is equal to 0.  

* I arrived at this updated if statement when simple changes to the logic operators in the longestWord function continued to output an empty string and a length of 0.

* I followed a similar process to longestWord function where I initially built the function to only output the longestWord, and later turned the result into an array. 

# Shortest Word Tests

* Initial tests were only to find the shortest word, as seen below: 

$(function() {  
  module("Shortest Word");  
  test("shortestWord()", t => {  
    t.equal(shortestWord('wind and willows'), "and", "wind and willow test");
  });  
  
* Like the previous function, these same tests failed when the function result was set to an array.  

* With updated deepEqual assertions to reflect an expectation of the shortest word in a given assertion test, the QUnit tests passed.  

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
}); // ready short test  
   
