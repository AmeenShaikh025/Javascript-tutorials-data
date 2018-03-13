/*051 - VERY IMPORTANT*/
//SUMMARY
/*==================PROTOTYPE CHAIN========================

	1) Every JavaScript object has a "prototype property", which makes inheritance possible in JavaScript;
	2) The prototype property of an object is where we put methods and properties that we want
	   "other objects to inherit";
	3) The Constructor's prototype property is "NOT" the property of the Constructor itself,
	   it's the prototype of ALL instances that are created through it:
	4) When a certain method (or property) is called, the search starts in the object itself, 
	   and if it cannot be found, the search moves on to the object's prototype.
	   This continues until the method is found:"property Chain".

*/

/*052*/

//Function constructor

var john= {
	name:'John',
	yearOfBirth:1990,
	job:'teacher'
};

var Person = function(name, yearOfBirth, job){  //aLWAYS WRITE FUNCTION CONSTRUCTOR's first letter as CAPITAL LETTERS (ex:  Person)
//parameters of function are the variables that we want to set in the object
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job =job;

}

/*===================Inhritance========
to permofrm inheritance we have to add all the methods and properties that we want to be inherited into the constructors
 "prototype - property "

*/


//Inheriting Methods
Person.prototype.calculateAge = function(){
		console.log(2016 -this. yearOfBirth);
	};

//Inheariting property
Person.prototype.lastName = 'Smith';


var john = new Person('John',1990,'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();


/*053*/

/*========Only about the console==========*/







console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);






