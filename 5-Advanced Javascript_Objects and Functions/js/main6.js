/*058 Lecture Immediately Invoked function Expression (IIFE)*/

console.log('058 Immediately Invoked Function Expression (IIFE) O/P below');

/*function game(){
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();*/


/*====IIFE==========
1. writing function in paranthesis will trick the parser in believing
that it is expression but not a declaration.

2. Because in javascript what's inside of paranthesis cannot be a statement

3. After that we invoke the function


4. using IIFE we can no longer access "score" variable outside the function
   so we created "data privacy" here.

5. We can call IIFE only once, as it is not assigned to any variable.
*/





(function (){
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

//console.log(score);//erro



//adding the parameter
(function (goodluck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodluck);
})(5);//passing 5 as an argument
























