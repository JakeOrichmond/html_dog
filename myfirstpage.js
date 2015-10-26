<script>
	alert("Hello World.");
</script>
// A WHILE loop repeats a block of code WHILE a condition is true.
// Like and IF statement, the condition is found in the parentheses.
var i = 1;
while (i<10) {
	alert(i);
	i = i+1;
}

// A FOR loop is similar to an IF statement, but combines three-
// semicolon-seperated pieces of information between the parentheses:
// Initializaton, condition, and a final expression.
// The initialization part is for creating a variable to let you track
// how far through the loop you are - like i in the WHILE example;
// the condition is where the looping logic goes - the same as the condition
// in the while example; and the final expression is run at 
// the end of every loop. 

for (var i = 1; i < 10; i++){
	alert(i);
}

// Functions are reusable blocks of code that carry out a specific task.
// To execute the code in a function you call it. A function may be passed
// arguments to use, abd a function may return a value to whatever called it.

// You can save functions as the value of a variable, and you call a function
// using this variable and a pair of parentheses. This is also called invoking 
// the function.

doSomething();
findAnInterestingThing();

// To create a function, use the function keyword. You then list the arguments
// in parentheses, and then supply a block that contains the function's code.
// Here's a function that adds two numbers:

var add = function (a,b) {
	return a + b;
};

// a and b are the function's parameters, and the value it returns is signified by
// the return keyword. The return keyword also stops execution of the code in the 
// function; nothing after it will be run.

var result = add(1,2); // result is now 3

// This calls add with the arguments 1 and 2, which, inside add. will be saved in the 
// variables a and b.

// JavaScript objects are like real life objects; they have properties and abilities.
// A JavaScript object is, in that sense, a collection of named properties and
// methods - a function. An object can be stored in a variable, and the properties 
// and methods acessed using the dot syntax. A human, for example, has a name and an age,
// and could talk, move or learn JavaScript. Name and age are properties of the human, and 
// are essentially pieces of data. Talking, moving, and learning are more like functions,
// there is some complex behavior involved. When a JavaScript object has such an ability,
// it is called a method.

// Variables can hold objects, and creating an object is done using a special syntax
// signified by braces:

var jedi = {
	name: "Yoda",
	age: 899,
	talk: function () { aler("another... Sky... walk..."); }
};

// In the above example the Jedi's name and age are properties - they are essentially
// variables within the object and can store anything a variable can. talk is a property
// that holds a function - a method.

// You can get back data out of an object using the dot syntax:
// Examples:

jedi.name;

jedi.age;

jedi.talk();

// You can also reassign properties of an object:

jedi.name = "Mace Windu";

// and add new ones on the fly:

jedi.lightsaber = "Purple";

// Properties can be any kind of data including objects and arrays. Adding an object as a 
// property od another object creates a nested object:

var person = {
	age: 122;
};

person.name = {
	first: "Jeanne";
	last: "Calment";
};

// Creating an empty object and adding properties and methods to it is possible too:

var dog = {};

dog.bark = function() { alert("Woof!"); };

// Arrays are a list of any kind of data, including other arrays. Each item in the array
// has an index - a number - which can be used to retrieve an element from the array.

// The indices start at 0; that is, the first element in the array has the index 0, and 
// subsequent elements have incrementally increasing indices, so the last element in the
// array has an index one lees than the length of the array.

// In JavaScript, you creat an array using the array-literal syntax:

var emptyArray = [];

var shoppingList = ['Milk', 'Bread', 'Beans'];

// You retreive a specific element from an array using square bracket syntax:

shoppingList[0];
// Milk

// It's also possible to set the value at a particular index, again using the square
// bracket syntax:

shoppingList[1] = 'Cookies';
// shoppingList is now ['Milk', 'Cookies', 'Beans']

// You can find the number of elements in the array using its length property:

shoppingList.length;
// 3

// You can use push and pop methods to add and remove elements from the end of an array:
shoppingList.push('A new car');
// shoppingList is now ['Milk', 'Bread', 'Beans', 'A new car']

// Here's an example that creates, pushes, pops, and iterates over an array, passing each
// passing each name to a function called helloFrom. helloFrom returns a string with a 
// greeting: "Hell from" and then the person's name. After the pushing and popping, the
// final list of people is: "Tom", "Yoda", "Ron" and "Bob".

var helloFrom = function (personName){
	return "Hello from" + personName
}

var people = ['Tom', 'Yoda', 'Jim'];

people.push('Bob');
people.push('Dr Evil');

for (var i=0; i < people.length; i++) {
	var greeting = helloFrom(people[i]);
	alert(greeting);
}

// JavaScript Intermediate Tutorial

// Okey dokey. You've nailed the basics then, hmmmm? Good Stuff. Have a cake. Once you've
// eaten it, try your hand at some areas of JavaScript that will push you a little further.

// The DOM:
// The Document Object Model is a way to manipulate the structure and style of an HTML page.
// it represents the internals of the page as the browser sees it, and allows the developer
// to alter it with JavaScript.

