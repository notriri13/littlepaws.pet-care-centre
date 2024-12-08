document.getElementById('startButton').addEventListener('click', startGame);

const cards = [
    "Labrador", "Golden Retriever", "Beagle", "Bulldog", "Poodle", "Boxer",
    "Pug", "Dachshund", "Chihuahua", "Shih Tzu", "Rottweiler", "German Shepherd",
    "Labrador", "Golden Retriever", "Beagle", "Bulldog", "Poodle", "Boxer",
    "Pug", "Dachshund", "Chihuahua", "Shih Tzu", "Rottweiler", "German Shepherd"
];

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;

function startGame() {
    const board = document.getElementById('game-board');
    const results = document.getElementById('results');
    board.innerHTML = '';
    results.innerHTML = '';
    matchedPairs = 0;
    shuffle(cards);

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = card;
        cardElement.innerText = '?';
        cardElement.addEventListener('click', flipCard);
        board.appendChild(cardElement);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    this.innerText = this.dataset.name;

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matchedPairs++;
    if (matchedPairs === cards.length / 2) {
        document.getElementById('results').innerHTML = "🎉 Congratulations! You've completed the game! 🎉";
    }
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        firstCard.innerText = '?';
        secondCard.innerText = '?';
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
