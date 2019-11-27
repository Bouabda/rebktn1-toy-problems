/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  if(string1.length !== string2.length){
  	return undefined;
  }


  let result = '';

  for (let i = 0; i < string1.length; i++) {
  	for (let j = 0; j < string2.length; j++) {
  		if(string1[i] === string2[j] && !result.includes(string1[j]) ){
  		result += string1[i];
  	}
  	}
  	
  }

  return result;
};


// var firstNonRepeatedCharacter = function(string) {

//   var mem = {};
//   var c;
//   for (var i = 0; i < string.length; i++) {
//     c = string[i];
//     if (!mem[c]) {
//       mem[c] = 1;
//     } else {
//       mem[c]++;
//     }
//   }
//   for (i = 0; i < string.length; i++) {
//     c = string[i];
//     if (mem[c] === 1) { return c; }
//   }
//   return null;
// };