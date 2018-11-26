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

const newIntersections = (x, y) => {
  // Edge case: Not arrays or array of less than 3 points
  if (!x || !y || !Array.isArray(x) || !Array.isArray(y) || x.length <= 3) return 0;
  // Declare counter for intersections (return value)
  let intersections = 0;
  // Generate dictionary of horizontal and vertical lines
  const hLines = {};
  const vLines = {};
  for (let i = 0; i < x.length; i += 1) {
    if (vLines[x[i]]) {
      vLines[x[i]].start = Math.min(vLines[x[i]].start, y[i]);
      vLines[x[i]].end = Math.max(vLines[x[i]].end, y[i]);
    } else {
      vLines[x[i]] = {
        start: y[i],
        end: y[i],
      };
    }
    if (hLines[y[i]]) {
      hLines[y[i]].start = Math.min(hLines[y[i]].start, x[i]);
      hLines[y[i]].end = Math.max(hLines[y[i]].end, x[i]);
    } else {
      hLines[y[i]] = {
        start: x[i],
        end: x[i],
      };
    }
  }

  // Clear single points out of hLines and vLines
  Object.keys(vLines).forEach((vX) => {
    if (vLines[vX].end - vLines[vX].start === 0) delete vLines[vX];
  });

  Object.keys(hLines).forEach((vY) => {
    if (hLines[vY].end - hLines[vY].start === 0) delete hLines[vY];
  });

  // Iterate through all x coordinates in vertical lines
  Object.keys(vLines).forEach((vX) => {
    // For each vertical line, iterate through each horizontal line
    Object.keys(hLines).forEach((vY) => {
      if (vLines[vX].start < vY && vY < vLines[vX].end && hLines[vY].start < vX && vX < hLines[vY].end) {
        // If the lines intersect, increment intersections
        intersections += 1;
      }
    });
  });

  return intersections;
};

module.exports = newIntersections;

// console.log('---TESTING newIntersections---');
// console.log('Points: (2, 2), (2, 5), (0, 3), (4, 3)');
// console.log(`newIntersections([2, 2, 0, 4], [2, 5, 3, 3]): expect -> 1: actual -> ${newIntersections([2, 2, 0, 4], [2, 5, 3, 3])}`);
