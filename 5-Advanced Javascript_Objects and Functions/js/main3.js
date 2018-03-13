/*055 Lecture*/


console.log('O/P of 055 Lecture')



//Premitives vs Objects

//===============difference======================
/*
	Primitives: Variables containing primitives actually hold the data inside of the variable itself.

	Objects: Variables associated with objects do not actually contain the object, but instead contain a reference to the place
	in memory where the object sits/stored.

*/



//Primitives
var a = 23;
var b = a;//a copy was created

a = 63;
console.log(a);//63
console.log(b);//23





//Objects
var obj1 = {
	name:'John',
	age:26
};


var obj2 = obj1;// no copy was created, only a refernce was created.which points to the first object.
obj1.age = 30;
console.log(obj1.age);//30
console.log(obj2.age);//30







//Functions

var age = 27;
var obj ={
	name:'Jonas',
	city:'Lisbon'
};

function change(a, b) {
	// body...
	a = 30;//when you pass a primitive into a function a copy is created, but it will never effect varible on the outside,
	//because it is a primitive

	b.city = 'San Francisco'//But, when we pass an object, only the reference of the object is passed ,
	//so if we change the object inside the function it will 
	//still save the changes outside the function

}


change(age, obj);
console.log(age);//27
console.log(obj.city);//San Francisco















