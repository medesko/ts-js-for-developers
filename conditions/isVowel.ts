// Given a character ch, create a function that that checks if it's a vowel, we assume that vowels are: a, e, o, u, i.

const isVowel = (ch: string): boolean => {
    // we set ch to lowercase
    ch = ch.toLowerCase()
    return ['a', 'e', 'o', 'u', 'i'].includes(ch) // Array.prototype.includes() returns if true or false the passed parameter exists in the array
}

let ch1 = 'a', ch2 = 'A', ch3 = 'c'

console.log(isVowel(ch1))
console.log(isVowel(ch2))
console.log(isVowel(ch3))