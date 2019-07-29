# Introduction to JS

JavaScript is a programming language developed by Netscape inc. – it is not part of the Java platform.
Key differences between Java and JavaScript:
-	Java is an OOP programming language while Java Script is an OOP scripting language.
- Java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only.
-	Java code needs to be compiled while JavaScript code are all in text.
-	They require different plug-ins.
JavaScript powers the dynamic behaviour on most websites
Client - e.g. chrome, firefox, safari 
Server - Node JS


#### How engines work?
Engines are quite complicated 
The engine reads the script
Then it converts the script to the machine language

# JavaScript
JavaScript is written using the Unicode character set
JavaScript is a case-sensitive language 
It ignores spaces and line breaks

// This is an inline comment and will be ignored 

/*
* Also all comment
*/ 


## Data Types

There are 6 primitive data types, these are data types which are not objects and do not have methods, these are immutable - number, string, boolean, symbol, null, undefined
The seventh data type is object

## Typeof operator
Determine the type associated with a variables current value

## Initialising Variables
You should declare a variable using the the var keyword before using it
If you do not initialise the variable it automatically takes on the variable undefined

## Coercion
In JavaScript, you can perform operations on values of different types without raising an exception.
The JavaScript interpreter implicitly converts or coerces one of the data types to that of the other then performs the operation
- If you add a number and a string the number is coerced to a string
- If you add a boolean and a string, the boolean is coerced to a string
- If you add a number and a boolean, the boolean is coerced to a number

##parseInt and parseFloat 
Convert a integer or a floating point number represented as a string to a number

## Operator Types
### Unary
A unary operator requires a single operand, either before or after the operator, following this format:
Operand operator 
Operator operand 
a++, ++ is a unary operator

### Binary
Requires two operand, one before the operator and one after the operator, following this format:
Operand1 operator operand2
A + b = c, + is a binary operator


### Ternary 
One ternary operator, the conditional operator
Expression - a ? B : c
The use of ? And : together constitutes the ternary operator

Assigns a value to a variable based on a condition

[some condition] ? [expression 1] : [expression 2]

Its like an if else block

If the condition is true do expression 1, if not do expression 2 

## for classes = true/false
this.bearded = bearded !== undefined ? bearded : true;

This is saying, if bearded isn't undefined then set bearded to bearded, if not,set it to true.

## Less Know Operators
% - use this operator for operand1 ** operand2
•• - exponentiation
++ - increment, use it in the postfix and prefix forms, increments the operand by one and returns the value of the operand
/ - -    decrement

## Data Types
Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:
1.	Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
2.	String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.
3.	Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a "yes" or "no" question.
4.	Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
5.	Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
6.	Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
7.	Object: Collections of related data.

The first 6 of those types are considered primitive data types. They are the most basic data types in the language. Objects are more complex.

## Arithmetic Operators
Basic arithmetic comes hand in hand with programming.
An operator is a character that performs a task in our code. JavaScript has several built-in arithmetic operators, that allow us to perform mathematical calculations on numbers.
Include the following operators and symbols:
1.	Add: +
2.	Subtract: -
3.	Multiply: *
4.	Divide: /
5.	Remainder: %

When we console.log() the computer will evaluate the expression inside the parentheses and print the result to the console.
If we want to print the characters e.g. 3 + 4 they would need to be wrapped in quotes and printed as a string 
The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

## String Concatenation
When a + operator is used on two strings, it appends the right string to the left string:
This process of appending one string to another is called concatenation. 

## Properties
Introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type.
Every string instance has a property called length that stores the number of characters in that string. You can retrieve property information by appending the string with a full stop and the property lane (.length).
The . is another operator – the dot operator.

## Methods
Strings also have methods, actions that we can perform.
We call, or use, these methods by appending an instance with a period (the dot operator), the name of the method, and opening and closing parentheses: ie. 'example string'.methodName()'.
Does that syntax look a little familiar? When we use console.log() we're calling the .log() method on the console object. 

JavaScript documentation has a list of built- in string methods that developers use as a reference tool.
Two examples are:
.toUpperCase() – Which will print a string as upper case
And
.startWith() – which will print true or false depending on whether the character in the parentheses matches the letter at the start of the string

