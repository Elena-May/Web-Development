import React from "react"


function InLine() {
    const styles = {
        backgroundColor: "#FF8C00"
    }
    let happy = true;
    
    if (happy) {
        styles.color = "#FFFFFF" 
    } else {
        styles.color = "#000000"
    }
    return (
    <div>
    <p style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}> Good Morning!! </p>
    <p style={styles}> Have a nice day </p>
    </div>
    )
}

export default InLine