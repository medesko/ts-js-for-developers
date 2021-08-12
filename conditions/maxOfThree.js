// Given three integers a, b, c, create a function that returns the value of the biggest one among them.
var mathOfThree = function (a, b, c) {
    // if a is greater than b and c at the same time, we return it
    if (a >= b && a >= c)
        return a;
    // else if b is greater than a and c at the same time, we return it
    else if (b >= a && b >= c)
        return b;
    // if the two first conditions were false, we return c, it's the only possibility left
    else
        return c;
};
var a = 7, b = 8, c = 2;
console.log(mathOfThree(a, b, c));
// other side
console.log("Using Math => " + Math.max(a, b, c));
