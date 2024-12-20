// Declare two variables containing the following words: (use prompt() function)
let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

// Log to the console the original strings and the reversed strings
console.log("Original word 1:", word1);
console.log("Reversed word 1:", reverseString(word1));
console.log("Original word 2:", word2);
console.log("Reversed word 2:", reverseString(word2));

// Log to the console by returning the truth value if the original string is equivalent to the reversed string.
console.log("Is word 1 a palindrome?", isPalindrome(word1));
console.log("Is word 2 a palindrome?", isPalindrome(word2));


// Helper function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Helper function to check if a string is a palindrome
function isPalindrome(str) {
  return str === reverseString(str);
}
