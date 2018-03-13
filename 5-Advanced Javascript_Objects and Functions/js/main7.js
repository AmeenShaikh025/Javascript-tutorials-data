console.log('Output of the closures below');


/*===================================
Lecture 059 closures=================*/

/* An inner function always has access to the variables and parameters of it's outer function,
   even after the outer function has returned. */


function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age )+ a);
    }
}

var retirementUS = retirement(66);
//retirementUS(1990);
var retirementGermany = retirement(65);
var retirementIsland = retirement(67);

retirementGermany(1990);
retirement(66)(1990);
retirementIsland(1990);


function interviewQuestion(job){

    return function(name){
        if(job === 'designer'){
            console.log(name + ', can please explain what UX design is?  ');
        }else if(job === 'teacher'){
            console.log('What subjects do you teach, '+ name + '?');
        }else{
            console.log('Hello' +name+'What do you do? ');
        }       
        
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');

interviewQuestion('teacher')('Ameen');