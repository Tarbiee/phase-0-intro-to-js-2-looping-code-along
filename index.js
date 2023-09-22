// // Code your solutions in this file

const cards = ["Guadalupe", "Ollie", "Aki"];

  function countDown(number){
      let i=10;
      while(i>=0 ){
          console.log(i);
          i --;
     }

  }
 countDown();

 function writeCards(cards, suprise){
     let i =0;
     while(i< cards.length){
         cards.push(`Thank you, ${cards[i]}, for the wonderful ${suprise} gift!`)
         i++;
     }
    return cards;
}
 writeCards(cards);




// function writeCards(namesArray, eventName) {
//   let messagesArray = [];
//   for (let i = 0; i < namesArray.length; i++) {
//     messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
//   }
//   return messagesArray;
// }

















  
