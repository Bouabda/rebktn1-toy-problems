// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return “null” on invalid input.
// You've got Helpers!
const translateRomanNumeral = romanNumeral => {
  if(typeof romanNumeral !== "string"){
    throw new TypeError("input must be a string");
  }

  let re = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;
  if(!re.test(romanNumeral)){
    throw new Error("input is invalid");
  }

  const DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  if(romanNumeral.length === 1){
    return DIGIT_VALUES[romanNumeral];
  }
  let totalSum = 0;
  for (let i = 1; i < romanNumeral.length; i++) {
    // M = 1000    C = 100    C = 100
    if(DIGIT_VALUES[romanNumeral[i]] > DIGIT_VALUES[romanNumeral[i - 1]]){
      totalSum = totalSum + (DIGIT_VALUES[romanNumeral[i]] - DIGIT_VALUES[romanNumeral[i-1]]);
    }else{
      if(i === 1){
        totalSum+=(DIGIT_VALUES[romanNumeral[i]] + DIGIT_VALUES[romanNumeral[i-1]]);
      }else{
        totalSum+=DIGIT_VALUES[romanNumeral[i]];
      }
    }
  }
  return totalSum;
  };

console.log(translateRomanNumeral("XC"));