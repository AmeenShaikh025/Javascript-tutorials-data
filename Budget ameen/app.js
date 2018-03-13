/*Old*/

/*068   Implementing the Module Pattern*/
/*DATA ENCAPSULATION:  
    Allows us to hide the implementation details of a specific module from the 
    outside scope, so that we only expose a public interface , 
    which is sometimes called an API. */




/*module-1*/

    var budgetController = (function() { //this variable will be IIFE which will return an object
    /*IIFE creates a new scope that is not visible from the outside scope. */

    
        var x =23;

        var add = function(a) {
            return x + a;//private
        }

        return{
            publicTest: function(b){//return object
                return add(b);//public
            }
        }
    

    })();


/*module-2*/ /*seperation of concern */

    var UIController = (function() {
        //some code
    })();




/*Module-3 (Global app CONTROLLER) */


    /* Modules can also return arguments because there are just function expressions,so we can pass
    arguments into them */

    var controller = (function(budgetCtrl, UICtrl) {

       /* budgetController.publicTest();  we can access the budget controller module inside here
            like this but it is not a good practice*/ 


      var z = budgetCtrl.publicTest(5);


        return {
            anotherPublic:function() {//to access the var z (Closures)
                console.log(z);
            }
        }
    



       /* document.querySelector('.add__btn').addEventListener('click', function(){
            console.log('button was clicked');
        });*/


    })(budgetController, UIController);//now this controller knows about the other 2 modules and can use their code 




