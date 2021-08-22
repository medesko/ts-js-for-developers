// Given two positive integers limitX and limitY, create a function that displays all couples {x, y} where x is between 0 and limitX, and y is between 0 and limitY.

// Example 1:
// Input: limitX = 1, limitY = 2
// Output: {0,0} {0,1} {0,2} {1,0} {1,1} {1,2}

const couples = (limitX, limitY) => {
  // the first loop is for values of x 
  // (0 -> limitX)
  for (let x = 0; x <= limitX; x++) 
    for (let y = 0; y <= limitY; y++) 
      // each time we print the couples {x, y}
      console.log('{' + x + ', ' + y + '}')
}

couples(2, 3);
/*Output:
{0, 0}
{0, 1}
{0, 2}
{0, 3}
{1, 0}
{1, 1}
{1, 2}
{1, 3}
{2, 0}
{2, 1}
{2, 2}
{2, 3}
*/