/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/


function drawStairs(n){
    let rows =" ";
    let ast = "*"
  
    for (let i = 1; i <= n; i++){
      console.log(addR(n-i)+addS(i)); 
    }
  }
  
  function addS(n){
    let str='';
    for(let i=0;i<n;i++){
      str+="*"
    }
   return str; 
  }
  function addR(n){
    let str='';
    for(let i=0;i<n;i++){
      str+=" "
    }
   return str; 
  }

module.exports = drawStairs;
``