## Built-in Objects
In addition to console, there are other objects built into JavaScript. Down the line, you’ll build your own objects, but for now these “built-in" objects are full of useful functionality.
For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.
Objects have methods which can be called and used.
An example is the Math.random() method which will generate a random number between 0 and 10 unless a it is multiplied by a number in which case will find a random number between 0 and that number.
Math.floor() rounds to the nearest whole number

## Variables
A variable is a container for a value.
You can think of variables as little containers for information that live in a computer’s memory.
Information stored in variables. Such as username, account number, or even personalised greeting can then be found in memory.
Variables also provide a way of labelling data with a  descriptive name, so our programs can be understood more clearly by the reader and ourselves.
There are only a few things you can do with variables:
Create a variable with a descriptive name.
Store or update information stored in a variable.
Reference or “get” information stored in a variable.

Variables are not values; they contain values and represent them with a name.
Observe the diagram with the colored boxes. Each box represents variables; the values are represented by the content, and the name is represented with the label.

### Create a variable: var
There were a lot of changes introduced in the ES6 version of JavaScript in 2015. One of the biggest changes was two new keywords, let and const, to create, or declare, variables. Prior to the ES6, programmers could only use the var keyword to declare variables.
There are a few general rules for naming variables:
-	Variable names cannot start with numbers.
- Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
- Variable names cannot be the same as keywords. For a comprehensive list of keywords check out MDN's keyword documentation.
Legacy code uses var so should be familiar with it, now best practise to use let and const.

### Create a variable: let 
The let keyword was introduced in ES6. The let keyword signifies that the variable can be assigned a different value.
In that case, a variable can be assigned a value at a later date without using a keyword.
Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined and we can reassign the value of the variable.

### Create a Variable: const
Short for the word constant – a const variable cannot be reassigned, you will get a TypeError if you try.
You also cannot have a const variable without a  value

## Mathematical Assignment Operators
We can use variable and maths operators to calculate new values and assign them to a variable.
To reassign variables the following operators can be used: +=, -=, *=, /=
The increment (++) and decrement (--) operator increase or decrease the value of the variable by one.
Can completely reassign a variable introduced with ‘let’ – by simply writing the variable and using the operator = 

### String Concatenation with Variables
Previous exercises – assigned string to variables
Can also connect (or concatenate) strings in variables
The + operator can be used to combine two string values even if those values are being stored in variables

