import React, { Component } from 'react';
import NewIdeaForm from './NewIdeaForm'
import IdeasContainer from './IdeasContainer'
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
        ideas: []
    }
    this.addIdea = this.addIdea.bind(this)
    this.removeIdea = this.removeIdea.bind(this)
}

addIdea = (idea) => {
    const newIdea = {...idea, id: Date.now()}
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ ideas })
}


removeIdea(id) {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    
    this.setState ({
            ideas
    })

}


render() {
    return(
        <div className="outer">
            <NewIdeaForm addIdea={this.addIdea} />
            <IdeasContainer ideas={this.state.ideas} removeIdea={this.removeIdea} />
        </div>
    )
}
}

export default App;
