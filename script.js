// flip
const cards = document.querySelectorAll('.memory-card');

let hasFilppedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');
    if (!hasFilppedCard){
        //first click
        hasFilppedCard=true;
        firstCard = this;
        return;
    }//second click
        hasFilppedCard =false;
        secondCard = this;
        checkForMatch();
}
function checkForMatch(){
    // match with data -framework set it in html on each memory card
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCard() : unflipCard();
}

function disableCard(){
    //it is a match - remove flipCard event
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard)
}

function unflipCard(){
    //not a match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    },1100);
}

cards.forEach(card => card.addEventListener('click', flipCard))