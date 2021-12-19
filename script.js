// flip
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
//Anzeige Counter
let clickCounter = 0;
let matchCounter = 0;

//Anzeige Zeit
// let start = Date.now();
// let end = Date.now();
// let time = new Date();


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        clickCounter++;
        document.getElementById('clicked').innerHTML = clickCounter;
        // start.getUTCSeconds();
        return;
    }//second click
    secondCard = this;
    clickCounter++;
    document.getElementById('clicked').innerHTML = clickCounter;
    checkForMatch();

}

function checkForMatch() {
    // match with data -framework set it in html on each memory card
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCard() : unflipCard();

    if (matchCounter === 6) {
        // end.getUTCSeconds();
        // time = end - start;
        console.log("thats great")
        document.getElementById('istfertig').innerHTML = "geschafft";
        // document.getElementById('playingT').innerHTML = time;
        //
    }
}

function disableCard() {
    //it is a match - remove flipCard event
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    matchCounter++;
    document.getElementById('matching').innerHTML = matchCounter;
    isMatched = true;
    console.log("yes");
}

function unflipCard() {
    lockBoard = true;
    //not a match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
        resetBoard();
        console.log("not")
    }, 1100);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// shuffle cards with random generating order number

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard);


})

