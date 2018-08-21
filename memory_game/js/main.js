//This array will store the cards to be flipped
var cards = [
{
rank : 'queen',
suit : 'hearts',
cardImage : 'images/queen-of-hearts.png'
},
{
rank : 'queen',
suit : 'diamonds',
cardImage : 'images/queen-of-diamonds.png'
},
{
rank : 'king',
suit : 'hearts',
cardImage : 'images/king-of-hearts.png'
},
{
rank : 'king',
suit : 'diamonds',
cardImage : 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

function checkForMatch () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
}

function flipCard () {

  cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);

  // Show card image for the current card flipped
  this.setAttribute('src', cards[cardId].cardImage);

  // Check match only after two cards have been played
  if (cardsInPlay.length === 2) {
    checkForMatch();
    // Reset for new game
    cardsInPlay = [];

  }
}

// Functions to layout the cards
var createBoard = function () {

  // Looping the cards array to build the elements

  for (var i = 0; i < cards.length; i++) {

    // Create an img element for the cards
    var cardElement = document.createElement('img');

    // Set the src of img element to show the back of the cards
    cardElement.setAttribute('src', 'images/back.png');
    // ID of the current card
    cardElement.setAttribute('data-id', i);

    // When click function flipCard will be executed
    cardElement.addEventListener('click', flipCard);
    //John added below console log
    console.log(cardElement)
    // Append the child element the html
    document.getElementById('game-board').appendChild(cardElement);

  }

}

// Create the board by call createBoard
createBoard();
