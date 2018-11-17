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
  // Number of cirles the endpoint is in.
  let numCircles = 0;

  x.forEach((xc, index) => {
    const startIntersect = Math.pow((xc - start_x), 2) + Math.pow((y[index] - start_y), 2) < Math.pow(r[index], 2);
    const endIntersect = Math.pow((xc - end_x), 2) + Math.pow((y[index] - end_y), 2) < Math.pow(r[index], 2);

    if (startIntersect && !endIntersect) {
      numCircles += 1;
    } else if (!startIntersect && endIntersect) {
      numCircles += 1;
    }
  });

  return numCircles;
}

console.log(circleCountry([1, 4, 4, 0], [1, 4, 3, 0], [0.5, 2, 0.5, 100], 1, 1, 4, 3));

module.exports = circleCountry;
