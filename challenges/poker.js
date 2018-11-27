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

// Helper function - generate deck of 52 cards
const generateDeck = () => {
  const deck = [];
  for (let i = 0; i < 4; i += 1) {
    for (let j = 2; j < 15; j += 1) {
      deck.push(j);
    }
  }
  return deck;
};

// Helper function - generate two hands
const generateHands = (deck) => {
  const hand1 = [];
  const hand2 = [];
  // Loop through deck 5 times, slicing two cards out each time
  for (let i = 0; i < 5; i += 1) {
    let cardIndex = Math.floor(Math.random() * deck.length);
    hand1.push(...deck.splice(cardIndex, 1));
    cardIndex = Math.floor(Math.random() * deck.length);
    hand2.push(...deck.splice(cardIndex, 1));
  }
  return [hand1, hand2];
};

// Helper function - Find straight, return high card
const findStraight = (hand) => {
  hand.sort((a, b) => a - b);
  for (let i = 1; i < hand.length; i += 1) {
    if (hand[i] - hand[i - 1] !== 1) return false;
  }
  return hand[hand.length - 1];
};

// Helper function - Find x of a kind, return repeating card
const findOfAKind = (hand) => {
  // Create dictionary of card frequency (card: freq)
  const cards = {};
  for (let i = 0; i < hand.length; i += 1) {
    if (cards[hand[i]]) cards[hand[i]] += 1;
    else cards[hand[i]] = 1;
  }

  // Identify count of most frequently seen card
  const maxCardCount = Math.max(...Object.values(cards));

  // Delete cards that don't match this frequency
  Object.keys(cards).forEach((card) => {
    if (cards[card] < maxCardCount) {
      delete cards[card];
    }
  });

  // Identify highest card with highest frequency
  const maxCard = Math.max(...Object.keys(cards));

  // Return frequency (X of a kind) and the card that has that frequency
  return [maxCardCount, maxCard];
};

// Primary function - Compare two poker hands, identify winner
function poker(hand1, hand2) {
  // Check for straight and of a kinds
  const hand1OfAKind = findOfAKind(hand1);
  const hand2OfAKind = findOfAKind(hand2);
  const hand1Straight = findStraight(hand1);
  const hand2Straight = findStraight(hand2);

  // Check if either player got 4 of a kind - if 4 of a kind found, determine and return winner
  if (hand1OfAKind[0] === 4 && hand1OfAKind[0] === 4) {
    return hand1OfAKind[1] > hand2OfAKind[1] ? 'Player 1 wins' : 'Player 2 wins';
  }
  if (hand1OfAKind[0] === 4) {
    return 'Player 1 wins';
  }
  if (hand1OfAKind[1] === 4) {
    return 'Player 2 wins';
  }

  // Check if either player got a straight - if straight found, determine and return winner
  if (hand1Straight && hand2Straight) {
    if (hand1Straight === hand2Straight) return 'Draw';
    return hand1Straight > hand2Straight ? 'Player 1 wins' : 'Player 2 wins';
  }
  if (hand1Straight) return 'Player 1 wins';
  if (hand2Straight) return 'Player 2 wins';

  // Determine winner based on high of a kind frequency and card
  if (hand1OfAKind[0] !== hand2OfAKind[0]) {
    return hand1OfAKind[0] > hand2OfAKind[0] ? 'Player 1 wins' : 'Player 2 wins';
  }
  if (hand1OfAKind[1] !== hand2OfAKind[1]) {
    return hand1OfAKind[1] > hand2OfAKind[1] ? 'Player 1 wins' : 'Player 2 wins';
  }
  return 'Draw';
}

module.exports = poker;

// console.log('---TESTING poker---');
// const newDeck = generateDeck();
// const [newHand1, newHand2] = generateHands(newDeck);
// console.log('Hand 1: ', newHand1);
// console.log('Hand 2: ', newHand2);
// console.log(poker(newHand1, newHand2));
