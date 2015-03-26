$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*Create an action when user clicks new*/
  	$(".new").click(function(){
  		$('#guessList').text('Yes'); //You added this recently
  	});

  	var randomNumber;
	
	function newGame() {

		
		var guessList = [];

		$(".new").click(function(){
		$('#feedback').text('NEW GAME BEGINS NOW').css('background-color', 'green');
		randomNumber = Math.floor((Math.random() * 100) + 1);
		console.log(randomNumber);
		guessList = []; //You added this recently

		});

		$(".button").click(function(e){
			e.preventDefault();

	  		guess = parseFloat($('#userGuess').val());

	  		if (((guess <= 100) && (guess >= 0) && (isNaN(guess) == false))) {  

				console.log(guess);
				console.log(randomNumber);

				var newGuess = $('<li>' + guess + '</li>');
				
				var a = randomNumber - 50;
				var b = randomNumber + 50;
				var c = randomNumber - 30;
				var d = randomNumber + 30;
				var e = randomNumber - 10;
				var f = randomNumber + 10;

				lastGuess = guessList[guessList.length - 1];
				guessList.push(guess);

				var lastGuessDiff = Math.abs(lastGuess - randomNumber);
				var thisGuessDiff = Math.abs(guess - randomNumber);
				$('#guessList').append(newGuess);

				if ((isNaN(lastGuessDiff) == true) && (guess != randomNumber)) {
					$('#feedback').text('Guess Again');
				}
				else if (guess == randomNumber) {
					$('#feedback').text('You Got It');
					guessList = [];
					$('#guessList').text('')
				}
				else if (lastGuessDiff == thisGuessDiff) {
					$('#feedback').text('Neither Hotter nor Colder');
				}
				else if (lastGuessDiff > thisGuessDiff) {
					$('#feedback').text('Hotter');
				}
				else {
					$('#feedback').text('Colder');
				}

				console.log(guessList);
				$('#count').text(guessList.length);

			}
			else {
				alert('EXCEPTION: Please enter a valid number'); 
			}

		});	
	}	
	newGame();
});



