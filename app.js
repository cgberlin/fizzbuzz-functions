$(document).ready(function() {
	var countToNumber = parseInt(prompt("Please enter the number to count to"));
	function fizzBuzz(numberToCountTo) {
		for (var numberCounted = 1; numberCounted <= numberToCountTo; numberCounted++) {
			if ((numberCounted % 3 == 0) && (numberCounted % 5 == 0)){
				$('.content').append('<p>fizzbuzz</p>');
			}
			else if (numberCounted % 3 == 0) {
				$('.content').append('<p>fizz</p>');
			}
			else if (numberCounted % 5 == 0) {
				$('.content').append('<p>buzz</p>');
			}
			else {
				$('.content').append('<p>'+numberCounted+'</p>');
			}
		}
	}
	if ((countToNumber != NaN) && (countToNumber != undefined) && (countToNumber >= 1)){
		fizzBuzz(countToNumber);
	}
	else{
		alert('Didn\'t enter a valid number!');
	}
});
