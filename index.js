// Code your solutions in this file

function writeCards(names) {
    const array = [];
    for (let index = 0; index < names.length; index++) {
        array.push(`Thank you, ${names[index]}, for the wonderful surprise gift!`)
        
    }
    return array;
}

function countdown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}