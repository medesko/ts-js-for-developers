// Given a positive integer integer n, create a function that checks if it's a palindrome number.

const reverseN = (n: number): number => {
  // we convert n to string
  let nToStr = n.toString()
  // we reverse that string
  nToStr = nToStr.split('').reverse().join('')

  return parseInt(nToStr)
}

const isPalindrome = (n: number): boolean => n == reverseN(n)

console.log(isPalindrome(4554))
console.log(isPalindrome(20502))
console.log(isPalindrome(2336))

/*Output:
true
true
false
*/