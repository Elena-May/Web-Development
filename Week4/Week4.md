Learn difference between synchronous and asynchronous code
Introduction to promises and the problems they solve
Write some promises
Understand fetch and how it relates to promises 

### 


##
External servers we can make requests to that return data that we can integrate into our application 
e.g. weathermaps, googlemaps e.t.c.
Anything on your website you didn't write
Most external APIs need an API key so that you can access them
Have to integrate the API key into the request that you are making.
Structuring requests varies between API's.

How do we get the API from our data into our code
Until recently, was HTTP requests
(look up syntax)

### fetch



for security of API
fetch('url.url.com/api', {
    mode:'cors'
})


### JSON - JavaScript Object Notation
Text-based data format following JavaScript object syntax.
Can be sed independently from JavaScript, many environments feature the ability to read(parse) and generate JSON.

Exists as a string.
Stored in its own file, basically a text file with an extension .json.

You can include the same basic data types inside JSON as you can in a standard JavaScript object — strings, numbers, arrays, booleans, and other object literals. This allows you to construct a data hierarchy.

JSON text basically looks like a JavaScript object, except it can also be an array.

It's purely a data format, doesn't contain any methods.

### Promises, async and await in JavaScript.md

### ES6 Modules

Early Days - 
Linking HTML and JavaScript the old way  - 
        <script src=index.js></script>

If you wanted to use a library e.g. moment.js which can help format data in a human readable way - 
        <script src="moment.min.js"></script>

Was easy to understand, would be annoying to find and download new version of libraries every time they would donate.

### 2010 - 
Several competing JS package managers emerged, help automate the process of downloading and upgrading libraries from a central repository.
npm - became most popular in 2015.
npm was orginallly meant as a package manager for node.js, a JS runtime designed to run on the server not the frontend.

Link to moment.js through node where it will be automatically updated - 
        <script src="node_modules/moment/min/moment.min.js"></script>

This means we have to dig through the node_modules folder however.

### Webpack - 
JS wasn't originally designed with feature of importing code from one file to another
Was designed to only run in the browser, eith no access to the file system of the client's computer
Organising JavaScript code into multiple files used to mean you would have to load each file with variable shared globally
With above example, load entire moment.min.js file into HTML, defines a global variable moment, then available to any file laoded after moment.min.js regardless of whether it needs it or not

Rather than loading into HTML, can use node.js (a JS runtime designed to run on the server). 

    // index.js
    var moment = require('moment');


This is great unless you want to load files in the browseer, the browser cant access the node_modules folder.
This is where a module bundler comes in.
Module bundler is a tools that gets around the problem of not being able to rquire with a build step which means that there is a final single file of javascript produced with no require statmenets.

Webpack is the most popular, works well with react.

More info in WebPack.md

### Babel - 
Transpiling code - turning it from one code language to another similar language.
Changes between different JavaScript versions.

### Npm scripts - 
Task runner - tools that automates differnt parts of the build process.
For frontend development, tasks include minifying code, optimizing images, running tests, etc.
Most popular - using built in npm tools for task running.

npm run build - run webpack
npm watch - automatically rerunss webpack eaxch time any JavaScript file changes

### npm - 
Makes it easy for JavaScript developers to share code theyve created
Other developers can reuse the code in their own applications
npm also allows for easy updates and downloads
reusable code - modules or packages
Normally small, small building block which solves one problem
Can browse npm

The website, the regitry `(big dtabase of info of package) , npm client (allows developers to publish code to the registry).

### Yarn - 
similar to npm but with more features