### String Interpolation
In the ES6 version of JavaScript – we can insert or interpolate, variables into strings using temperate literals.
A temperate literal is wrapped by backticks (`)
Inside the temperate literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don't have to worry about escaping double quotes or single quotes.

### typeof operator
While writing code, it can be useful to keep track of the data types of the variables in your program
If you need to check the data type of a variable’s value, you can use the typeof operator
The typeof operator checks the value to its right and returns, or passes back a string of the data type

## Conditional Statements 
Decisions based on circumstances – if one thing is true, do this. If not, then do something else/
These if-else decisions can be modelled in code by creating conditional statements. A conditional statement checks specific condition(s) and performs a task based on the condition(s).
Exploring how programs make decisions by evaluating conditions and introducing logic into our code:
-	If, else if, and else statements
-	Comparison operators
-	Logical operators
-	Truthy vs falsy values
-	Ternary operators
-	The switch statement

### The if keyword
If statement syntax
if(true) {
	console.log('This message will print');
}

### if else - adds some default behaviour if a particular statement isn't true
if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}

### Comparison Operators
When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is NOT equal to: !==

### Logical Operators
Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the and operator (&&) - checks if two things are true 
the or operator (||) - checks if either of two things are true
the not operator, otherwise known as the bang operator (!) - reverses the value of boolean, either tke a true value and pass back false or a false value and pass back true

### Truthy and Falsy 
When checking if a variable exists, even if the variable has been created, some values may evaluate to false:
0
Empty strings like ""
null
undefined
NaN

### Short-circuit evaluation 
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

let defaultName = username || 'Stranger';

Both mean the same, the || checks the left statement first, the variable defaultName will be assigned the value of username if its truthy, selse it is assigned stranger
This concept is short-circuit evaluation

### Ternary operator
Simplifies an if else statement

let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

The condition is provided before the question mark, two expressions are provided after seperated by a colon
If the first evaluates to true then it executes, if it doesnt then the second executes

### else if, more possible outcome to the if else
let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

### The switch keyword
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}

case keyword checks if the expression matches the value that comes after it, if it does then the case runs
The break keyword tells the computer to execute the bolck if the cas ehas been run, otherwise the computer will keep trying to match all the cases 

## Functions
Hoisting feature in javascript - allows functions to be accessed before they are defined
Not good practice

A function declaration consists of:
- The function keyword
- The name of the function, or its identifier, followed by parentheses
- A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }

function call =
the function name followed by parentheses

### Parameters
Set parameters in the parentheses of the function
can set default paremeters if a value is not included in the function calls

### Setting an unknow number of parameters
  const functionname = function(...parameters) {

  }


### Arguments

Can then access the unknown number of parameters as an array inside the function with: arguments.

  const functionname = function(...parameters) {
    let yourparameters = arguments;
    console.log(yourparameters);
  }

  [parameter1, parameter2, parameter3]

### Return 
Return statement - captures whatever value we want the computer to return 
Whatever is written after it will not be executed
Allows functions to produce an output that can be saved to a variable for later use

## Helper Functions 
Functions called within another function 
We can use functions to section off small bits of logic or tasks

## Function Expressions
Usually anonymous functions

## Arrow Functions
=> removes the need to type out function every time you create a function 

Syntax:
  const rectangleArea = (width, height) => {
    let area = width * height;
    return area
  }

### Concise Body Arrow Functions
Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.


### Pure functions
Should favour pure functions in your script

#### Side Effects if you don't:
- Mutations
- Accessing system state
- 
-
-

Even if you have to have an impure function you should seperate it from the pure

### Pure Functions - Array Methods

### Closure = function and external variables

## Scope
Defines what variable scan be accessed or referenced.


### Blocks
{} structural marker in code, group one or more statements together, function

### Global Scope 
Variables declared outside of blocks
These variables can also be accessed inside of the blocks

### Block Scope 
Variable defined inside a block, only accessible within that block
Known as a local variable

### Scope Pollution
Don't want too many global variables
Makes it difficult to keep track of them 
Can fill up global namespace

### Practice Good Scoping
Tightly scoping your variables will greatly improve your code in several ways:

It will make your code more legible since the blocks will organize your code into discrete sections.
It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
It's easier to maintain your code, since your code will be modular.
It will save memory in your code because it will cease to exist after the block finishes running.

### Scope and Closure
If amethod of a function is returned then it can be accessed outside of the scope of the function and still has access to everythign iwhtin it.
If you tried to call any of the other methods that were not returned, you would get an error.

This is closure.

## Arrays
A list where the data can be of different types or of the same type
Can save an array to a variable
Each element has a numbered position known as its index

Can access an index an array with syntax = array[index]
Can also access inidvidual characters in a string using this syntax

## Update elements 
array[index] = new variable
For both const and let variables

## reassiging an array variable 
Only with arrays assigned to a let variable, const can't be reassigned

## .length
console.log(array.length)
Returns number of items in the array

## .push
allows you to add elements to the end of an array
array.push(nextitem, nextitem2)
Mutates original array
destructive array method
Much quicker than unshift

## .pop()
removes the last item of an array
array.pop();
much quicker than shift 

## .shift()
array.shift()
remove the first item from the array list

## .unshift()
add soemthing to the bgeinning of the array 
array.unshift(firstitem)

## .slice()
array.slice(index)
Only prints that index
Print part of a list = (1, 3)
Will print items at indexes 1 and 2 - does not print the end element
non-mutating - does not change the list

## .indexOf()
array.indexOf(somevalue)
returns the index of that value

## Arrays and Functions
When you pass an array to a function, if the array if mutated inside the function, that change will be maintained outside the function as well.

## Nested Array 
Acessing elements in an array in an array
array[1][0] = the first element in the second array

## Loops 
### For 
A for loop contains three expressions separated by ; inside the parentheses:
- an initialization starts the loop and can also be used to declare the iterator variable.
- a stopping condition is the condition that the iterator variable is evaluated against — if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
- an iteration statement is used to update the iterator variable on each loop.

#### Looping through an array

for (let i = 0; i < array.length; i++){
  console.log(animals[i]);
};
iterator variable i - naming convention seen alot in loops

let 

### Nested For Loops
Compare the elements in two arrays
For each round of the outer for loop, the inner for loop will run completely

  for (i = 0; i < array1.length; i++) {
          for (j = 0; j < array2.length; j++) {
              }       

##£ While 
Good if you dont know how long you want your loop to run for 

### Do-while
- Syntax:
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

- Syntax2:
Do { statment (s);
} while (condition);

For (var variable in object) {
	// inner code that uses variable here
}

For (let variables of iterable) {
	statement(s);
}

### For-in
### For-of 

### Break Statement 
Add a break in an if statement inside a loop to break the loop if a particular condition is met
Place the if statement before whatever action is occurring

### Higher Order Functions
Higher-order functions are functions that accept other functions as arguments and/or return functions as output.
Abstractions built on abstractions.

### Functions as Parameters/ First Class Functions
const callback = () => 5;
const example = function(fn) {
	fn();
}

Using const to declare a function when you are assigning that function to a variable, using the => afterwards then means you don't have to use the function keyword

When we pass a function in as an argument to another function, we don't invoke it. Invoking the function would evaluate to the return value of that function call. With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaluate to the result of calling the function).

const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);

### Iterators
Built in methods that call on arrays to manipulate elements and return values

### .forEach()
executes the same code for each element in an array 
array.forEach()

Can use the arrow function:
array.forEach(arrayitem => console.log(arrayitem))

### .map()
Works in a similar way to foreach but returns a new array 
Also write it like a function

const secretMessage = animals.map(animal => {
  return animal[0]
})

### .filter()
Creates a new array of items from the orginal array that meet certain conditions
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;



### .findIndex()
finds the character at a particular index

### .reduce()
The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue; 
}, 10)

console.log(newSum);

Adding a second argument to reduce multiplies the sum of the array 

### .sort() 
Sorts the lements of an array in place and returns the array

### Math.sign() Function
The Math.sign() function returns five different values as described below:

- It returns 1 if the argument passed is a positive number.
- It returns -1 if the argument passed is a negative number.
- It returns 0 if the argument passed is a positive zero.
- It returns -0 if the argument passed is a negative zero.
- If none of the above cases match,it returns Nan.

## Objects

Objects are containers storing related data and functionality

Objects can be assigned to variable like any JavaScript tyoe, using curly brackets to designate an object literal 

let spaceship = {}; // spaceship is an empty object

Fill an object with unordered data. This data is organised into key-value pairs. A key is a variable name that points to a location in memory that holds a value.
Keys are strings, but don't need quotation marks if there is no special value in the name

Access the values of keys using . notation 
spaceship.color

returns silver

Trying to access a property that does not exist will return undefined

Can assign these keys to their own variables using dot notation

Use bracket notation when accessing keys with special characters
With bracket notation you can also use a variable name inside the bracket to select the keys of an object, especially helpful when working with functions 

spaceship['Fuel Type'];   // Returns  'Turbo Fuel'

let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); 

Objects are mutable - update them after creation 
by assigning a key a new variable
or by deleting a variable that already exists

### Methods
When the data stored on an object is a function we call that a method - a property is what an object has, while a method is what an object does

console is a global javascript object
.log() is a method on that object

We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. The key serves as our method's name, while the value is an anonymous function expression.

let alienShip = {
  retreat: function () {
    console.log(retreatMessage)
  },
  takeOff: function () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();

### Nested Objects 
Objects can often be nested, one object might have another as a property which has its own properties.
For example, spaceship object may have an object called crew, the crew object may itself have and object for each crew member which contains properties about them 

#### An object property as an array of other objects
passengers : [
    {passenger1: {
      name: 'R2D2'
    }},
    {passenger2: {
      name: "C-3PO"
    }}
]

### Pass By Reference 
functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = object => {
  object['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = object => {
  object['disabled'] = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

console prints:
{ 'Fuel Type': 'avocado oil',
  homePlanet: 'Earth',
  disabled: true }

### Looping Through Objects 
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};


## Advanced Object Introduction
### This keyword
References the calling object

Objects have methods

To call one method inside another method use the this keyword to reference the object they are both

const object = {
  method1 () {
    console.log('something');
  },

  method2 () {
    console.log(this.method1);
  }
};

Shouldn't use arrow functions to create methods and then use the this. keyword, the arrow function means that the this. then refers to a global object, not the calling object and will return undefined.

Rules for this: 
- Unless another rule say otherwise, this is the global object. 

Its in the global scope, when in the browser 'window' is the global object. If we are in strict mode, this is undefined. In Node.js, 'global' is the global object as we we don't have a window to speak of.

- this is set implicitly when a function is called as a method

This takes 'this' out of the global scope and makes this the context of what its being called from.

- this can be explicitly set using call or apply

One method all functions share is call(), which uses the first argument you hand it and sets it to this, it then takes all subsequent arguments and passes them to the function you're calling call() on. It basically provides a way to call any function on a specific function scope.

      addToFoo.call(baz, 2)

As we've seen apply() — like call() — is useful for explicitly setting this. Additionally, apply() is useful when we have an array that we'd like to spread out over the arguments of a function.

    function addThreeNumbers(first, second, third) {
      return first + second + third;
    }

    var numbers = [1, 2, 3];

    addThreeNumbers.apply(null, numbers);

Can use all three of these to split up the context when context is not important:

    addThreeNumbers.apply(null, numbers);
    addThreeNumbers.apply(this, numbers);
    addThreeNumbers.apply('oogieboogie', numbers);

### bind()
Bind method creates a new function that when called has its this keyword set to the provided value
A given sequence of arguments preceding any provided when the new function is called
Calling the bound function usually results in the execution of its wrapped function

### Using apply() to spread an array of arguments


### Privacy

Privacy in objects, only certain properties should be mutable and able to change in value.
JavaScript developers follow naming conventions that signal to other developers how to interact with a property.
Place and _ before the name of the property to mean that it shouldn't be altered.

### Getters 
Methods that get and return the internal property of an object.

get method1 {
  if (typeof this.method1 === 'correcttype'){
    return this.method1;
  } else {
    return 'error';
  }
  };
}

### Setters 
Changes a variable only if certain conditions are met 

set method1 (new) {
  if (typeof new === 'correcttype'){
    this._method1 = new;
  } else {
    console.log('error');
  }
}

object.method1 = something;

changes _method1 if correct 


### Factory Functions
Factory functions create many instances of an object quickly 

const function = (parameter1, parameter2) => {
  return {
    property1 = parameter1,
    property2 = parameter2,
    property3 = console.log('something')
  }
}

const objectinstance1 = function(individualp1, individualp2);

Closures allow us to create private variables and functions.
Private functions are functions that atr used in workings of out objects that are not intended to be used elsewhere in our program.
Even though our objects might only do a few things, we are able to split up our functions as much as we want allowing for cleaner and easier to read code.

### Inheritance with Factories
  const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`)
    return {sayName}
  }

  const Nerd = (name) => {
    // simply create a person and pull out the sayName function!
    const {sayName} = Person(name)
    const doSomethingNerdy = () => console.log('nerd stuff')
    return {sayName, doSomethingNerdy}
  }

  const jeff = Nerd('jeff')

  jeff.sayName() //my name is jeff
  jeff.doSomethingNerdy() // nerd stuff

