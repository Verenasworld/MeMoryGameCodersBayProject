// flip
const cards = document.querySelectorAll('.memory-card');

let hasFilppedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard)return;

    this.classList.add('flip');
    if (!hasFilppedCard){
        //first click
        hasFilppedCard=true;
        firstCard = this;
        return;
    }//second click
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
    resetBoard();
    console.log("yes");
}

function unflipCard(){
    lockBoard = true;
    //not a match
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
        resetBoard();
        console.log("not")
    },1100);
}

function resetBoard(){
    [hasFilppedCard,lockBoard] = [false,false];
    [firstCard,secondCard] =[null,null];
}

cards.forEach(card => card.addEventListener('click', flipCard))

