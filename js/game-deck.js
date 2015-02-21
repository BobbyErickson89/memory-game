// gameDeck will return an array with numPairs pairs
// of cards, randomized...
app.gameDeck = function(numPairs) {
  var cards = 'abcdefghi'.split('').slice(0, numPairs);

  // Double my array, so ['a', 'b', 'c'] becomes
  // ['a', 'b', 'c', 'a', 'b', 'c']
  cards = cards.concat(cards);

  // Randomize the array
  var randomCards = [];

  while (cards.length) {
    var randomIndex = Math.floor(Math.random() * cards.length);
    var card = cards.splice(randomIndex, 1)[0];
    randomCards.push(card);
  }

  return randomCards;
};
