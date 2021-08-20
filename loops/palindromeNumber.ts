// Given a positive integer integer n, create a function that checks if it's a plindrome number.

const reverseN = (n: number): number => {
  // we convert n to string
  let nToStr = n.toString()
  // we reverse that string
  nToStr = nToStr.split('').reverse().join('')

  return parseInt(nToStr)
}

const isPalindrome = (n: number) => n == reverseN(n)