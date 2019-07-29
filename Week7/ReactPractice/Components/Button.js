import React, {Component} from "react"

// props.onClick references a function that our parent MessageContainer component passes as a property when it creates
// a new instance of our button component

function Button(props) {

        return (
            <button onClick={props.onClick} 
                    className="btn btn-xs btn-default"
            >{props.text}</button>
        )
}

export default Button