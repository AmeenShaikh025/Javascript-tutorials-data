/*080 - EVENT DELEGATION*/

/*Topics to understand:

1.EVENT BUBBLING, 
2.TARGET ELEMENT 
3.EVENT DELEGATION*/


/*example:
	
	<main>
		<section>
			<p>Lorem ipsum dolor sit.</p>
			<p>Lorem ipsum dolor sit amet,
			nec <button>link</button></p>
		</section>
	</main>

*/






/*Defination:(EVENT BUBBLING)
		
means that when an event is fired or triggered on some DOM element (for ex clickng on a button above),
then the exact same event is also triggered on all of the parent elements, 

so again the event is first fired on the button but then it will also be fired on all the parent elements, 
one at a time, 

so it will fire on the paragraph, the section,the main element and, all the way to the "DOM tree" until
the <HTML> element which is the root.


So, we say the EVENT BUBBLES up inside the DOM tree, that's why we say "Event Bubbling".



(TARGET ELEMENT)

The element on which the event was actually first fired ,
So the element that caused the event to happen is called the "TARGET ELEMENT".

so, in our example, it was the button that was clicked.

THE IMPORTANT PART IS , this TARGET element is stored as the property in the event object. 
so, this means all the parent elements on which the event will also fire will know
the target element of the event, where the event was first fired. 






(EVENT DELEGATION)
	
if the event bubbles up in the DOM tree and if we know where the event was fired, then we can simply
attach "EVENT HANDLER" to a parent element and wait for the event to bubble up.and then we can do 
whatever we intended to do with our target element.

This technique is called "EVENT DELEGATION".

In the above example, we can simply add the "EVENT HANDLER" to the <main> element.


*Defination:EVENT DELEGATION*


"EVENT DELEGATION" is to not setup the "EVENT HANDLER" on the original element that we are interested in
but to attach it to a parent element and basically catch the event there, because it bubbles up. and we 
can then act on the element that we are interested in using the target element property


*/


/*USE CASES FOR EVENT DELEGATION

	1. when we have an elemnt with lots of child elements that we are interested in;

	2. When we want an event handler attached to an element that is not yet in the 
		DOM when our page is loaded.

*/


