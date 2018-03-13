/*056 First class functions*/

/*
1. A function is an instance of the Object type;
2. A function behaves like any other object;
3. We can store functions in a variable;
4. We can pass a function as an argument to another function;
5. We can return a function from a function.



Because of all the above we say in javascript we have "first class function"
*/


//056 Lecture:  Passing functions as arguments


console.log('O/P of 056 below');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
	var arrRes = [];
	for( var i =0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge(el){
	return 2016 - el;
}

//2nd function


function isFullAge(el){ //el - is vario gneric parameter name.
	return el >= 18;

}

//3rd function



function maxHeartRate(el){

	if(el >=18 && el <=81){
		return Math.round( 206.9 - (0.67 * el));	
	}else{
		return -1;
	}
	
}





var ages = arrayCalc(years, calculateAge);// We don't call the calculateAge()-->function here,
// because it is call back function and will be called
//in arrayCalc(arr, fn) --> "fn" part , so we don't use the paranthesis here in calculateAge.
//fn --> is a callback function-->(a function which is calling another function is a callback function.)

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


























