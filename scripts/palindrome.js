//reverse a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

//Returns true for palindrome, false if not.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
