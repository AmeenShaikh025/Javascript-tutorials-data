var years = new Array(1970,1999,1985);
var ages = [];

for(var i = 0; i < years.length; i++){
	/*var temp =[] ;
	temp[] = years[i];*/

	ages[i] = 2018 - years[i];
}

//console.log(ages);

for(i = 0; i < ages.length; i++){
	if(ages[i] >=18){
		console.log('person '+ (i+1)+' is '+ages[i] + ' years old, and is of full age.');
	}
	else{
		console.log('person '+ (i+1)+' is '+ages[i] + ' years old, and is not of full age.');
	}
}




	function printFullAge(years){

		var ages = [];
		var fullAges = [];
		for(var i = 0; i < years.length; i++){
			/*var temp =[] ;
			temp[] = years[i];*/

			ages[i] = 2018 - years[i];
		}

		//console.log(ages);

		for(i = 0; i < ages.length; i++){
			if(ages[i] >=18){
				console.log('person '+ (i+1)+' is '+ages[i] + ' years old, and is of full age.');
				fullAges.push(true);
			}
			else{
				console.log('person '+ (i+1)+' is '+ages[i] + ' years old, and is not of full age.');
				fullAges.push(false);
			}
		}
		return fullAges;
	}

var years = new Array(1970,1999,1985);
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915,1999]);