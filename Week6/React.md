# Introduction to React
A client-side javascript framework which allows us to easily and efficiently manipulate the DOM based on application data and how it changes in response to user interaction.
Framework - more complex than a library, more than a abstraction, stricter in organising the code.

## React cool features
The virtual DOM = an in memory object that represents a DOM structure that can be manipulated with JavaScript. A copy of the DOM structure, go via the virtual DOM, then knows which components specifically need to be updated on the real DOM.
JSX = special HTML syntax 
Props and state = state holds the data that represent shte actual state of our application, can be changed by a user, not like props. When should you make a component stateful? Can create components using functions (stateless), and classes are stateful. If in doubt create a stateless one first.
Components = 

## Why React
Its fast
It Abstracts

## Create-react-app
Doesn't initialise it as a git project
But does create .gitignore
package-lock.json = exact dependencies, tracks any changes to dependencies
public - 
src - 

## Forms
HTML form elements
Normally controlled by user input
Yet in React, all changes are handled by setstate()
Combine the two by making react state the single soruce of truth
The React component that renders a form also control what happens in that form on subsequent user input
e.g. every time someone types an inout state is updated, handlestate is acting on keystroke?

## Interactivity
Props - way to handle events

onMouseMove
onMouseUp
onMouseDown
onClick
onDoubleCLick
onMouseLeave
onTouchStart
onTouchEnd

## Constructor
Constructor function - function that runs when an object is created.
Returns a reference to the Object function that created the instances prototype.
 

 ## Stages of building and app -
 Decide on all your different components
 Build a static one
 Use minimal set up of mutable state


 ## Finding out if something is state - 
 Is it passed from a parent via props? - if so, it isn't state
 Does it remain unchanged over time? - if so, it isn't state
 Can you compute based on any other state or props in your component? - if so, it isn't state

 ## Where should state live?
 One way data flow can make it hard to figure out 
 For each piece of identified state in your application - 
 - Identify every component that renders something based on state
 - Find a common owner component (a single component above all components that needs state in the hierarchy)
 - Either the common owner or another component higher up in the hierarchy should own the state
 - If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

## Component Communication in React 
Parent component can communicate with a child component via properties and props object
Callback function = a parent component can pass a reference to a callback function as a property that a child component can call (and pass arguments if needed)


## Lifecycle
React component has three lifecycle phases = 
- Birth/Mounting
- Growth/updating
- Death/unmounting

Constructor method - called before the component is mounted onto the DOM.
super - important in cases where our class extends any other class that also has a defined constructor
Calling super() - calls the constructor of our parent class and allows it to initalise itself

### getDerivedStateFromProps
Takes in nextProps and prevState and returns an object to update state, or null if the new props do not require state updates.

### componentWillMount
Not a big difference between constructor() and componentWillMount().
componentWillMount() - only called once
DONT USE

### Render
Keep as a pure method, never call this.setState() within render()

### componentDidMount()
Invoked immediately after a component is mounted
 Any functionality that is dependent on existing DOM nodes should live here 
 go-to location for firing off an API or network request (BEST PRACTICE)

### PropTypes
Allows you to specify what type of props you are expecting in a certain component
Get a warning if your object is not what you expected it to be

npm install --save prop-types

        import PropTypes from 'prop-types'

            class Main extends Component  {
            render() {
                return(
                <p>Welcome, {this.props.name}</p>
                )
            }
            }

            Main.propTypes = {
            name: PropTypes.string
            }

### DefaultProps
Just as when writing functions, React also allows us to provide a default value for props. defaultProps let you ensure that a value will be passed through. This helps eliminate some of the incessant ternaries that either render the prop or an empty string, for instance.

class Main extends Component  {
  render() {
    return(
      <p> Welcome, {this.props.name} </p>
    )
  }
}

Main.defaultProps = {
  name: 'Batman'
}


### User Interaction 
React provides a way for us to handle events using props.

Vanilla JS 
    export const go = () => {
    const ele = document.getElementById('mousemove');
    ele.innerHTML = 'Move your mouse to see the demo';
    ele.addEventListener('mousemove', function(evt) {
      const { screenX, screenY } = evt;
      ele.innerHTML = '<div>Mouse is at: X: ' +
            screenX + ', Y: ' + screenY +
                      '</div>';
    })
    }

React JS
    <div onMouseMove={(evt) => console.log(evt)}>
    Move the mouse over this text
    </div>

