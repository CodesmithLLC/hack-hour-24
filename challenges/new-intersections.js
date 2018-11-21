/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

function newIntersections(x, y) {
  let count = 0;


  // Find points that are on the same line.
  // {x: [min, max]}

  const dictx = {};
  const dicty = {};

  x.forEach((xCoord, i) => {
    if (dictx[xCoord] === undefined) {
      dictx[xCoord] = { min: y[i], max: y[i] };
    } else if (dictx[xCoord].min > y[i]) {
      dictx[xCoord].min = y[i];
    } else if (dictx[xCoord].max < y[i]) {
      dictx[xCoord].max = y[i];
    }

    if (dicty[y[i]] === undefined) {
      dicty[y[i]] = { min: xCoord, max: xCoord };
    } else if (dicty[y[i]].min > xCoord) {
      dicty[y[i]].min = xCoord;
    } else if (dicty[y[i]].max < xCoord) {
      dicty[y[i]].max = xCoord;
    }
  });

  // console.log(dictx);
  // console.log(dicty);

  /* eslint-disable */
  for (x in dictx) {
    if (dictx[x].min !== dictx[x].max) {
      // console.log(dictx[x].min, dictx[x].max)
      for (y in dicty) {
        // console.log(dictx[x].min, parseInt(y), dictx[x].max, parseInt(y))
        if (dictx[x].min < y && dictx[x].max > y && dicty[y].min !== dicty[y].max) {
          count +=1
        }
      }
    }
  }
  /* eslint-enable */

  return count;
}

console.log(newIntersections([1, 1, 2, 2, 3, 3, 4, 2, 4], [1, 2, 1, 3, 2, -2, 1, 0, 0]));

module.exports = newIntersections;
