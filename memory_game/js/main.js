/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "kng";

console.log("User flipped " + cardOne);
*/
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne;
var cardTwo;
var checkWinner;

cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
// console.log(cardsInPlay.length);
  checkWinner = cardsInPlay[0] === cardsInPlay[1] ? alert("You found a match!") : alert("Sorry, try again.")
}
