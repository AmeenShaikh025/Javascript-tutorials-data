/*var Johnheight = prompt('Enter John\'s height in centimeters');
var Johnage = prompt('Enter John\'s age');

//var Johnheight = 170;
//var Johnage = 24;

var friend1_height = prompt('Enter John\'s first friend height in centimeters (i.e 3-digit number)');
var friend1_age = prompt('Enter John\'s  first friend age');

var friend2_height = prompt('Enter John\'s second friend height in centimeters');
var friend2_age = prompt('Enter John\'s second friend age');


var ageToWin = Johnage * 5;

if(friend1_height > Johnheight && friend1_age >= ageToWin){
	console.log('friend1 wins'+' '+' friend1\'s height is: '+friend1_height +'friend1\'s age is:  ' + friend1_age);
} else if( friend2_height > Johnheight && friend2_age >= ageToWin){ 
		console.log('friend2 wins'+' '+' friend2\'s height is: '+friend2_height +'friend2\'s age is:  ' + friend2_age);
}else if((friend1_height === friend2_height && friend1_age === friend2_age)||(friend1_height === Johnheight && friend1_age === Johnage)||(Johnheight === friend2_height && Johnage === friend2_age)){
	console.log('It\'s a draw');
}*/



//Jonas way

var heightJohn = 178;
var heightMike = 173;
var ageJohn = 25;
var ageMike = 26;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

/*
if(scoreJohn > scoreMike){
	console.log('John wins the game with '+ scoreJohn+ ' points!');
}
else if(scoreMike > scoreJohn){
	console.log('Mike wins the game with '+ scoreMike+ ' points!');
}
else if(scoreJohn === scoreMike){
	console.log('It\'s a draw');
}*/






var heightMary = 148;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
	console.log('John wins the game with '+ scoreJohn+ ' points!');
}
else if(scoreMike > scoreJohn && scoreMike > scoreMary){
	console.log('Mike wins the game with '+ scoreMike+ ' points!');
}
else if(scoreMary > scoreJohn && scoreMary > scoreMike){
	console.log('Mary wins the game with '+ scoreMary+ ' points!');
}
else{
	console.log('It is a draw');
}

















