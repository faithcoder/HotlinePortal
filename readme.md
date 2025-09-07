1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById

Returns a single element whose id matches the given value.

Example:

var header = document.getElementById('header');


Only works with id, and returns one element.

getElementsByClassName

Returns a live HTMLCollection of all elements with the given class name.

Example:

var items = document.getElementsByClassName('item');


Multiple elements can be returned. HTMLCollection is live, so it updates automatically if DOM changes.

querySelector / querySelectorAll

querySelector returns the first element that matches a CSS selector.

querySelectorAll returns all matching elements as a static NodeList (does not auto-update).

Examples:

var firstItem = document.querySelector('.item'); // first matching element
var allItems = document.querySelectorAll('.item'); // all matching elements


Summary:

Use getElementById for single id.

Use getElementsByClassName for all elements of a class, live collection.

Use querySelector/querySelectorAll for CSS selector flexibility, returns NodeList.

2. How do you create and insert a new element into the DOM?

Steps to create and insert elements:

Create an element

var newDiv = document.createElement('div');


Add content or attributes

newDiv.textContent = 'Hello World';
newDiv.className = 'my-div';


Insert into DOM

var parent = document.getElementById('container');
parent.appendChild(newDiv); // adds at the end


You can also use insertBefore to insert at a specific position.

3. What is Event Bubbling and how does it work?

Event Bubbling is when an event starts from the target element and propagates up through its parent elements.

Example:

<div id="parent">
    <button id="child">Click Me</button>
</div>

document.getElementById('parent').onclick = function() {
    alert('Parent clicked');
}
document.getElementById('child').onclick = function() {
    alert('Child clicked');
}


When you click the button, first the child’s click runs, then parent’s click runs. This is bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is attaching a single event listener to a parent element instead of multiple children.

Example:

document.getElementById('parent').onclick = function(e) {
    if (e.target && e.target.tagName === 'BUTTON') {
        alert('Button ' + e.target.textContent + ' clicked');
    }
}


Why useful:

Reduces memory usage (fewer event listeners).

Automatically works for dynamically added elements.

Handles multiple child elements efficiently.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()

Prevents the default browser behavior of an element.

Example:

document.getElementById('link').onclick = function(e) {
    e.preventDefault(); // link will not navigate
    alert('Link clicked');
}


stopPropagation()

Stops the event from bubbling up to parent elements.

Example:

document.getElementById('child').onclick = function(e) {
    e.stopPropagation();
    alert('Child clicked');
}


Parent elements will not receive the click event.