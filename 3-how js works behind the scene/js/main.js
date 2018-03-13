/*Execution context object*/


/*
__________________________
|	EXECUTION CONTEXT    |
|	 	OBJECT           |
|________________________|
|(1) Variable Object (VO)|--->contain function argument,variable declartions,fun declaration,
|(2) Scope chain	     |--->contain current variable object, as well as variable object of all it's parents
|(3) "This" Variable     |
|________________________|



*/


//////////////////////////////////////////////
//Lecture: Hoisting



/*function Hoisting starts*/

/// NOTE: Hoisting for functions works only for function declaration but not for function expression



calculateAge(1965); // function declaration

function calculateAge(year){ // function declaration
	console.log(2016 - year);
}


//retirement(1990); // function expression - does not work

var retirement = function(year){ // function expression
	console.log(65-(2016 - year));
}

retirement(1990); // function expression - works fine

/*function Hoisting ends*/

/*===============================*/

/*variable hoisting starts*/


//console.log(age); undefined (if we remove "var age = 23" Reference error occurs:age is not defined)
var age = 23;// defined in variable object of global exection context object
console.log(age);



function foo() {
	console.log(age);//undefined
	var age = 65;// defined in variable object of execution context object of the foo function
	console.log(age);
}
foo();
console.log(age);


/*variable hoisting ends*/

/*	"this" keyword */

//console.log(this);


/*In a regular function call this keyword always points to the window object*/

/*calculateAges(1985);

function calculateAges(years){
	console.log(2016 - years);
	console.log(this);
}*/

/*==============================*/


var mike ={
	name:'john',
	yearOfBirth: 1990,
	calculateAges: function(){ //THIS EX IS A METHOD(because it is inside an object)
		console.log(this);
		console.log(2016 - this.yearOfBirth);//"this" keyword is now john object

		/*
		function innerFunction(){ //this keyword in now a window object //THIS EX IS A REGULAR FUNCTION(check botsh syntax)
			console.log(this);
		}
		innerFunction();
		*/
	}
}

mike.calculateAges();



/*GENERAL RULE OF THIS KEYWORD*/
/*
1) WHEN A REGULAR FUNCTION CALL HAPPENS THEN THE DEFAULT OBJECT IS THE WINDOW OBJECT*/





var zabuza = {
	name: 'zabuza',
	yearOfBirth: 1994
};


/*method borrowing(from mike)*/

zabuza.calculateAges = mike.calculateAges;
zabuza.calculateAges();


/*THE "this" VARIABLE IS ONLY ASSIGNED A VALUE WHEN THE OBJECT CALLS THE METHOD */