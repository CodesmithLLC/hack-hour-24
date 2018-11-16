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

/**
 * Approach
 * Find all circles that start is in
 * Find all circles destination is in (which Tyus is not in)
 */

// Helper function, determines if a coordinate is inside a circle
function isInside(centerX, centerY, radius, targetX, targetY) {
  const distX = Math.abs(centerX - targetX);
  const distY = Math.abs(centerY - targetY);
  const distOverall = Math.sqrt((distX ** 2) + (distY ** 2));
  return distOverall < radius;
}

function circleCountry(xArr, yArr, rArr, startX, startY, endX, endY) {
  // Declare counter for borders crossed
  let borderCount = 0;
  // Loop through circles arrays
  for (let i = 0; i < xArr.length; i += 1) {
    // If Tyus is inside a border the target is not inside, increment borderCount
    if (
      isInside(xArr[i], yArr[i], rArr[i], startX, startY)
      && !isInside(xArr[i], yArr[i], rArr[i], endX, endY)
    ) borderCount += 1;
    // If Tyus is outside a border the target is inside, increment borderCount
    if (
      isInside(xArr[i], yArr[i], rArr[i], endX, endY)
      && !isInside(xArr[i], yArr[i], rArr[i], startX, startY)
    ) borderCount += 1;
  }
  return borderCount;
}

module.exports = circleCountry;
