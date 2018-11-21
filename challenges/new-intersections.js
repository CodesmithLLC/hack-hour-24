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
  // Find the height and width of the shape inside the old points
  const height = Math.max(...y) - Math.min(...y);
  const width = Math.max(...x) - Math.min(...x);
  // Edge case - height or width < 2, return 0
  if (height < 2 || width < 2) return 0;
  return (height - 1) * (width - 1);
};

module.exports = newIntersections;

// console.log('---TESTING newIntersections---');
// console.log('Points: (2, 2), (2, 5), (5, 2), (5, 5)');
// console.log(`newIntersections([2, 2, 5, 5], [2, 5, 2, 5]): expect -> 4: actual -> ${newIntersections([2, 2, 5, 5], [2, 5, 2, 5])}`);
