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
  const xCoords = {};
  const yCoords = {};

  for (let i = 0; i < x.length; i += 1) {
    if (xCoords[x[i]]) {
      xCoords[x[i]].push(y[i]);
    } else {
      xCoords[x[i]] = [y[i]];
    }

    if (yCoords[y[i]]) {
      yCoords[y[i]].push(x[i]);
    } else {
      yCoords[y[i]] = [x[i]];
    }
  }

  const xCoordsFixed = {};
  const yCoordsFixed = {};

  for (const prop in xCoords) {
    if (xCoords[prop].length > 1) {
      xCoordsFixed[prop] = [Math.min.apply(null, xCoords[+prop]), Math.max.apply(null, xCoords[+prop])];
    }
  }

  for (const prop in yCoords) {
    if (yCoords[prop].length > 1) {
      yCoordsFixed[prop] = [Math.min.apply(null, yCoords[+prop]), Math.max.apply(null, yCoords[+prop])];
    }
  }
  let pointCount = 0;
  for (const xProp in xCoordsFixed) {
    for (const yProp in yCoordsFixed) {
      if (xProp > yCoordsFixed[yProp][0] && xProp < yCoordsFixed[yProp][1] && yProp > xCoordsFixed[xProp][0] && yProp < xCoordsFixed[xProp][1]) {
        pointCount += 1;
      }
    }
  }

  return pointCount;
}

// console.log(newIntersections([0, 1, 5, 2, 2], [3, 1, 3, 0, 5]));

module.exports = newIntersections;