// Trees and Branches
// HTML is an XML-like structure in that the elements form a structure of parents' nodes
// with children, like the branches of a tree. There is one root element (html) with
// branches like head and body, each with their own branches. For this reason, the DOM is
// also called the DOM tree.

// Modifying the DOM, by picking an element and changing something about it, is something
// done often in JavaScript, the document object is used. It's provided by the browser and
// allows code on the page to interact with the content.

// Getting an Element

// The firtst thing to know is how to get an element. There are a number of ways of doing
// it, and browsers support different ones. Starting with the best supported we'll move
// through to the latest, and most useful, versions.

// By ID
// document.getElementById is a method for getting hold of an element - unsurprisingly - 
// by its ID.

var pageHeader = document.getElementById('page-header');

// The pageHeader element can then be manipulated - its size and color can be changed,
// and other code can be declared to handle the element being clicked on or hovered over.
// It's supported in pretty much all the browsers you need to worry about.

// Notice that getElementById is a method of the document object. Many of the methods used
// to access the page are found on the document object.

// By Tag Name
// document.getElementsByTagName works in the same way as getElementById, except that it
// takes a tag name (a, ul, li, etc) instead of an ID and returns a NodeList, which is
// essentially an array of the DOM Elements.

// By Class Name
// document.getElementsByClassName returns the same kind of NodeList as
// getElementsByTagName, except that you pass a class name to be matched, not a tag name.

// By CSS Selector
// A couple of new methods are available in modern browsers that make selecting elements
// easier by allowing the use of CSS selectors. They are document.querySelector and
// document.querySelectorAll

var pageHeader = document.querySelector('#header');
var buttons = document.querySelectorAll(.btn);

// querySelector, like getElementById, returns only one element whereas querySelectorAll
// returns a NodeList. If multiple elements match the selector you pass to querySelector,
// only the first will be returned.

// Events and Callbacks

// In the browser most code is event-driven and writing interactive applications in 
// JavaScript is often about waiting for and reacting to events, to alter the beavior
// of the browser in some way. Events occur when the page loads, when a user interacts,
// (clicks, hovers, changes) and a myraid of other times, can be triggered manually too.

// To react to an event you listen for it and supply a function which will be called by 
// the browser when the event occurs. This function is known as a callback.

// Here's a group of the thigns needed to listen for an event; the callback function,
// an element and the call to listen for an event:

var handleClick = function (event) {
	// Do something!
};

var button = document.querySelector('#big-button');
button.addEventListener('click', handleClick);

// addEventListener is a method found on all DOM elements. Here it's being called on an
// element saved in the button variable. The first argument is a string - the name of the
// event to listen for. Here's it's click - that's a click of the mouse or a tap of the 
// finger. The second is the callback function - here it's handleClick.

// Data about a particular event is passed to the event callback. Take a look at 
// handleClick, declared above. You can see its argument: event - it's an object whose
// properties describe what occured.

// Here's an example event you might see into a click event callback like handleClick.
// There are lots of properties giving you an idea of where the event occured on the page
// (like pageX and offsetY) - these are slightly different because they depend on the 
// reference point used to measure from. You can also see the target which is a reference 
// to the node that was clicked.

{
	offsetX: 74,
	offsetY: 10,
	pageX: 154,
	pageY: 576,
	screenX: 154,
	screenY: 489,
	target: h2,
	timeStamp: 1363131952985
	type: "click",
	x: 154,
	y: 395
}

// AJAX

// In the early years of the web, things were simple - a page was text, perhaps with
// styling, and it contained links to other pages. To get new content you moved from
// one page to the next. But as developers got more ambitious with the web, attempting
// to build interactive ("native-like" applications), it was obvious that there 
// needed to be a way to load new content into a page without a full reload.

// To retrieve new content for a page, like new articles on an infinite-scroll site or
// to notify you of new emails, a tool called XML HTTP REQUEST (XHR) is used. Web apps
// that do this are also called AJAX apps, AJAX standing for Asynchronous JavaScript and
// XML.

// Almost all sites that pull in new content without a page reload (like Facebook, Gmail,
// Google Maps, etc) use this same technique. In fact, it was Microsoft developing Outlook
// Web Access who originally created the XMLHttpRequest.

// XML HTTP Request

// So what does an XMLHttpRequest look like?

var req = new XMLHttpRequest();
req.onload = function (event) {. . . };
req.open('get','some-file.txt', true);
req.send();

// The first thing to do is create a new XMLHttpRequest request, using the new keyword,
// and calling XMLHttpRequest like a function.

// Then we specify a callback function, to be called when data is loaded. It is passed information 
// about the event as its first argument. 

// Then we specify how to get the data we want, using req.open. the first argument is the HTTP method 
// (GET, POST, PUT etc). Next is the URL to fetch from - this is similar to the href attribute link.

// The third is a boolean specifying whether the request is asynchronous - here we have it true,
// so the XMLHttpRequest is fired off and then code execution continues until a response from the 
// server causes the callback to be fired.

// The asynchronous parameter defaults to false - if it's false, execution of the code will pause at 
// this line until the data is retrieved and the request is called synchronous. Synchronous XMLHttpRequests
// are not used often as a request to a server can, potentially, take an eternity. Which is a long time 
// for the browser to be doing nothing.

