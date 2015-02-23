app.gameMatch = function(){

  var chosenCards = [];


  $('.game-box').on('click', function(){
    var icon = $(this).find('.icon');
    var iconValue = icon.text();
    var firstChosenCard = chosenCards.slice(0,1).toString();
    var secondChosenCard = chosenCards.slice(1,2).toString();
    console.log(iconValue);

    icon.toggleClass('icon-visible');

    chosenCards.push(iconValue);
    console.log(chosenCards.length);
    console.log(chosenCards);

    if (chosenCards.length > 1) {
      if (iconValue === firstChosenCard){
        alert('match!');
        chosenCards.splice(0,chosenCards.length);
      } else if (chosenCards.length > 1 && iconValue !== firstChosenCard){
        chosenCards.splice(0,chosenCards.length);
      }
    }
  });
};
