import React, {Component} from "react"

class NewIdeaForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })

    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addIdea(this.state)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form">
                <h1> Idea Box </h1>
                <input name="name" value={this.state.name} onChange={this.handleChange} placeholder= "Idea Title" />
                <input name="description" value={this.state.description} onChange={this.handleChange} placeholder= "Description" />
                <button className="button" >Submit</button>
            </form>
        )
    }

}

export default NewIdeaForm