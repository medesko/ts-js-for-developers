// Given a positive integer n, create a function that displays numbers from 1 to n.

const print1ToN = (n : number): string => {
    let str = ''
    for (let i = 1; i <= n; i++)
        str += i + ' '
    return str;
}

console.log(print1ToN(8))
console.log(print1ToN(15))