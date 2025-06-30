/* Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar. */


export const isPalindrome = (x:string): boolean => {
  const reversed = x.split('').reverse().join("").toLowerCase()
  
  return x.toLowerCase() === reversed ? true : false
}

console.log(isPalindrome('boB'))