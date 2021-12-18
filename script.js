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

    }else {
        //second click
        hasFilppedCard =false;
        secondCard = this;

        //do cards match?
        console.log(firstCard.dataset.framework);
        console.log(secondCard.dataset.framework);
    }
}
cards.forEach(card => card.addEventListener('click', flipCard))