Can inherit however many methods you want from parent class, doesn't necessarily have to be all of them.

### Modules
Modules are self-containe with distinct functionality, allowing them to be shuffled, removed or added as necessary, without disrupting the system as a whole.

### The Module Pattern
Mimic the concept of classes in JavaScript since as JS doesn't natively support classes 

New feature in JavaScript ES6 called modules
Essentially a syntax for importing and exporting code between different JavaScript files.

    const calculator = (() => {
      const add = (a, b) => a + b;
      const sub = (a, b) => a - b;
      const mul = (a, b) => a * b;
      const div = (a, b) => a / b;
      return {
        add,
        sub,
        mul,
        div,
      };
    })();

    calculator.add(3,5) // 8
    calculator.sub(6,2) // 4
    calculator.mul(14,5534) // 77476

Concept - write a function, wrap it in parentheses, immediately call the function by adding () to the end of it.

### Global import
Pass in global variables as parameters to functions.

### Object interface 
Create modules using a self-contained object interface

### AMD
Asynchronous Module Definition(AMD): 

  define(['myModule', 'myOtherModule'], function(myModule, myOtherModule) {
    console.log(myModule.hello());
  });

The define function takes as its first argument an array of each modules dependencies, these dependencies are loaded in the background (in a non-blocking manner), and once loaded define calls the callback function it was given.
Next, the callback function takes as arguments the dependenices that were loaded, allowing the function to use these dependencies. 