// On the last line we tell the browser to fire off the request for data.

// Using an XMLHttpRequest you can load HTML, JSON, XML and plain text over HTTP and HTTPS, and it also 
// supports other protocols like FTP and file. All in all, they're very useful for a whole range of 
// tasks involved in developing JavaScript apps.

// JSON

// JavaScript Object Notation is not JavaScript. Officially it's a totally different language with its own
// spec, but it's such an important part of JavaScript development that it's important to cover.

// JSON is a set of text formatting rules for storing and transferring data in a machine and human
// readable way. It looks a lot like the object literal syntax of JavaScript, and it is from there
// JSON originates.

// Here's some JSON:

{ "name": "Yoda", age: 894, "lightsaber" : {"color": "green" }}

// Like in JavaScript, the brace notation is used.
// Interestlingly, the above example is actually valid JavaScript.

// JSON is used to transfer information - between your browser to a server, or saved in text files
// for retrieval later - because it's simply text. That means you can't store complex data like a 
// function, but you can store arrays, objects containing simple data, strings and numbers.

// JSON is taking over from XML as the data-transfer format of the web, and many new web APIs are
// written exclusively serving JSON, which can mean that you can be using AJAX technology to grab
// JSON. But AJAJ ain't so catchy.

// Using JSON

// Data is either converted to or from JSON, using methods called stringify or parse respectively.
// JSON is an object available in pretty much all modern browsers but there are ways of adding to a
// browser that doesn't have it.

var jsonString = JSON.stringify({
	make: "McLaren",
	model: "MP4-12C",
	miles: 5023
});

// JSON.stringify converts an object into a JSON string. In this example, jsonString becomes 
// {"make": "McLaren", "model": "MP4-12C", "miles": 5023 }.

var car = JSON.parse(jsonString);

// The string can then be converted back to a JavaScript object using JSON.parse.car is now usable as a 
// normal JavaScript object, so you can set its properties:

car.model = "P1";

// SCOPE

// Scope is the term used to mean variable visibility - a variable's scope is the part of your code that
// can access and modify that variable. JavaScript has Function scope - but what does that mean and how
// is it different to other languages.

// Scope is, in many programming languages, dictated by the block in which the variable was declared. 
// A block, in C-like languages, is anything between two curly braces, or indentation in a language
// like Python. For example, the b variable below is not available outside the curly braces in which
// it was declared:

var a = 10;

if (a > 5) {
	var b = 5;
}

var c = a+ b; // Wouldn't work!!

// Global variables - that is, variables that can be read and modified anywhere in your application - are
// not good because they can expose security issues and make code much harder to maintain.

// Remember that code is read much more than it's written. When reading code, if you can't determine where
// a variable came from and what its potential values are, there's a problem.

// So it's best to limit the scope of a variable as much as possible, making it visible to as few parts of 
// your card as possible.

// Function Scope

// JavaScript does things a little differently. It uses function scope. This means that variables are not 
// visible outside of the function in they were declared. If they are not declared inside a function then
// they are available globally.

// The example below demonstrates that a variable is only visible inside the function in which it was
// declared. The doSomething function is the variable a's scope.

var doSomething = function () {
	var a = 10;
};

doSomething();

console.log(a); // a is undefined

// Comparing this to the block scope example above, you can see that, in JavaScript, b is available:

var a = 10;

if (a > 5) {
	var b = 5;
}

var c = a + b; // c is 15

// Child Scopes

// Variables are available in child scopes of their own scope. For example, doSomethingElse is a child
// of doSomething, so a is visible inside doSomethingElse.

var doSomething = function () {
	var a = 10;

var doSomethingElse = function () {
	console.log(a); // a is 10
};
doSomethingElse();
};

doSomething();

// Functional scope is a very powerful tool for creating elegant code, as we'll see, but it can take
// some time to get your head around.

// jQuery

// The set of tools used to allow modification and control of the DOM are a bit of a mess because
// they differ across browsers, generally for historical reasons. To make your job easier, a number
// of libraries have been created that hide these differences, providing a more uniform way of
// functionality with the DOM. Often they also provide AJAX funcionality, taking the burden of that
// complexity away from you.

// jQuery is by far and away the most popular DOM library and it is used on a huge number of websites.

// By the way you interact with the DOM (or any service that you use via code) is called an Application
// Programming Interface or API.

// jQuery has a very distinctive syntax, all based around the dollar($) symbol. Here's some:
$('.btn').click(function () {
	//do something
});

// This code attached to a click handler to all elements witha class of btn. This selector syntax
// is core to jQuery.

// jQuery is added to a page by simply including it as a file using a script element. Download it
// from jquery.com, or in it from a Content Delivery Network (CDN) such as CDNJS:

<script src= "http://cdn.js.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

// In the following pages we'll be taking a look at jQuery for selecting and manipulating elements, AJAX 
// and at some other useful tricks.

// It's not always the best idea to use a library. and it's best to choose whether to use a framework based
//  on the specific project. For example, jQuery is a large file to intrduce to a page and slow the 
// downloading of that page, particularly on mobile browsers with potentially weak connections.