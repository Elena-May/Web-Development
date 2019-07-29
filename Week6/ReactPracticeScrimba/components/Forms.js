import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // stop common bugs by pulling the values out of the elements before setting state
        const {name, value, type, checked} = event.target
        // ternary to say if checkbox, set differently
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({
            // target represents the elment in which the event was fired, value = value of box
            // wrap in square brackets, principle of javascript that a string property name can be represented inside an object in square brackets
            // this accesses the name of the input element, instead of hardcoding what handlechange representes, stops us needing individual handlechange functions
            [name]: value
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            {/* Makes it so that the sumbit button works*/}
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />     
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />

                {

                }

                {/* in react text area is different, its a self closing element */}
                <br />
                <textarea  
                    value={"Some default value"}
                    onChange={this.handleChange} 
                    />



                <br/>
                
                {/* Checkbox is a type of input, except you dont use value */}
                <label>
                <input type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                 /> Is Friendly?
                </label>

                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female   
                </label>
                <br/>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>

                <br />

                <label>Favorite Color:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >

                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
  
                </select>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2>You are a {this.state.gender} </h2>
                <h2>Your favourite colour is {this.state.faveColor}</h2>

                {/* HTML 5 work like input type submit */}
                <button>Submit</button>
            </form>
        )
    }
}

export default App