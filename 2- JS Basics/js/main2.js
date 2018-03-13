

/* FROM 011 */

//=======Lecture Operators

var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 *2;//* has higher precedence than '-''

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 +5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26
ageJohn++;
//ageJohn = ageJohn + 1;
//ageJohn += 1;

ageMark *=2;
//ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);



//======Lecture if/else

var name = 'John';
var age= '26';
var isMarried = 'no';

if(isMarried === 'yes'){//comparison operator(===,  ==)
	console.log(name+ ' is married' );
}
else{
	console.log(name+ ' is not married');
}

isMarried = false;

if(isMarried){
	console.log('yes');
}
else{
	console.log('no');
}


isMarried = true;


if(isMarried){
	console.log('yes');
}

/*== does type coversion
=== does not do type coversion/conversion*/

if(23 == "23"){
	console.log('somethin to print...');
}


if(23 === "23"){
	console.log('somethin to print...');
}
else{
	console.log('not the same thing');//Always use === for comparison
}





/*Lecture : Boolean logic and switch*/

var age = 25;
if(age < 20){
	console.log('John is a teenager');
}else if(age >= 20 && age < 30){
	console.log('john is young man');
}
else{
	console.log('John is a man');
}





var job = 'teacher';

job = prompt('What does John do ?');

switch(job){
	case 'teacher':
		console.log('John teaches kids');
		break;
	case 'driver':
		console.log('John drives a car in Newyork');
		break;
	case 'cop':
		console.log('John fights bad guys');
		break;
	default:
		console.log('John does something else');
}




