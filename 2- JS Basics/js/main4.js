/* 019 to  */
///Lecture: Objects

//console.log('Hi');

//In obects we don't have a particular order

var john = {		//if less objects use this
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};
console.log(john);

//Retriving/Read objects
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
//now var xyz has 'job', and now it is same as above

console.log(john[xyz]);

john.lastName = 'Miller';//Variable Mutation
john['job'] = 'programmer';
console.log(john); 


//another way to create an object

var jane = new Object();//if more objects use this method
jane.name = 'jane';
jane.lastName = 'smith';
jane.yearOfBirth = 1969;
jane.job = 'retired';
jane.isMarried = true;

console.log(jane);


/////====Lecture: Objects and Methods
//objects can contain functions and arrays, these functions are called methods ex:pop()



//===============version-1.0
/*
var john = {		//if less objects use this
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane','Mark','Bob']//<--Array,
	calculateAge: function(){//function expression
		return 2016 - this.yearOfBirth;
	}
};*/


//console.log(john);
//console.log(john.family);
//console.log(john.family[2]);
//console.log(john.calculateAge(1990));
// /console.log(john.calculateAge(john.yearOfBirth));
//console.log(john.calculateAge());


//var age = john.calculateAge();
//john.age = age;// adding john's age into object

//console.log(john);


////===========version-2.0

var john = {		//if less objects use this
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane','Mark','Bob'],//<--Array,
	calculateAge: function(){//function expression
		this.age = 2016 - this.yearOfBirth;//this refers to john object
	}
};

//PROPERTIES OF john are: name,lastName,job....etc and calculateAge is the method

john.calculateAge();
console.log(john);





