//prop practice
import React from "react"

function ContactCard(props) {
    return (
    <div className="contact-card">

        <h3>{props.contact.name}</h3>
        <p style={{display: props.contact.phone ? "block" : "none"}}>Phone: {props.contact.phone}</p>
        <p>Email: {props.contact.email}</p>
    </div>
    )
}

export default ContactCard