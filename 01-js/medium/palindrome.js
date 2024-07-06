/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const newStr = str.toLowerCase();
  let isPdrome = true;
  let head = 0;
  let tail = newStr.length - 1;
  for (let i = 0; i < newStr.length / 2; i++) {
    while (head < tail && !isAlphanumeric(newStr[head])) {
      head++;
    }
    while (head < tail && !isAlphanumeric(newStr[tail])) {
      tail--;
    }
    if (newStr[head] !== newStr[tail]) {
      isPdrome = false;
    }
  }
  return isPdrome;
}

function isAlphanumeric(char) {
  return /[a-z0-9]/.test(char);
}
module.exports = isPalindrome;
