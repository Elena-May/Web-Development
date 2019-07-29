import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
        }
    }
    // &&
    // true && false would be false = finding out if something is true
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 &&
                <h2>You have {this.state.unreadMessages.length} unread messages!</h2> }
                null
            </div>
        )
    }
}

export default App