So again, unlike CommonJS, AMD takes a browser-first approach alongside asynchronous behavior to get the job done. 

### Property Value Shorthand
dont have to repeat ourselves for property assignments 

    return {
      parameter1
      parameter2
    }

### Destructured Assignment
create variables that access methods

    const { method } = object 

If there are methods nested within methods you can then just do

    method.method1();

to call the nested method

### Built-in Object Methods

Object.keys(object)
Returns and array of a given objects own property names

Object.entries(object)
returns an array of a given objects own enumerable property [key, value] pairs 

Object.assign({property: value, property: value}, object)
Used to copy the values of all enumerable own properties from one or more source objects to a target object

### Classes 
A tool that developers used to quickly produce similar objects
Not the same as a python or java class.

constructor() method - 
used each time an instance of a class is made

Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. 

  class classname {
    constructor (parameter1, parameter2){
      this.property = parameter1
      this.property = parameter2
    }
  }

### Default Values - ES6? || not sure if this is right
Can set a default value for a parameter in the constructor

    class classname {
    constructor (parameter1, parameter2 = "default"){
      this.property = parameter1;
      this.property = parameter2;
    }
  }

### Boolean default values
This says, this value is true unless explicitly set to false.
    class classname {
    constructor (parameter1, parameter2 ){
      this.property = parameter1;
      this.property = parameter2 !== false;
    }
  }



