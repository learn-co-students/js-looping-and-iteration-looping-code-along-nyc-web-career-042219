// Code your solutions in this file
function writeCards(names, event){
    let cards = [];
    for (let i = 0; i <names.length; i++) {
        cards[i] = "Thank you, " +  names[i] +", for the wonderful " + event + " gift!";
    };
    return cards;
};

function countdown(num){
    while(num >= 0){
        console.log(num--);
    };
};
