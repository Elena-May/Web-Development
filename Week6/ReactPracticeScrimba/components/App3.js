import React, {Component} from "react"
import Conditional2 from "./Conditional2"

class App3 extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    //hook to allow us to run some code immdeiately after a component first mounts to the DOM
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        return (
            <div>
                {this.state.isLoading ?
                <h1> Loading... </h1> :
                <Conditional2 /> }
            </div>
        )
    }
}

export default App3