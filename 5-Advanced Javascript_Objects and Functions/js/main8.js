console.log('Bind_call and Apply Below');

/*=========================================
===========================================
060 Bind_call and Apply  */

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style,timeOfDay){
        if(style === 'formal'){
            console.log(' Good '+timeOfDay + ', Ladies and gentlemen! I\'m '+ this.name+ ',I\'m a '+this.job+' and I\'m '+this.age +' years old');
        }else if(style === 'friendly'){
            console.log('Hey! what\'s up? I\'m '+ this.name+ ',I\'m a '+this.job+' and I\'m '+this.age +' years old. Have a nice '+timeOfDay);
        }
    }
}

var emily = {
    name: 'Emily',
    age: 30,
    job: 'designer'
}


john.presentation('formal', 'morning');

// 1. Method borrowing

//the call method allows us to set this variable, and we set it to emily, because we want to use john's presentation method
//in emily
john.presentation.call(emily, 'friendly', 'afternoon');

//2. Apply method
//it accepts this variable and an argument as an Array.

//john.presentation.apply(emily, ['friendly','afternoon']);
/*Since the function presentation doesn't take array as an argument, we do this later. */

//3. Bind

//bind is similar to call but instead it creates a copy of the function, so we can store it somewhere.
//bind is used to create a copy of the function with a preset argument  
var johnFriendly = john.presentation.bind(john, 'friendly');//bind(john..) returns a function

johnFriendly('morning');

johnFriendly('night');//currying js


var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');





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


function isFullAge(limit, el){ //el - is vario gneric parameter name.
	return el >= limit;

}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages,isFullAge.bind(this, 20));//20 preset argument for the limit

console.log(ages);
console.log(fullJapan);
