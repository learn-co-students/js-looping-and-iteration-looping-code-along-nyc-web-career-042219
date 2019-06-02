function writeCards(array, event) {
    let thankYouArray = []
    for (let i = 0; i < array.length; i++){
       thankYouArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouArray;
}

function countdown(number) {
    while (number >= 0) {
        console.log(number);
        number--
    }
}