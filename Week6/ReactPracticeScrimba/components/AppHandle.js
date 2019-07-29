import React from "react"
// https://reactjs.org/docs/events.html#supported-events

function handleClick() {
    console.log("I was clicked")
}

function AppHandle() {
    return (
        <div>
            <button onClick={handleClick()} >Click me</button>
        </div>
    )
}

export default AppHandle