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
  		console.log('hello');
  	});


	function newGame() {

		var randomNumber = Math.floor((Math.random() * 100) + 1);
		var guessList = [];

		$(".new").click(function(){
		$('#feedback').text('NEW GAME BEGINS NOW').css('background-color', 'green');
		console.log(randomNumber);
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

				


/*				if ( guess < a || guess > b)   {
					$('#feedback').text('Not Even Close');
				}
				else if (guess < f && guess > randomNumber) {
					$('#feedback').text('Very Warm...Lower...');
				}
				else if (guess > e && guess < randomNumber) {
					$('#feedback').text('Very Warm...Higher...');
				}
				else if (guess < d && guess > randomNumber) {
					$('#feedback').text('Warm...Lower...');
				}
				else if (guess > c && guess < randomNumber) {
					$('#feedback').text('Warm...Higher...');
				}
				else if (guess == randomNumber) {
					$('#feedback').text('You got it!');
				}
				else {
					$('#feedback').text('Cold');
				}*/



				console.log(guessList);
				$('#count').text(guessList.length);

			}
			else {
				alert('EXCEPTION: Please enter a valid number');  //I added this else statement as well
			}

		});	
	}	
	newGame();
});



