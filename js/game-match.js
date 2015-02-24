app.gameMatch = function(){
  var firstCard;

  $('.game-box-click').on('click', function () {
    var currentCard = $(this)

    if (firstCard === undefined) {
      firstCard = currentCard;

    } else if (firstCard[0] === currentCard[0]) {
      return false;

    } else {
      compareCards(firstCard, currentCard);

      firstCard = undefined
    }

  });

  function compareCards(firstCard, secondCard) {
    if (firstCard.val() === secondCard.val()) {
      disableCheck(firstCard);
      disableCheck(secondCard);
    } else {
      setTimeout(function() {
        setCheck(firstCard, false);
        setCheck(secondCard, false);
      }, 750);
    }
  };

  function disableCheck(card) {
    card.prop('disabled', true);
  }

  function setCheck(card, state) {
    card.prop('checked', state);
  }
};



  // var chosenCards = [];
  //
  //
  // $('.game-box').on('click', function(){
  //   var icon = $(this).find('.icon');
  //   var iconValue = icon.text();
  //   var firstChosenCard = chosenCards.slice(0,1).toString();
  //   var secondChosenCard = chosenCards.slice(1,2).toString();
  //   console.log(iconValue);
  //
  //   icon.toggleClass('icon-visible');
  //
  //   chosenCards.push(iconValue);
  //   console.log(chosenCards.length);
  //   console.log(chosenCards);
  //
  //   if (chosenCards.length > 1) {
  //     if (iconValue === firstChosenCard){
  //       alert('match!');
  //       chosenCards.splice(0,chosenCards.length);
  //     } else if (chosenCards.length > 1 && iconValue !== firstChosenCard){
  //       chosenCards.splice(0,chosenCards.length);
  //     }
  //   }
  // });
