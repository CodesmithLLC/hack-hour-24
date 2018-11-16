/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let result = 0;
  // for each circle (x, y, r) determine distance from center to start point
  for (let i = 0; i < x.length; i += 1) {
    const distanceA = Math.sqrt(Math.pow(x[i] - start_x, 2) + Math.pow(y[i] - start_y, 2))
    // is distance greater than radius?
    const startWithinCircle = r[i] - distanceA > 0;

    // for each circle (x, y, r) determine distance from center to end point
    const distanceB = Math.sqrt(Math.pow(x[i] - end_x, 2) + Math.pow(y[i] - end_y, 2));
    // is distance greater than radius?
    const endWithinCircle = r[i] - distanceB > 0;

    // for each where the two answers are different add 1 to result
    if ((startWithinCircle && !endWithinCircle) || (!startWithinCircle && endWithinCircle)) {
      result += 1;
    }
  }
  // return result
  return result;
}

module.exports = circleCountry;