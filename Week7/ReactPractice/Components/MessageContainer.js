import React, {Component} from "react"
import Message from "./Message"
import Button from "./Button"

class MessageComponent extends Component {
    constructor() {
        super()
        this.state = {
        isLoved: false
        }

        this.toggleLove = this.toggleLove.bind(this)
    }

    toggleLove() {
        this.setState({
            isLoved: ! this.state.isLoved
        })
    }

    render() {

        const messageText = "Now you know how React.js components communicate with each other."
        const buttonText = this.state.isLoved ? "Unlove" : 'Love'

        return (
            <div className="message">
                <Message text={messageText} isLoved={this.state.isLoved} />
                <Button text={buttonText} onClick={this.toggleLove} />
            </div>

        )
    }
}

export default MessageComponent
