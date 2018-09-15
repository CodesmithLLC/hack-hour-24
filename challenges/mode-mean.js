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
    return mode(array) === mean(array);
}

function mode(array){
    let obj = {};
    function inner(){
        for (let i = 0; i < array.length; i+=1) {
            if(obj[array[i]]){
                obj[array[i]] += 1;
            }else{
                obj[array[i]] = 1;
            }
        }
        let objV = Object.values(obj);
        let max = Math.max(...objV);
        let potential = [];
        for(let k in obj){
            if(obj[k] === max){
                potential.push(k);
            }
        }
        return (Math.max(...potential))
    }
    return inner();
}
console.log(mode([1.5,2,3.5,2,2,3.5]))
function mean(array){
    function sumUp(array, sum = 0,i = 0){
        if(i === array.length){return sum}
        return (sumUp(array, sum+array[i], i+1));
    }
    return Math.floor(sumUp(array)/array.length);
}


console.log(mode([100,101,102,103,104.5,105.9]))
module.exports = modemean;
