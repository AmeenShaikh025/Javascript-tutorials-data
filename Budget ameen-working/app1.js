/*New*/
/*068   Implementing the Module Pattern*/
/*DATA ENCAPSULATION:  
    Allows us to hide the implementation details of a specific module from the 
    outside scope, so that we only expose a public interface , 
    which is sometimes called an API. */




/*module-1*/

    var budgetController = (function() { //this means(budgetController) variable will be IIFE which will return an object
    /*IIFE creates a new scope that is not visible from the outside scope. */



            /*===To create lots of objects we use function constructor*/

            /*expense function constructor*/
        var Expense = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
            this.percentage = -1;/*when something is not defined we use -1*/
        };


        Expense.prototype.calcPercentage = function(totalIncome) { 
            if(totalIncome > 0){
                this.percentage = Math.round((this.value / totalIncome) * 100);
            }else{
                this.percentage = -1;
            }
        };


        Expense.prototype.getPercentage = function() { 
            return this.percentage;
        };



        var Income = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };


            /*if we need methods in 'Income' and 'Expense' we can add them in the prototype property of the
             function constructor*/

        var calculateTotal = function(type) {
            var sum = 0;
            data.allItems[type].forEach(function(cur) { //"forEach()" expects a callback function.//cur--> points to current element
                sum += cur.value;//value is the name  that we gave in the Income/Expense Constructor
            });

            data.totals[type] = sum;// Storing the values in our Data structure-->'totals'

            /*
            sum=0
            [200, 400, 100]
            sum = 0 + 200
            sum = 200 + 400
            sum = 600 + 100 = 7==

            */    
        };

             /*It is always better to have one data structure where all of our data goes,
              instead of random variables and arrays  */

              /*   Instead of these arrays and variables use object    

                    var allExpenses = [];
                    var allIncomes = [];
                    var totalExpenses = 0;
              */


            /*Data Structure for storing*/

            /*storing the data in an Object*/
            var data = {
                allItems: {
                    exp: [],
                    inc: []
                },
                totals: {
                    exp: 0,
                    inc: 0
                },
                budget: 0,
                percentage: -1/*we set it to -1 because it doesn't exists*/
             };





             /*===Public module to access, return obj(closure)*/

                return {
                    addItem: function(type, des, val) {
                        var newItem, ID;

                        //[1 2 3 4 5], next ID = 6
                        //[1 2 4 6 8], next ID = 9
                        //ID = last ID + 1

                        //Create a new ID
                        
                        if (data.allItems[type].length > 0) {
                            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                        } else {
                            ID = 0;
                        }
                                

                                //Create new item based on 'inc' or 'exp' type
                        if (type === 'exp') {
                            newItem = new Expense(ID, des, val);
                        } else if (type === 'inc') {
                            newItem = new Income(ID, des, val);
                        }


                        //Push it into our data structure

                        data.allItems[type].push(newItem);
                        

                        //Return the new element
                        return newItem;//to use

                    },


                    deleteItem: function(type, id){
                        var ids, index;

                        //id = 6, to delete
                        //data.allItems[type][id];
                        // ids = [1 2 4 6 8],
                        //index = 3

                        /*"map" is similar to "forEach()" it also receives a callback function , 
                          which also has access to current element, current index and the entire array */

                       /*The difference b/w map and forEach is map actually returns a brand new array*/   
                        ids = data.allItems[type].map(function(current) { 
                            return current.id;
                        });


                        index = ids.indexOf(id);


                        if (index !== -1){
                            data.allItems[type].splice(index, 1);//it will remove the index element,
                            // and 1 is the quantity of the element to be removed. 

                        }

                    },


                    /*077 - video*/
                    calculateBudget: function(){

                        //calculate total income and expenses
                        calculateTotal('exp');
                        calculateTotal('inc');

                        //calculate the budget: INCOME - EXPENSES
                        data.budget = data.totals.inc - data.totals.exp;

                        //Gloabal percentage
                        //Calculate the percentage of income that we spent
                        if(data.totals.inc > 0){// so that if we enter expenses first percentge should not be infinity (exp=200, inc=0 ; 200/0 = infinity)
                            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                        }else{
                            data.percentage = -1; //-1,which is non existance                          
                        }

                        /*Example
                        1.Expense = 100 and income 200, spent 50% = 100/200 = 0.5 * 100
                        2.Expense = 100 and income 300, spent 33.3333% = 100/300 = 0.3333 * 100
                        */
                    },


                    calculatePercentages: function() {
                        /*
                        a=20
                        b=10
                        c=40
                        income = 100

                        percentages for each be:
                        a = 20 / 100 = 20%
                        b = 10/100=10%
                        c= 40/100=40%
                        */



                        /*Percentage is only for expense*/
                        data.allItems.exp.forEach(function(cur) { 
                            cur.calcPercentage(data.totals.inc);
                        });
                    },    

                    getPercentages:  function(){

                        /*we should use map instead forEach, because using map we can store the array in a variable as shown below*/
                        var allPerc = data.allItems.exp.map(function(cur) {
                            return cur.getPercentage();
                        });
                        return allPerc;
                    },


                    getBudget: function(){// to return the calculated budget above to budgetController
                        /*we want to return the four values above, & the best way is by returning object*/
                        return {
                            budget: data.budget,
                            totalInc: data.totals.inc,
                            totalExp: data.totals.exp,
                            percentage: data.percentage
                        };
                    },

                    testing: function() {
                        console.log(data);
                    }

                };


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
            inputBtn: '.add__btn',
            incomeContainer: '.income__list',
            expensesContainer: '.expenses__list',
            budgetLabel:'.budget__value',
            incomeLabel:'.budget__income--value',
            expenseLabel:'.budget__expenses--value',
            percentageLabel:'.budget__expenses--percentage',
            container:'.container',
            expensesPercLabel:'.item__percentage',
            dateLabel:'.budget__title--month'
        };


        var formatNumber =  function(num, type){
                var numSplit, int, dec;

                /*
                + or - before the number

                exactly 2 decimal points
    
                comma seperating th thousand


                ex: 2310.4567 -> + 2,310.46

                2000 -> + 2,000.00

                */

                num = Math.abs(num);//abs --> stands for absolute, which removes the sign + / -
                num = num.toFixed(2);//method of number prototype, which puts exactly two decimals on the number

                numSplit = num.split('.');//stored as a string

                int = numSplit[0];
                if(int.length > 3){
                    /*int = int.substr(0,1) + ',' + int.substr(1,3);*/ //input 2310, output 2,310
                    int = int.substr(0,int.length - 3) + ',' + int.substr(int.length - 3,3);//for ip: 23510 op:23,510
                }

                /*decimal part*/
                dec = numSplit[1];


                /*type === 'exp' ? sign = '-' : sign = '+';
*/
                return (type === 'exp' ? '-' : '+') + ' ' + int + '.' +  dec;//number formating
            };


            var nodeListForEach = function(list, callback) {
                    for(var i = 0; i < list.length; i++){
                        callback(list[i], i);
                    }
            };

        return {
            getInput: function() {

            /*How do we return three values at the same time ?*/

            /*The best solution is to return an object containing these three as properties*/
                return{
                    type : document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                    description : document.querySelector(DOMstrings.inputDescription).value,
                    value :parseFloat(document.querySelector(DOMstrings.inputValue).value)//parseFloat() will convert a string to floating number(a number with decimals)
                };

                /*var type = document.querySelector('.add__type').value; // will be either inc or exp
                var description = document.querySelector('.add__description').value;
                var value = document.querySelector('.add__value').value;*/
            },


            /*Adding / displaying the entered items on UI*/
            addListItem: function(obj, type){

                // Create HTML strings with placeholder text
                var html, newHtml, element;

                if(type === 'inc'){

                //=== use single quotes or double quotes depending on the quotes used for class or if you use double quotes for all it only considers "<div class=" as a string. Use vice-versa
                
                //=== here %id%, %description% and %value% are placeholders
                    element = DOMstrings.incomeContainer;

                    html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                
                }else if(type === 'exp'){
                    
                    element = DOMstrings.expensesContainer;
                    html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                
                }

                // Replace the placeholder text with some actual data

                //=== replace is a string function and html is a string we can use it on it(html variable)
                    newHtml = html.replace('%id%', obj.id);
                    //=== now we have to replace the text in 'newHtml' as we have changed the text in 'html' variable and assigned to 'newHtml'
                    newHtml = newHtml.replace('%description%', obj.description);
                    newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));


                // Insert the HTML into the DOM 


                //'beforeend' the element will be inserted as the last element in the 'income__list' or 'expenses__list'
                //check "insertAdjacentHTML" for the MDN reference
                document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            },



            deleteListItem: function(selectorID){
                /*In javascript, we can't just delete an element we have to remove a child*/
                var el = document.getElementById(selectorID);

                el.parentNode.removeChild(el);

            },


            /*=====******Clearing Input fields after use********======*/

            clearFields: function(){
                var fields, fieldsArr;
                fields = document.querySelectorAll(DOMstrings.inputDescription + ', '+ DOMstrings.inputValue);
                //===use ', ' to seperate the classes using querySelectorAll() for multiple values

                //===querySelectorAll() always returns a "list" so we have to convert it to an array.
                //===we can use 'slice' method, which returns a copy of an array on which it is called upon.
                //===now we can trick 'slice()' by passing a list and it will convert it to an array

                //"fields.slice()"--> Will not work on lists because it is not an array and we cannot call array methods on the lists, so
                //=== Instead, we can call slice method using the call() method, and then passing the fields variable into it,  so that it becomes "this" variable

                fieldsArr =  Array.prototype.slice.call(fields);//slice method is stored in array prototype, so we can use it from there.

                /*if we want to clear many fields*/
                fieldsArr.forEach(function(current, index, array) {//"forEach()" expects a callback function.
                    /*the function in forEach has access to 'current value', 'current index' and 'current_array'*/

                    current.value = "";

                });

                fieldsArr[0].focus();//To bring focus back to the first fields, since it's array and zero based.

            },

            displayBudget: function(obj){
                var type;
                obj.budget > 0 ? type = 'inc' : type = 'exp';

                document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);/*textContent, because we only want to change the value.*/
                document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
                document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
                

                if(obj.percentage > 0){
                    document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%'; 
                }else{
                    document.querySelector(DOMstrings.percentageLabel).textContent = '---';
                }

            },

            /*087*/
            displayPercentages: function(percentages){

                var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);//this returns a list called "nodeList"


                //our own function for list 
                nodeListForEach(fields, function(current, index) { 
                    
                    if(percentages[index] > 0){
                        current.textContent = percentages[index] + '%';
                    }else{
                        current.textContent = '---';
                    }
                });
            },

            displayMonth: function() {
                var now, year, month, months;

                now = new Date();
                //var christmas = new Date(2016, 11, 25);

                months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                month = now.getMonth(); /*getMonth() is a function of Date()*/

                year = now.getFullYear();/*getFullYear() is a function of Date()*/
                document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
            },

            changedType: function(){ 

                var fields = document.querySelectorAll(
                    DOMstrings.inputType + ',' +
                    DOMstrings.inputDescription + ',' +
                    DOMstrings.inputValue);/*this returns a node list, so we can't use forEach*/

                nodeListForEach(fields, function(cur){
                  cur.classList.toggle('red-focus');  
                });


                document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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
            //keycode or which property is stored in event argument
                //console.log(event);

                if(event.keyCode === 13 || event.which === 13){ //"keyCode" property is of event,13 is enter keyCode, "which" property for older browsers 
                    
                    //console.log('Enter was pressed');

                    ctrlAddItem();
                }
            });


            /*081 - EVENT DELEGATION*/
            /*Setting event listener for deleting a row*/

            document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
            /*using the class container for catching all the event bubbling*/
            /*class 'container' is the first element that all of the income and expense item have in common.*/

            document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

        };

    
        var updateBudget = function() {

            //1. Calculate the budget
                budgetCtrl.calculateBudget();


            //2. Return the budget
                var budget = budgetCtrl.getBudget();


            //3. Display the budget on the UI
                UICtrl.displayBudget(budget);                

        };


        var updatePercentages = function() { 
            //1. Calculate the percentages
            budgetCtrl.calculatePercentages();

            //2. Read percentages from the budget controller
            var percentages = budgetCtrl.getPercentages();

            //3. Update the UI with the new percentages
            UICtrl.displayPercentages(percentages);

        };

        /*custom function for both button click and key press, which will do same work*/
        /*DRY*/

        var ctrlAddItem = function(){
            var input, newItem;


            //1. Get the field input data

            input = UICtrl.getInput();
            //console.log(input);

            //To check if the value in the description & the value should not be empty.also value should not be 'NaN'
            if(input.description !== "" && !isNaN(input.value) && input.value > 0){ 

                //2. Add the item to the budget controller
                /*budgetCtrl.addItem(input.type, input.description, input.value);*/

                //since it(addItem() in bugdgetcontroller) returns a value, we have to store it
                newItem = budgetCtrl.addItem(input.type, input.description, input.value);



                //3. Add the item to the UI

                UICtrl.addListItem(newItem, input.type);


                //4. Clear the fields(input fields after enter/ button is pressed)

                UICtrl.clearFields();

                //5. calculate and update budget

                updateBudget();

                //6. Calculate and update the percentages
                updatePercentages();


            }

            
        };



        /*081*/
        var ctrlDeleteItem = function(event){
            var itemID, splitID, type, ID;


            /*console.log(event.target);*///it returns a html node in the DOM

            /*TO move up in the DOM we just use the below command*/
            itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;//DOM Traversing.

            if (itemID){

                //inc-1 

                splitID = itemID.split('-');/*returns an array, for breaking up strings into different parts*/
                type = splitID[0];//returns "inc" from "inc-1"
                ID = parseInt(splitID[1]);//returns "1"(Second element) from "inc-1"

                /*we have to convert the ID into a Integer */



                //1. delete the item from the data structure
                budgetCtrl.deleteItem(type, ID);

                //2. Delete the item from the UI
                UICtrl.deleteListItem(itemID);


                //3. Update and show the new budget
                updateBudget();

                //4. Calculate and update the percentages
                updatePercentages();            

            }

        };



        //now we should call setupEventListener fuctn because previously it was in the module, but now it is in a function
        /*Public initialization(init) function to access the setupEventListener function*/
        /*since we want it to be public, we have to return it in object*/


        return{
            init: function(){
                console.log('Application has started.');
                UICtrl.displayMonth();
                UICtrl.displayBudget({  /*Instead of passing the 'budget object' we pass all the values of datastructure and set it to zero except % to -1 */
                            budget: 0,
                            totalInc: 0,
                            totalExp: 0,
                            percentage: -1
                        });/*to set evrything in the fields to zero*/
                setupEventListener();
            }
        };    



    })(budgetController, UIController);//now this controller knows about the other 2 modules 
                                       //and can use their code 


controller.init();//without this line of code nothing will happen





















