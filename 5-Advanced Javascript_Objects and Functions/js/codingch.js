//console.log("Coding challenge");



/*coding challenge -1*/



//for creating plugins we can add the code in IIFE ...
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



Question.prototype.checkAnswer = function(ans){
	if(ans === this.correct){
		console.log('correct answer');
	}else{
		console.log('Wrong answer, Please reload the page.');
	}
}




var q1 = new Question('Is Javascript the coolest PL in the world?',
							 ['yes','no'],
							  0);

var q2 = new Question('What\'s the name of this courses\'s teacher',
							['Ameen','Kenny','Jonas'],2);

var q3 = new Question('What does best describe coding',
							['Boring','Hard','Fun','tedious'],2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();



var answer = parseInt(prompt('Please select the correct answer.'));


questions[n].checkAnswer(answer);

})();






