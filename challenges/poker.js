/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
const cards = [2,3,4,5,6,7,8,9,10,11,12,13,14];
const ranks = ['4-of-a-kind','full house','straight','3-of-a-kind','2-pair','1-pair','high card']
function poker(hand1, hand2) {
 
  // compare rank
  console.log(ranks.indexOf(getRank(hand2)))
  if (ranks.indexOf(getRank(hand1)) < ranks.indexOf(getRank(hand2))) {
   return 'Player 1 wins'
  }
  else if (ranks.indexOf(getRank(hand1)) > ranks.indexOf(getRank(hand2))) {
    return 'Player 2 wins'
  }
  else if (ranks.indexOf(getRank(hand1)) === ranks.indexOf(getRank(hand2))) {
    console.log(hand1, hand2)
    if (Math.max(...hand1) > Math.max(...hand2)) {
      return 'Player 1 wins'
    } else if (Math.max(...hand1) < Math.max(...hand2)) {
      return 'Player 2 wins'
    } else {
      return 'Draw'
    }
    // both have 4 of a kind
    // both have full house
    // both have straight
    // both have 3 of a kind
    // both have 2 pairs
    // both have 1 pair
    // both have only high cards
  }

}
console.log(poker([4,4,3,2,7],[3,3,1,8,6]))
function getRank(arr){
  if (countDuplicate(arr).includes(4)) {
    return '4-of-a-kind'
  }
  else if (countDuplicate(arr).includes(3) && countDuplicate(arr).includes(2)) {
    return 'full house'
  } 
  else if (countDuplicate(arr).includes(3) && !countDuplicate(arr).includes(2)) {
    return '3-of-a-kind'
  }
  else if (sequential(arr)) {
    return 'straight'
  }
  else if (countDuplicate(arr).filter(i=>i===2).length === 2) {
    return '2-pair'
  }
  else if (countDuplicate(arr).filter(i=>i===2).length === 1) {
    return '1-pair'
  }
  else {
    return 'high card'
  }
}
function sequential(arr){
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i+1] - arr[i] !== 1) {
      return false
    }
  }
  return true
}
function countDuplicate(arr) {
  let counts = {};
  arr.forEach(i => {
    if(counts[i]){counts[i]++}
    else {counts[i] = 1}})
  let vals = Object.values(counts)
  return vals;
}
console.log(countDuplicate([1,3,2,3,3]))
module.exports = poker;
