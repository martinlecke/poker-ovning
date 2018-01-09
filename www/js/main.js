class Deck {
  constructor(){
    this.deck = [];
    this.createCards();
    this.shuffleCards();
  }

   createCards() {
     let cardSuits = ['Heart', 'Diamond', 'Spade', 'Club'];

     for (let suit of cardSuits) {
       for (let i = 1; i < 14; i++){
        let cardName = i;
        i === 1 ? cardName = 'Ace' : cardName = i;
        i === 11 ? cardName = 'Knekt' : cardName = i;
        i === 12 ? cardName = 'Queen' : cardName = i;
        i === 13 ? cardName = 'King' : cardName = i;

         this.deck.push(
          {
             'CardColor' : suit,
             'CardName': cardName,
             'CardNumber' : i
          }
         );
       }
     }
   } // /CreateCards

   shuffleCards() {
    for (let j = 0; j < 10; j++) {
      for (let i = 0; i < this.deck.length; i++) {

        let card = this.deck[i];
        let random = Math.floor(Math.random() * 52);

        this.deck[i] = this.deck[random];
        this.deck[random] = card;

      }
    }

   }

} // /Deck class

class Player {
  constructor(name, deck) {
    this.deck = deck;
    this.name = name;
    this.hand = [];
    this.dealHand(5);
  }

  // Fix dealing cards with new cards
  dealHand(numberOfCards){
    let newCards = this.deck.deck.splice(0, numberOfCards);
    this.hand = newCards;
  }

  calcMe(){
    let calc = 0;
    for (let i = 0; i < this.hand.length; i++){
      calc += this.hand[i].CardNumber;
    }
    return calc;
  }

  logMe(){
    console.log(this.deck);
    console.log(this.hand, "Total: ", this.calcMe());
  }


}


let x = new Deck();
let slim = new Player('Slim', x);
let luke = new Player('Luke', x);


// class Card {
//   constructor(){
//     this.hearts = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//   }
//   sendToDeck(item){
//
//
//   }
// }
