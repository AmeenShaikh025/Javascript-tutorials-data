/*console.log('Hi');*/

/*Code for Coding Challenge 2 (Expert Level)*/

(function() {
	function Question(question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}


Question.prototype.displayQuestion = function() {
	console.log(this.question);//displays the question

	for (var i = 0; i < this.answers.length; i++) {//displays the options
		console.log(i + ': '+ this.answers[i]);
	}
}



Question.prototype.checkAnswer = function(ans, callback){

	var sc;
	if(ans === this.correct){
		console.log('correct answer');
		sc = callback(true);
	}else{
		console.log('Wrong answer, Please reload the page.');

		sc = callback(false);
	}
	this.displayScore(sc);
}


	Question.prototype.displayScore = function(score){
			
			console.log('Your current score is:' +score);
			console.log('-----------------------------');

		}


	




var q1 = new Question('Is Javascript the coolest PL in the world?',
							 ['yes','no'],
							  0);

var q2 = new Question('What\'s the name of this courses\'s teacher',
							['Ameen','Kenny','Jonas'],2);

var q3 = new Question('What does best describe coding',
							['Boring','Hard','Fun','tedious'],2);

var questions = [q1, q2, q3];


	/*closures for keeping the score*/

	function score(){
		var sc = 0;
		return function(correct){ //it is going to be a true or false value
			if(correct){
				sc++;
			}
			return sc;
		}
	}

	var keepScore = score();


	function nextQuestion(){	

		var n = Math.floor(Math.random() * questions.length);

		questions[n].displayQuestion();



		var answer = prompt('Please select the correct answer.');//answer is in number	

		if(answer !== 'exit'){
			questions[n].checkAnswer(parseInt(answer), keepScore);
			nextQuestion();
		}

	}

		nextQuestion();



})();























