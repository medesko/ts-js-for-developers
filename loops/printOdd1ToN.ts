// Given a positive integer n, create a function that displays odd numbers from 1 to n.

// Way 1 => By using a condition
const printOdd1ToN = (n: number) : string => {
    let str = ''
    for (let i = 1; i <= n; i++)
        if (i % 2 == 1) str += i + ' '

    return str
}

console.log(printOdd1ToN(13))
console.log(printOdd1ToN(20))



// // Way 2  Without using a condition:
const printOdd1ToN2 = (n: number): string => {
    let str = ''
    for (let i = 1; i <= n; i += 2) 
        str += i + ' '
    return str
}

console.log(printOdd1ToN2(13))
console.log(printOdd1ToN2(20))

/*Output:
1 3 5 7 9 11 13
1 3 5 7 9 11 13 15 17 19
*/