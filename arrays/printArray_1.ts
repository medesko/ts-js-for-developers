// Given an array of integers arr, create a function that displays its elements.

const printArray = (arr: number[]): string => {
  let str = ''

  for (const element of arr)
      str += element + ' '
  
 return str

}

let arr = [4, 6, 5, 2, 1, 7]
console.log(printArray(arr))

/*Output:
  4 6 5 2 1 7
*/