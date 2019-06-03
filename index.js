// Code your solutions in this file
function writeCards(arr) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    result.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
  }
  return result;
}

function countdown(num) {
  for(let i = num; i > -1; i--) {
    console.log(i)
  }
}