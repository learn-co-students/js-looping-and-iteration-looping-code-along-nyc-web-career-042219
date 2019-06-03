function writeCards(arr) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    };
    return newArr;
};

function countdown(num){
    let counter = num;
    while (counter>=0){
        console.log(counter);
        counter--;
    };
};