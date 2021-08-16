// Given a positive integer n, create a function that returns the sum of integers from 1 to n.
// Way 1 => By using a loop:
const sum1ToN = (n: number): number => {
    let sum = 0
    for (let i = 0; i <= n; i++)
        sum += i

    return sum
}

let n1 = 15
let n2 = 20

console.log(sum1ToN(n1))
console.log(sum1ToN(n2))


// By using the mathematical formula

const sum1ToN2 = (n: number): number => n*(n+1)/2


console.log(sum1ToN2(n1))
console.log(sum1ToN2(n2))

/*Output:
120
210
*/