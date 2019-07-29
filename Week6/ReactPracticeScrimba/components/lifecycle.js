import React, {Component} from "react"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class TodoList extends Component {
    constructor() {
        super()
        this.state = {}
    }

    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        // this for the rare cases when your component needs to take in props from its parent method an has to set a state based on those props
        // react team tends to discourage this method
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    getSnapshotBeforeUpdate() {
        // create a backup for the current way things are 
    }

    componentDidMount() {
        //GET the data I need to correctly display
    }

    componentWillReceiveProps(nextProps) {
            if (nextProps.whatever !== this.props.whatever) {
                // do something important here 
            }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // return True if want it to update
        // return false if not 

    }
    
    componentWillUnmount() {
        //teardown or clean up before your component disappears
        //remove event listener
    }

    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App