**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**


**getElementById:**
This is the fastest method because when it is called by a unique number by Id. It gets the Element ID number from HTML.

**getElementByClassName():**
It calls the class name property from the HTML file. collect from Dom.

**querySelector():**
The querySelector() function returns the first element in the document that matches the provided CSS selector(s). If there are many items, it returns the result for the first one that matches.

**querySelectorAll():**
The querySelectorAll() method returns all elements that match a CSS selector(s), and it returns a NodeList.

**3. What is Event Bubbling? And how does it work?**

_**Event Bubbling:**_
Event bubbling is a process in JavaScript where an event starts from the target element and then propagates (bubbles) upward through its parent elements in the DOM hierarchy.

**_How it works:_**
When an event (like a click) occurs on a child element:
The event first runs on the target element.
Then it moves up to its parent element.
Then to the parent.parent..
It continues up until it reaches the document.

**2. How do you create and insert a new element into the DOM?**

To create and insert a new element into the DOM, first create it with document. To add content or attributes, use textContent, innerHTML, or classList.add(). Finally, place the element into the DOM using append() or appendChild(). 

**4. What is Event Delegation in JavaScript? Why is it useful?**

Event Delegation is a JavaScript technique where, instead of adding separate event listeners to many child elements, a single event listener is added to their common parent element. It works through event bubbling. When an event (such as a click) occurs on a child element, the event bubbles up to the parent element. The parent’s event listener then uses event.target to determine which child element triggered the event.

First, it improves performance because it reduces the number of event listeners that need to be created. Second, it works automatically for dynamic elements (elements added to the DOM later using JavaScript), so its not need to attach new listeners to them. Third, it keeps the code cleaner and easier to maintain.

**5. What is the difference between preventDefault() and stopPropagation() methods?**

The preventDefault() and stopPropagation() are javaScript Mathod, but they serve different purposes.

_The preventDefault()_ stops the default behaviour of an element. 

_The stopPropagation()_ stops the event from bubbling up to parent elements.






