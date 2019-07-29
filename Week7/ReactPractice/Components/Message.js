import React from "react"

function Message(props) {

    let iconImagePath = "./images/"
    iconImagePath = iconImagePath + (props.isLoved ? 'loved.png' : 'not-loved.png')
    
    return(
        <span>
            <img src={iconImagePath} alt="Love status" />
            <span className="message-text">{props.text}</span>
        </span>

    )
}

export default Message 