### Instance
An instance is an object that contains the property names and methods of a class, but with unique property values.

const instancename = new classname (parameter1instance, parameter2instance);

### Methods 
getter and setter methods, same syntax as for objects except you can not include commas between the methods

get methodname() {
  return this.parameter 
}

Other methods = 
methodname (parameter) {
  return outcome
}

### Inheritance 
With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

Parent class - contains all common methods

Child class syntax - 

class child extends parent {
  constructor (commonp, childp) {
    super(commonp);
    this.parametername = childp;
  }
}

### Static Methods 
Want a class to have methods that aren't available in individual instances

Static keyword - 
static methodname() {

}

Can only access methodname from the parentclass

### Browser Compatibility and Transpilation

Updating web browser, reasons include - addressing security vulnerabilities, adding features, supporting new HTML, CSS and JavaScript syntax.

This implies that there is a period before this update in which there are security vulnerabilities and unsupported language syntac.

How developers address the gap between the new JavaScript syntax they use and the JavaScript syntax that web browsers recognise.

Widespread concern since ES6 version of JavaScript was released in 2015, it improved readability and efficiency but was not supported by most web browsers and ran into browser compatibility issues.

Two tools for addressing these issues:
caniuse.com - A website that provides data on web browser compatibility for HTML, CSS, and JavaScript features

Babel — A Javascript library that you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognized by most modern browsers. ES6 is backwards compatible to ES5.

Babel transpiles ES6 to ES5 - transpilation is the process of converting one programming language to another.

To use babel, install through the terminal two packages:
npm install babel-cli  -D
npm install babel-preset-env -D

