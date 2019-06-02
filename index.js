// Code your solutions in this file
function countdown(num){
	while (num >= 0){
		console.log(num);
		num --;
	}
}

function writeCards(array){
	let newArr = [];
	for (let i = 0; i < array.length; i++){
		 newArr.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
	}
	return newArr;
}