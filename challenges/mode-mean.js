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
    let maxModeList = [];
    let sum = 0;
    // check mode and sum up mean
    array.forEach((elem, _) => {
        sum += elem;
        // add count by 1
        if (mapCount[elem] === undefined)
            mapCount[elem] = 1;
        else
            mapCount[elem]++;
        // update mode list
        if (mapCount[elem] > maxOccurCount) {
            maxOccurCount = mapCount[elem];
            maxModeList = [elem];
        }
        // if elem ties to the max count but isn't in the mode list, add it
        if (mapCount[elem] === maxOccurCount && !maxModeList.find(x => x === elem)) {
            maxModeList.push(elem);
        }
    });
    // calculate mean
    let mean = Math.floor(sum / array.length);
    // compare mode and mean
    for (let i = 0; i < maxModeList.length; i++) {
        if (maxModeList[i] === mean)
            return true;
    }
    return false;
}
console.log(modemean([1,2,2,3,3,4]));
module.exports = modemean;