-D means each package is added to a property called devDependencies in package.json

npm run build
does the conversion
creates a lib folder containing the ES5 code 

setup a JavaScript project that transpiles code when you run npm run build from the root directory of a JavaScript project.

create a src folder containing the original ES6 code
project
|_ src
|___ main.js

Need to setup our project to use the node package manager (npm). Developers use npm to access and manage Node packages. Node packages are directories that contain JavaScript code written by other developers. You can use these packages to reduce duplication of work and avoid bugs.

run npm init before adding Babel. The npm init command creates a package.json file in the root directory.

A package.json file contains information about the current JavaScript project. Some of this information includes:

Metadata — This includes a project title, description, authors, and more.
A list of node packages required for the project — If another developer wants to run your project, npm looks inside package.json and downloads the packages in this list.
Key-value pairs for command line scripts — You can use npm to run these shorthand scripts to perform some process. 

npm install - install new node packages locally 

.babelrc
After downloading Babel packages, need to specify a version of the source JavaScript

In root directory - 

run 
touch .babelrc
to create the file 

in .babelrc add the following object 

{
  "presets": ["env"]
}

["env"] instructs Babel to transpile any code from versions ES6 and later.

Babel Source Lib
Need to specify a scriptin package.json that initiates the ES6+ to ES5 transpilation
Inside package.json file - property named "scripts"
that holds an object dor spceicfying command line shortcuts
Add a script to it that runs babel

"build": "babel src -d lib"

### Intermediate Javascript Modules
JavaScript modules are reusable pieces of code that can be exported from one program and imported for use in another program.

##### Export module - old version 
- module.exports = object;

#### New versions
##### Default export
Works similar to module.exports 
Allows us to export one module per file 
Use in place of module.exports in ES6

export default Object;
##### Named export 
export { variablename, functionname }

Named exports can be exported as soon as they are declared, by placing the keyword export in front of variable declarations. This does not effect how we import variables.

Can also change the name of the variable being exported or imported

export {function as newname, variable as newname};

#### Import module - old version
- const variablename = require('./filename.js')

#### Import module - new version
import variablename from './filename'

keyword variablename specifies the name of the variable to store the default export in

can also import specific functions
import { variablename, functionname }

can also use 'as' to rename what has been imported

importing a module under new name:
import * as newname from './file'


## Asynchronous operations
One that allows the computer to move on to other tasks while waiting for the ansynchronous operation to complete

Synchronous - code we will run right now
Asynchronous - code we will run later on 

JavaScript is single threaded and non blocking 
Single threaded - can only throw one ball at a time
Non blocking - can catch the second ball before we catch the first

### SetInterval() and setTimeout()
  setInterval(() => {alert('Hello')}, 3000)

same for setTimeout


### Callbacks
Functions that get passed into other functions
Callbacks are simply functions that get passed into other functions

You're giving away your code to be executed later
Executing callback in parralell and waiting for them all to come back is tricky 

Promises help to stop the complexity of callbacks.

### Promise Object 
Promises = objects that represent the eventual outcome of an asynchronous operation.

Can be one of three states - 
 - Pending: The initial state - the operation is not completed yet 
- Fulfilled: The operation has completed successfully and the promise now has a resolved value. 
- Rejected: The operation has failed and the promise has reason for failure.

Using promises - taking API calls needs promises

### Syntax:
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);

Resolve() - a function with one argument. If invoked, will changes the promise's statement from pending to involved, the promise's resolve value will be set to the argument passed into resolve()
Reject() - takes a reason or error as an argument. reject() will change the promise's statement form pending to rejected. The promie's rejected reason will be set to the argument passed into reject().

### setTimeout()
setTimeout(newfunction, timeinmilliseconds)
Delays the function, the rest of the program continues to execute, asynchronously

### .then()
Promise objects have a .then(firsthandler, secondhandler) method
Takes two callback fucntions as arguments e.g. handlers
The first handler = onFulfilled contain the logic for the promise resolving
The second handler = onRejected a failure handler contains the logic for the promise rejecting 

