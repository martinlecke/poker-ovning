class Deck {
  constructor(){
    this.deck = [];
    this.createCards();
  }

   createCards() {
     let cardSuits = ['Heart', 'Diamond', 'Spade', 'Club'];

     for (let suit of cardSuits) {
       for (let i = 1; i < 14; i++){
         this.deck.push({
           'CardColor' : suit,
           'CardNumber' : i
         });
       }
     }




  }

}

let x = new Deck();


// class Card {
//   constructor(){
//     this.hearts = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//   }
//   sendToDeck(item){
//
//
//   }
// }
