// Code your solutions in this file

function writeCards (names, event) {
  let thanks = []
  for (let i = 0; i < names.length; i++) {
    thanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thanks;
}

function countdown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
