// DRAW FIRST CARDS SHOULD ONLY BE CLICKABLE IN STARTGAME

let cards = [];
let cardsTotal = 0;
// gameStarted = false;
let cardEl = document.getElementById("card-el");
let sumCards = document.getElementById("sum-cards");
let gameMessage = document.getElementById("message");

// START THE GAME
function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = generateRandomCard();
  let secondCard = generateRandomCard();
  cards = [firstCard, secondCard];
  cardsTotal = firstCard + secondCard;
  renderGame();
}

// RENDER THE GAME
function renderGame() {
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  // cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumCards.textContent = "Sum: " + cardsTotal;

  if (cardsTotal < 21) {
    //lastResult.style.backgroundColor = 'green';
    gameMessage.style.backgroundColor = "yellow";
    gameMessage.textContent = "You're still in the game. Draw another card!"
  } else if (cardsTotal === 21) {
    hasBlackJack = true;
    gameMessage.style.backgroundColor = "green";
    gameMessage.textContent = "You got Black Jack. You Won!!!"
  } else {
    isAlive = false;
    gameMessage.style.backgroundColor = "red";
    gameMessage.textContent = "You lost. Restart or go home and sleep!"
  }
}

// GENERATE RANDOM CARD
function generateRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  return randomNumber;
}


// DRAW NEW CARD
function drawNewCard() {
  if (isAlive == true && hasBlackJack == false) {
    let card = generateRandomCard();
    cards.push(card);
    cardsTotal += card;
    renderGame();
  }
}


// RESTART GAME
function restartGame() {
  if (cards.length !== 0) {
    firstCard = 0;
    secondCard = 0;
    cardsTotal = 0;
    gameMessage.textContent = "Game Restarted. click on DRAW FIRST CARDS to draw first cards";
    sumCards.textContent = "Sum: " + "";
    cardEl.textContent = "Cards: " + "";
  }
}