### .catch()
Takes only one arguments, onRejected.
executorFunction(firstPromise)
	.then(handleSuccess)
	.catch(handleFailure);

### Composition
Chaining promises together using .then 

firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});

### .all()
Use concurrency, multiple asynchronous operations happening together

If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value from each promise in the argument array.
If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.

## Async/Await
New way to use promises, ES7, introduced the async/await pattern for resolving Promises.

### async Keyword
Used to write functions that handle asynchronous actions
Wrap our asynchronous logic inside a function prepended with the async keyword
async function always return a promise with a resolved value undefined
Can use traditional promise syntax, .then and .catch with async functions

- with promise:
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  })
}

- with async:
async function withAsync(num) {
  if(num === 0){
    return 'zero';
  }else {
    return 'not zero';
    }

### await operator
Async by itself doesn't do much 
Normally used with await 
await is used for setting variables to the resolved value of a promised function within an async function
Can't be used unless in an async function - async lets the JavaScipt engine know you are declaring an asynchronous function.

Without async and await:
    function getPersonsInfo(name) {
      return server.getPeople().then((people) => {
          return people.find(person => {return person.name === name });
        })
    }

With async and await:

async function getPersonsInfo(name) {
  const people = await server.getPeople();
  const person = people.find(person => {return person.name === name});
  return person;
}

It is valid to use an async function anywhere you can use a normal function.

### Dependent Promises
What async...await is best for 

async function functionname() {
  let variablename1 = await promisefunction1();
  let variablename2 = await promisefunction2(variablename1);
  let variablename3 = await promisefunction3(variablename2);

}

### Promise.all()
Take advantage of concurrency when we have multiple promises that can which can be executed simultaneously - await a promise.all()
Pass an array of promises as the argument to Promise.all()
And it will resolve when all of the promises in the argument array have resolved

async function asyncPromAll() {
  const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
  // looping through result array 
  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]); 
  }
}

### Promise.race()
Resolves as soon as one of the callbacks come back to you 

## Requests
Submitting and retrieving information, how is it processed.

With a GET request, we're retrieving, or getting, information from some source (usually a website). For a POST request, we're posting information to a source that will process the information and send it back.

HTTP Requests:\
Websites take advantage of JavaScripts non-blocking properties.
Load the text and allow users to read it before the image is loaded.

Javascript uses an event loop to handle asynchronous function calls.

JavaScript's XHR object:
Stands for XMLHttpRequest.
With the XHR object you can update part of the web page without reloading the whole page.

AJAX GET Requests using XHR object:

const xhr = new XMLHttprequest();
const url = 'http://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystate = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // code to execute with response
  }
};

xhr.open('GET', url);
xhr.send();

## XML
XML is a markup language similar to HTML.
Stands for Extensible Markup Language.
Not predefined - you define your own tags.
AJAX used to only use XML, now can use other languages.


### XHR POST Requests

    const xhr = new XMLHttpRequest();
    const url = 'http://api-to-call.com/endpoint';
    const data = JSON.stringify({id: '200'});

    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        //Code to execute with response
      }
    };

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey)
    xhr.send(data);


### Requests Summary
- JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for Asynchronous JavaScript and XML, is a set of tools that are used together to take advantage of JavaScript's asynchronous capabilities.
- There are many HTTP request methods, two of which are GET and POST.
- GET requests only request information from other sources.
- POST methods can introduce new information to other sources in addition to requesting it.
- GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.
- POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.
- Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, creating a function that will handle the response object, and opening and sending the request.
- To add a query string to a URL endpoint you can use ? and include a parameter.
- To provide additional parameters, use & and then include a key-value pair, joined by =.
- Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you're working.


### Fetch 
Using promises to handle requests
   
    fetch('http://api-to-call.com/endpoint').then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)}
    ).then(jsonResponse => {
      return jsonResponse;
    })
    })

response part - success callback arrow function as the first argument of .then, only take sone parameter - response.
Second argument of .then takes a single parameter - network error
Chain a second .then response, won't run until the previous .then() method has finished running

### Bind
Bind an object to a function
Reference that object using 'this'

