// Code your solutions in this file
function writeCards(array, event){
    const thankYouCards = [];
    for (let i = 0; i < array.length; i++){
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}

function countdown(countdown){
    while (countdown >= 0){
        console.log(countdown);
        countdown--;
    }
}