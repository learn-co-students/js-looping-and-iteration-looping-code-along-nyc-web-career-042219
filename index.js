// Code your solutions in this file
function countdown(num) {
  while(num >= 0) {
    console.log(num--);
  }
}

function writeCards(names) {
  let gaga = []
  for(let i = 0, k = names.length; i < k; i++) {
    gaga.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return gaga;
}
