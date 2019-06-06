// Code your solutions in this file

function writeCards(array,event){
  let newArray=[]
  for(let i=0; i<array.length; i++){
  newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
  }
  return newArray
}

function countdown(num){
  let countdown = num;
  while (countdown >= 0) {
    console.log(countdown--)
  }
}
