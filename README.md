1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById: a. id element selected, b. Only one element returned.
getElementsByClassName: a. Method of Document, b. Representing the class name, c. multiple class names are separated by whitespace.
querySelector: a. CSS selector, b. only matching element returned, c. One or more CSS selectors.
querySelectorAll: a. selected matching element, b. nodeList array-like collection of node.
2. How do you create and insert a new element into the DOM?
Ans: Create New Element: const newElement = document.createElement("div");, Insert: newElement.id = 'NewElement';, newElement.textContent = 'This is my New Element';, newElement,classList.add('New Text');
3. What is Event Bubbling and how does it work?
Ans: If any event is clicked, then the element starts from parent > grandparent > body > document. 
4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage event triggered by its child elements, rather than adding separate event listeners to each child.
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault(): a. Element default behavior off, b.  HTML element and event type has a default behavior defined by the browser.
stopPropagation(): a. Stop the propagation of an event up or down the DOM tree, b. addresses the event's propagation through the DOM.
