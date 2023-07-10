// complete the given function

function palindrome(str){
 const formattedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = formattedString.length - 1;

  while (left < right) {
    if (formattedString[left] !== formattedString[right]) {
      return false; // Characters don't match, not a palindrome
    }
    left++;
    right--;
  }

  return true;
}
module.exports = palindrome
