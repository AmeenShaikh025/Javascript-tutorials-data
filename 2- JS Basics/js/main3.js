 //016   018
//===Lecture: Functions

function calculateAge(yearOfBirth){
	var age =2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1994);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn+' '+ageMike+' '+ageMary);




function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	var retirement = 65 - age;
	if( retirement >= 0){
		console.log(name + ' retiers in '+retirement+ ' years');
	}
	else{
		console.log(name + ' has already retired');
	}
}

yearsUntilRetirement('John',1990);
yearsUntilRetirement('Mike',1969);
yearsUntilRetirement('Mary',1948);


////////===Lecture: Statements and Expressions

/*function someFunction(par){ //function statement
	//code
}*/


/*var someFun = function(par){ //function expression
	//code
}*/

//differnce b/w statement and expression is, expression produces outcome

//ex:Expression, expression produces a value
//3 +4;
//var x = 3;

//ex:statements
/*if(x === 5){
	//do something
}*/




/////======Lectures:Arrays
	var names = ['John', 'Jane', 'Mark'];
	var years = new Array(1990, 1969, 1948);

	console.log(names[2]);
	names[1] = 'Ben';// variable Mutation
	console.log(names);

	var john = ['John', 'Smith', 1990, 'designer', false];

	john.push('blue');//push adds the elemnt at the end of the array
	john.unshift('Mr.');//adds an element to the begining of the array
	john.pop();//it doesn't accepts any parameter,It removes last elemnt in the array
	john.shift();//removes the first element from the array.

	console.log(john);

	//alert(john.indexOf('Smith'));

	if(john.indexOf('teacher') === -1){//indexOf returns -1 if false
		console.log('John is not a teacher');
	}





