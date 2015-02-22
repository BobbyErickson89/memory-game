app.gameMatch = function(){

  var chosenCards = [];


  $('.game-box').on('click', function(){
    var icon = $(this).find('.icon');
    var iconValue = icon.text();
    console.log(iconValue);

    icon.toggleClass('icon-visible');


    if (iconValue === chosenCards.slice(0,1).toString()){
      alert('match!');
    } else if (iconValue !== chosenCards.slice(0,1).toString()){
      chosenCards.splice(0,chosenCards.length);

    }

    var firstGuess = chosenCards.push(iconValue);
    console.log(chosenCards);
  });
};
