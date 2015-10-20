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