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

/*(isNaN(guess) == false) && */
				console.log(guess);
				console.log(randomNumber);

				guessList.push(guess);
				console.log(guessList);
				$('#count').text(guessList.length);

				var newGuess = $('<li>' + guess + '</li>');
				$('#guessList').append(newGuess);

				var a = randomNumber - 50;
				var b = randomNumber + 50;
				var c = randomNumber - 30;
				var d = randomNumber + 30;
				var e = randomNumber - 10;
				var f = randomNumber + 10;

				if ( guess < a || guess > b)   {
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
				}

			}
			else {
				alert('EXCEPTION: Please enter a valid number');  //I added this else statement as well
			}
		});	
	}	
	newGame();
});



