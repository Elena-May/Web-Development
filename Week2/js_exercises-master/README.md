# JavaScript exercises

These JavaScript exercises are intended to be completed alongside the Web Development curriculum. They start very simply, but get more involved as you progress through them.

You should start with the following in the specified order: 

1.  [Hello World](./helloWorld)
2.  [Repeat String](./repeatString)
3.  [Reverse String](./reverseString)


## Getting started

You will need to ensure you have a few things installed before you get started:
1. **NPM**:  To check if you have NPM, type `npm --version` in a terminal. If you get back `Command 'npm' not found, but can be installed with:`, do NOT follow the instructions in the terminal to install with `apt-get` (this causes permission issues). Instead, install NPM/Node with NVM by following the instructions [here](https://github.com/creationix/nvm#install-script).
2. **Node**: Type `node -v` to check for it. If you need to install it, type `npm install node`. 
3. **Jasmine**.  Jasmine is a testing framework for Javascript.  Type `jasmine -v` to check for it.  If you need to install it, type `npm install -g jasmine` to do so.
4. Clone or copy this repo to get started.

Each of the exercises include 3 files, a markdown file with a description of the task, a (mostly) empty JavaScript file and a set of tests. 

To complete the exercises you should `cd` into their corresponding directory and run `jasmine [filename].spec.js`. This will then find and run the test file and show you an output. 

The first time you run the tests, you will find that they fail. (You will also find that you may need to delete the `x` from in front of all of the 'it' statements to get the tests to run). The tests fail first by design. It is your task to open the JavaScript file and write the necessary code to allow the tests to pass. 

Each exercise includes 3 files, a markdown file with a description of the task, an empty (or mostly empty) javascript file, and a set of tests.  To complete the exercise go to the exercise directory in a terminal and run `jasmine filename.spec.js`.  This should find and run the test file and show you the output.  Upon first running the tests you will find that the tests fail: this is by design!  Your task is to open up the javascript file and write the code needed to get all of the tests to pass. 

The first exercise, `helloWorld` will walk you through the process in more depth.


