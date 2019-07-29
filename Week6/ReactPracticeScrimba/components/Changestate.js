import React from "react"

class Changestate extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        //inbuilt function of super, pass a new version of state 
        // pass in the previous state to create a  new state object, dont directly modify current state

        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {

        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default Changestate