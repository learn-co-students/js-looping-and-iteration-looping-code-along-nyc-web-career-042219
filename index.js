// Code your solutions in this file
function writeCards(array, birthday) {
  let thanks_array = [];
  for (let i = 0; i < array.length; i++) {
    thanks_array.push(`Thank you, ${array[i]}, for the wonderful ${birthday} gift!`)
  }
  return thanks_array;
}

function countdown(number) {
  while (number >= 0) {
    console.log(number);
    number--
  }
}
