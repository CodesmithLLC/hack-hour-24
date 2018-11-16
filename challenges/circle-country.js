

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let result = 0;
  // for each circle (x, y, r) determine distance from center to start point
  for (let i = 0; i < x.length; i += 1) {
    const distanceA = Math.sqrt(((x[i] - start_x) ** 2) + ((y[i] - start_y) ** 2));
    // is distance greater than radius?
    const startWithinCircle = r[i] - distanceA > 0;

    // for each circle (x, y, r) determine distance from center to end point
    const distanceB = Math.sqrt(((x[i] - end_x) ** 2) + ((y[i] - end_y) ** 2));
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
