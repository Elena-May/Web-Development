import React from "react"
import ContactCard from "./ContactCard"

function Appp() {
    
    return (
        <div className="contacts">
            <ContactCard
                contact={{name: "Mrs Whiskerson",
                phone: "9821070312",
                email: "Whis@email.com"}}
            />

            <ContactCard 
               contact= {{name: "Misty",
               phone: "247019274901",
               email: "fluff@email.com"}} 
            />

            <ContactCard 
                contact={{name: "Othello",
                phone: "134424",
                email: "Shake@email.com"}}
            />
            <ContactCard 
                contact={{name: "Simba",
                phone: "1209u417",
                email: "Cat@email.com"}}
            />
            <ContactCard 
                contact={{ name:"Haku",
                email: "spirit@email.com"
                }}
                />
        </div>
    )
}

export default Appp