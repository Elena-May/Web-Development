Jest 
Jest is a JavaScript unit testing framework, used by Facebook to test services and React applications

Enzyme
Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components output

Jest and Enzyme
Both Jest and Enzyme are specifically designed to test React applications


create a
setupTests.js file
at
./src/setupTests.js

enzyme to json

expect(toJson(rawRenderedComponent)).toMatchSnapshot();

creating a test file
files with .test.js suffix alongside normal file 

Mount, Shallow or Render

When to use each of these and what they are actually doing 

import { mount, shallow, render } from 'enzyme';

Full Rendering API:(mount(...))

stateless components = only need shallow
Allows us to render only the component itself without its children

99% of the time appropriate to use shallow not mount

Could reasonably test everything using mount - not necessary though and takes longer

API testing
When our application makes a request to an API endpoint, we want to test our App's reaction to the response it receives from that request.
Dont really care what its reciveing or whats going on in the back end, just want to check we can handle it correctly.
Make them good for mocking.
