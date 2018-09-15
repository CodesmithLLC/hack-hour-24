/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    array.sort();
    // create counter map
    let mapCount = {};
    let maxOccurCount = Number.MIN_VALUE;
    let modeList = [];
    let sum = 0;
    // check mode and sum up mean
    array.forEach((elem, _) => {
        sum += elem;

        if (mapCount[elem] === undefined)
            mapCount[elem] = 1;
        else
            mapCount[elem]++;
        // update mode list
        if (mapCount[elem] > maxOccurCount) {
            maxOccurCount = mapCount[elem];
            modeList = [elem];
        }
        // if mode number isn't in the mode list, add it
        if (mapCount[elem] === maxOccurCount && !modeList.find(x => x === elem)) {
            modeList.push(elem);
        }
    });
    // calculate mean
    let mean = Math.floor(sum / array.length);
    // compare mode and mean
    for (let i = 0; i < modeList.length; i++) {
        if (modeList[i] === mean)
            return true;
    }
    return false;
}
console.log(modemean([1,2,2,3,3,4]));
module.exports = modemean;
