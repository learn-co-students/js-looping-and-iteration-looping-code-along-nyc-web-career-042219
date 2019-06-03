// Code your solutions in this file


const gifts = ["teddy bear", "drone", "doll"];


function writeCards(arr, event){
  let cards = []
  for(let i = 0; i < gifts.length; i++){
   cards.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
  }
  return cards
}
  
  
  
  function countdown(num){
    while (0 < num){
      console.log(num)
      num--
    }
    console.log(num)
  }