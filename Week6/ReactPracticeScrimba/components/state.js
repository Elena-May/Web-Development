// the data that a component maintains, it can change its value
// props, the other way to pass data, cannot be changed, props is immutable, state isnt 

import React, {Component} from "react"

class App extends Component {

    //a place to intialise some values
    constructor() {
        //goes to parent class and brings them down to this component
        super()
        //this.state will always be an object, now the component has state
        this.state = {
            //changing the state automatically changes what is seen on screen
            answer: "Yes"
        }

    }

    render() {
        return (
            <div>
                <h1> Is state important to know? {this.state.answer} </h1>
                <ChildComponent answer={this.state.answer}/>
            </div>
        )
    }
}