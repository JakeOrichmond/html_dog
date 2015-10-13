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