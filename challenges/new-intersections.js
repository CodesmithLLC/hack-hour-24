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
// x [-1,-1,1,-2 ]
// y [1,  3,2,2 ]
function newIntersections(x, y) {
  const objX = {};
  for (let i = 0; i < x.length; i++) {
    if (objX[x[i]]) {
      objX[x[i]].push(y[i]);
    } else {
      objX[x[i]] = [y[i]];
    }
  }
  const objY = {};
  for (let i = 0; i < y.length; i++) {
    if (objY[y[i]]) {
      objY[y[i]].push(x[i]);
    } else {
      objY[y[i]] = [x[i]];
    }
  }
  // console.log(objX);
  // console.log(objY);
  let count = 0;
  for (const k in objX) {
    if (objX[k].length >= 2) {
      // console.log(objX[k]);
      const y1 = Math.min(...objX[k]); 
      const y2 = Math.max(...objX[k]);
      // console.log(y1, y2);

      for (const kk in objY) {
        // console.log('k',kk)
        // console.log(kk, objY[kk]);
        if (objY[kk].length >= 2 && kk < y2 && kk > y1 ) {
          if(objY[kk].filter(i => i < k).length >= 1 && objY[kk].filter(i => i > k).length >= 1){
            count++;

          }
          // console.log(objY[kk].filter(i => i > k));
        }
      }
    }
  }
  return count;
}
// console.log(newIntersections([1,1,2,2,3,3,4,2,4], [1,2,1,3,2,-2,1,0,0]));
module.exports = newIntersections;
