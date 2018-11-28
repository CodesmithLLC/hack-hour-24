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
function poker(hand1, hand2) {

  // iterate through the array and create a cache of cards which we can use to check for win conditions
  let hand1Score = hand1.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    }
    else {
      acc[curr] = 1;
    }
  }, {});

  let hand2Score = hand2.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    }
    else {
      acc[curr] = 1;
    }
  }, {});

  // now check for wins in either hand
  // hold the score
  let h1;
  let h2;
  // check for the high card only hands
  let h1Array = Object.values(hand1Score);
  let h2Array = Object.values(hand2Score);

  if (Math.max(...h1Array) === 1) {
    hand1.sort();
    hand1.forEach((card, index) => {
      if(card)
    })
    h1 = 1;
  }
  if (Math.max(...h2Array) === 1) {
    h2 = 1;
  }

  // if h1 did not recieve a score yet, 
  if (h1 === undefined) {

    // check for a straight
    for (let i = 0; i < hand1.length; i += 1) {
      // four of a kind, break the loop
      if (hand1Score[hand1[i]] === 4) {
        h1 = 7;
        break;
      }
      // three of a kind, score it and set a boolean to check for the full house
      else if (hand1Score[hand1[i]] === 3) {
        h1 = 4;
        let fullHouse = true;
      } 
      // fullhouse, score it and break
      else if (hand1Score[hand1[i]] === 2 && fullHouse === true) {
        h1 = 6;
        break;
      }
      // two of a kind, set a counter to count the number of pairs
      else if (hand1Score[hand1[i]] === 2) {
        if (pairCount === 1) {
          h1 = 3
        }
        else {
          h1 = 2;
        }
      }
    }
  }

   // if h2 did not recieve a score yet, 
   if (h2 === undefined) {

    // check for a straight
    for (let i = 0; i < hand2.length; i += 1) {
      // four of a kind, break the loop
      if (hand2Score[hand2[i]] === 4) {
        h2 = 7;
        break;
      }
      // three of a kind, score it and set a boolean to check for the full house
      else if (hand2Score[hand2[i]] === 3) {
        h2 = 4;
        let fullHouse = true;
      } 
      // fullhouse, score it and break
      else if (hand2Score[hand2[i]] === 2 && fullHouse === true) {
        h2 = 6;
        break;
      }
      // two of a kind, set a counter to count the number of pairs
      else if (hand2Score[hand2[i]] === 2) {
        if (pairCount === 1) {
          h2 = 3
        }
        else {
          h2 = 2;
        }
      }
    }
  }


}

module.exports = poker;
