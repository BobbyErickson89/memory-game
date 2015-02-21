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

// takes an array and randomizes it.  does the same as
// above, just another way of doing it.
// app.shuffle = function (arr) {
//
//   function swap(x, y) {
//     var tmp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = tmp;
//   }
//
//   for (var i = 0; i < arr.length; ++i) {
//     var randomIndex = Math.floor(Math.random() * arr.length);
//     swap(i, randomIndex);
//   }
//
//   return arr;
// }
