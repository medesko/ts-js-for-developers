// Given three integers a, b, c, create a function that returns the value of the biggest one among them.

const mathOfThree = (a: number, b: number, c: number) : number  => {
    // if a is greater than b and c at the same time, we return it
    if (a >=b && a >= c) return a
    // else if b is greater than a and c at the same time, we return it
    else if (b >= a && b >= c) return b
    // if the two first conditions were false, we return c, it's the only possibility left
    else return c
}

let a = 7, b = 8, c = 2
console.log(`Creating with function => ` + mathOfThree(a, b, c))

// other side

console.log(`Using Math.max() => ` + Math.max(a, b, c))