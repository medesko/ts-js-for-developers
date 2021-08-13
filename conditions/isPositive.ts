// Given two non-zero numbers a and b, create a function that checks if their product is positive without calculating it.

const isPositive = (a: number, b: number) : boolean => {
    // the left side represents the case where both a and b are positive
    // the right side represents the case where both a and b are negative
    // we return the test that one of them is true
    return ((a > 0 && b > 0 ) || (a < 0 && b < 0))
}

let positiveNum = 4
let negativeNum = -6

console.log(isPositive(positiveNum, positiveNum))
console.log(isPositive(positiveNum, negativeNum))
console.log(isPositive(negativeNum, positiveNum))
console.log(isPositive(negativeNum, negativeNum))