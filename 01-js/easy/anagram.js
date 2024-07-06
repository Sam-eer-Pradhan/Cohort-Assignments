/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check if the lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();

  let count = new Array(256).fill(0);

  for (let i = 0; i < newStr1.length; i++) {
    count[newStr1.charCodeAt(i)]++;
  }
  for (let j = 0; j < newStr2.length; j++) {
    count[newStr2.charCodeAt(j)]--;
  }


  for (let k = 0; k < 255; k++) {
    if (count[k] != 0) {
      return false;
    }
  }

  return true;

}



module.exports = isAnagram;
