// 057Lecture: Function returning functions



console.log('057 Functions returning functions');

function interviewQuestion(job){
	if( job === 'designer'){

		return function(name){
			console.log(name + ', can you please explain what UX design is?');
		}

	} else if( job === 'teacher'){

			return function(name){
				console.log('What subject do you teach, ' + name + '?');
			}

		} else {
			return function(name){
				console.log('Hello' +name+ ' What do you do? ');
			}
		}
	}




var teacherQuestion = interviewQuestion('teacher');// it is like storing function expression in a variable
teacherQuestion('John');//we are calling variable teacherQuestion which is now a function & will put John into it

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');



designerQuestion('Mark');
designerQuestion('Mike');



interviewQuestion('teacher')('Mark');