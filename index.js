// Code your solutions in this file
function writeCards(array_o_names){
    let cards = [];
    for (let i = 0;i < array_o_names.length;i++){
        cards[i] = "Thank you, " + array_o_names[i] + ", for the wonderful surprise gift!";
    }
    return cards;
}

function countdown(num){
    while(num>=0){
        console.log(num--);
    }
}

