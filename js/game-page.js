app.gamePage = function (numPairs) {
  var template = _.template($('#gameBoard').html(), { variable: 'm' });
  var html = template({
    cards: app.gameDeck(numPairs)
  });

  $('.main-content').html(html);
};
