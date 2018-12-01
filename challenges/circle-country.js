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
  // does circle i contain the coordinate (coord_x, coord_y) ?
  function contains(i, coord_x, coord_y) {
    // compute x-coordinate and y-coordinate differences
    const a = coord_x - x[i];
    const b = coord_y - y[i];
    // use the pythagorean theorem
    return r[i] * r[i] > a * a + b * b;
  }

  // keep track of total number of circles we need to cross
  let total = 0;
  // loop over every circle
  for (let i = 0; i < x.length; i += 1) {
    // check whether circle contains start point
    const startContains = contains(i, start_x, start_y);
    // check whether circle contains end point
    const endContains = contains(i, end_x, end_y);

    // if circle i contains just the start or just the end, but not both,
    // then we must cross this circle
    if (startContains != endContains) total++;
  }

  // return total number of circles we need to cross
  return total;
}

module.exports = circleCountry;
