// Code your solutions in this file

function writeCards(array, eve) {
  let answer = []
  for (let i = 0; i < array.length; i++) {
    var sentence = (`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    answer.push(sentence)
  }

  return answer;
}

function countdown(num){
  let count = num;
  while (count >= 0) {
    console.log(count--);
  }
}
