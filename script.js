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
        // match with data -framwork set it in html on each memory card
        if (firstCard.dataset.framework ===
          secondCard.dataset.framework){
          //it is a match - remove flipcard event
          firstCard.removeEventListener('click', flipCard);
          secondCard.removeEventListener('click', flipCard)
      }else{
          //not a match
          setTimeout(() => {
              firstCard.classList.remove('flip');
              secondCard.classList.remove('flip');
          },1100);

      }

    }
}
cards.forEach(card => card.addEventListener('click', flipCard))