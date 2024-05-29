/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const n = alphanumericStr.length;
  for (let i = 0; i < n / 2; i++) {
      // Compare characters from both ends
      if (alphanumericStr[i] !== alphanumericStr[n - 1 - i]) {
          return false; // If characters don't match, it's not a palindrome
      }
  }
  return true; // If loop completes without finding any mismatches, it's a palindrome
}

module.exports = isPalindrome;


module.exports = isPalindrome;
