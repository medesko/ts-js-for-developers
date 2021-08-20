// Given a positive integer integer n, create a function that returns its reverse.

const reverse = (n: number): number => {
  // we convert n to string
  let nToStr = n.toString()
  // we reverse that string
  nToStr = nToStr.split('').reverse().join('')

  return parseInt(nToStr)
}