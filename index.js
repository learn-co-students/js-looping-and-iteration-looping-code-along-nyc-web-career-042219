// Code your solutions in this file
let eventName = 'surprise';

function writeCards(names) {
  let thanksArray = [];
  for (let i = 0; i < names.length; i++) {
    thanksArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
  }
  return thanksArray;
}

function countdown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
