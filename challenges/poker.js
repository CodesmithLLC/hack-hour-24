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
  function scoreHand(hand) {
    const highCard = Math.max(hand);
    let score = 0;
    const obj = {};
    hand.foreach((card) => {
      if (!obj[card]) {
        obj[card] = 1;
      } else {
        obj[card] += 1;
      }
    });
    const maxNumCards = Math.max(obj.values);
    // score hands from 0 (nothing) - 6 (4-of-a-kind).  
    if (maxNumCards === 4) {
      score = 6;
    }
    if (maxNumCards === 3) {
      //test for full house, if yes score 5, if no give score of 3
      if 

    }
    // test for straight, give score 4
    // test for pairs
    return [score, highCard];
  }
  const hand1Score = scoreHand(hand1);
  const hand2Score = scoreHand(hand2);
  if (hand1Score[0] > hand2Score[0]) {
    return 'Player 1 wins';
  }
  if (hand1Score[0] < hand2Score[0]) {
    return 'Player 2 wins';
  }
  if (hand1Score[0] === hand2Score[0]) {
    if (hand1Score[1] > hand2Score[1]) {
      return 'Player 1 wins';
    }
    if (hand1Score[1] < hand2Score[1]) {
      return 'Player 2 wins';
    }
    if (hand1Score[1] === hand2Score[1]) {
      return 'draw';
    }
  }
}

module.exports = poker;
