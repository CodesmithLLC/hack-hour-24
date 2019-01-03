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
      xCoordsFixed[prop] = [Math.min.apply(null, xCoords[parseInt(prop)]), Math.max.apply(null, xCoords[parseInt(prop)])];
    }
  }

  for (const prop in yCoords) {
    if (yCoords[prop].length > 1) {
      yCoordsFixed[prop] = [Math.min.apply(null, yCoords[parseInt(prop)]), Math.max.apply(null, yCoords[parseInt(prop)])];
    }
  }
  let pointCount = 0;
  for (const prop in xCoordsFixed) {
    for (let i = xCoordsFixed[prop][0] + 1; i < xCoordsFixed[prop][1]; i += 1) {
      if (yCoordsFixed[i] && yCoordsFixed[i][0] < prop && yCoordsFixed[i][1] > prop) {
        pointCount += 1;
      }
    }
  }

  return pointCount;
}



module.exports = newIntersections;
