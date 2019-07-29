import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class State2 extends React.Component {
    constructor() {
        super()

        this.state = {
        loggedIn : false 
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
               return { loggedIn : !prevState.loggedIn
            }

        })

    }

    render() {
        let buttonText = this.state.loggedIn ? "Log out" : "Log in"
        let displayText = this.state.loggedIn ? "Logged in" : "Logged out"
        return (
            <div>
                <button onClick={this.handleClick}> {buttonText} </button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}

export default State2
