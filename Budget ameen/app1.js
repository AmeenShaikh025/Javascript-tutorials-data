/*New*/
/*068   Implementing the Module Pattern*/
/*DATA ENCAPSULATION:  
    Allows us to hide the implementation details of a specific module from the 
    outside scope, so that we only expose a public interface , 
    which is sometimes called an API. */




/*module-1*/

    var budgetController = (function() { //this means(budgetController) variable will be IIFE which will return an object
    /*IIFE creates a new scope that is not visible from the outside scope. */

    

    

    })();







/*module-2*/ /*seperation of concern */

    var UIController = (function() {
        
        /* create an object and store all the strings (class names) for querySelector,
        in future if we make changes to these names we have to change every single name which is tough,
        so we create an object and store all the values*/
        
        var DOMstrings = {//an object
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn'
        };





        return {
            getInput: function() {

            /*How do we return three values at the same time ?*/

            /*The best solution is to return an object containing these three as properties*/
                return{
                    type : document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                    description : document.querySelector(DOMstrings.inputDescription).value,
                    value : document.querySelector(DOMstrings.inputValue).value
                };

                /*var type = document.querySelector('.add__type').value; // will be either inc or exp
                var description = document.querySelector('.add__description').value;
                var value = document.querySelector('.add__value').value;*/
            },



            /*we use this so that the controller can access the DOMstrings for querySelector*/
           getDOMstrings: function() {
             return DOMstrings; //exposing DOMstrings object into public
           }

        };


    })();









/*Module-3 (Global app CONTROLLER) */


    /* Modules can also return arguments because they are just function expressions,so we can pass
    arguments into them */

    var controller = (function(budgetCtrl, UICtrl) {

        /*A function in which all our eventlisteners will be saved*/
        var setupEventListener = function(){


            var DOM = UICtrl.getDOMstrings();


            /*1.========== for click of an event=======*/

            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
            /*we don't need to call ctrlAddItem(), because it is a callback function and addEventListener will call it for us*/






            /*2.======== for pressing Enter/return key======= */

            /*case 2: when you press enter/return key it will also trigger*/

            /*add eventListener to global document*/
            /*the key press event doesn't happen on any specific element but on global webpage/document*/
            
            
            document.addEventListener('keypress', function(event) {//passing event / e argument to the function
            //we use "event" argument so that we can use the 'keyCode' or 'check' property for 'Enter' or other key press events

                //console.log(event);

                if(event.keyCode === 13 || event.which === 13){ //"keyCode" property is of event,13 is enter keyCode, "which" property for older browsers 
                    
                    //console.log('Enter was pressed');

                    ctrlAddItem();
                }
            });

        };

  



        /*custom function for both button click and key press, which will do same work*/
        /*DRY*/

        var ctrlAddItem = function(){
            //1. Get the field input data

            var input = UICtrl.getInput();
            //console.log(input);

            //2. Add the item to the budget controller

            //3. Add the item to the UI

            //4. Calculate the budget

            //5. Display the budget on the UI
            //console.log('It Works');
        };


        //now we should call setupEventListener fuctn because previously it was in the module, but now it is in a function
        /*Public initialization(init) function to access the setupEventListener function*/
        /*since we want it to be public, we have to return it in object*/


        return{
            init: function(){
                //console.log('Application has started.');
                setupEventListener();
            }
        };    



    })(budgetController, UIController);//now this controller knows about the other 2 modules 
                                       //and can use their code 


controller.init();//without this line of code nothing will happen





















