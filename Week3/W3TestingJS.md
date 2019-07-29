# Testing in JavaScript

## Test Driven Development
### Benefits:
- Faster and more accurate testing
- Have to slow down and psuedo code, helps you think more thoroughly about pitfalls in code

### Difficulties
- Takes time, can be hard to know what to test
- Trial-by-error approach to development

### What should be tested?
- The outcome or result of a particular piece of code execution.


## Structure of a Test
Setup - setup the conditions required to execute the acction on your SUT
Execution - execute some action on your SUT
Assertion - assert that the action you did had the results you expect
Tear Down - clean up any resources you used in your test

## Good Tests
- Test one thing
- Don't test what didn't happen
- Have no control flow statements
- Can be used as documentation for the code they test
- Are clear and easy to read


## Setting up a new project
    mkdir unit-testing-practice && cd unit-testing-practice && npm init --yes 
    touch index.html index.js Box.js

running npm init --yes

    npm install --save-dev jest 
(Installs the jest command locally within your project as a development dependency.)

If you are going to be using ES6 syntax, this also requires babel, which you can install with the following:

    npm install --dev babel-jest babel-core regenerator-runtime


need to tell our package.json what to do when we want to run our tests.

Change this:

    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },

To this:

    {
    "scripts": {
        "test": "jest"
    }
    }

running

    npm test

from the terminal should produce

    No tests found


Put tests in a __tests__ folder


### Setup and Teardown
If you have some work you need to do repeatedly for many tests you can use beforeEach and afterEach.


### Pure Functions
Don't need to test the functions prompt and alert (for example),don't need to test any function that has been built into the function - someone else has already tested them.

Identify what you need to test and seperate this function out from the others 

Pure functions - functions that do one thing and aren't dependent on others.

### Mocking 
Writing "fake" versions of a function that always behave exactly how you want.

https://jestjs.io/docs/en/mock-functions.html#content

