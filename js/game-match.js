app.gameMatch = function(){

  var chosenCards = [];

  $('.game-box').on('click', function(){
    var icon = $(this).find('.icon').text();
    console.log(icon);

    var firstGuess = chosenCards.push(icon);
    console.log(chosenCards);

    if (icon === chosenCards.slice(0,1).toString()){
      alert('match!');
    } else if (icon !== chosenCards.slice(0,1).toString()){
      chosenCards.splice(0,chosenCards.length);
    }

  });
};
