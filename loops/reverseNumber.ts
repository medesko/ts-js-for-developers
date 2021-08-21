// Given a positive integer integer n, create a function that returns its reverse.

const reverse = (n: number): number => {
  // we convert n to string
  let nToStr = n.toString()
  // we reverse that string
  nToStr = nToStr.split('').reverse().join('')
  
  return parseInt(nToStr)
}

console.log(reverse(123))
console.log(reverse(2558))
console.log(reverse(4000))

/*Output:
321
8552
4
*/