import React, { useState } from "react";

const Index = () => {
    
    const[item, setItem] = useState("Bye Panda");

    const changeItem = () => {
        setItem("Hello Arpita");
    }

    return(
        <>
            <h1>{item}</h1>

            <button onClick={changeItem}>Click Me</button>
        </>
    )
}

export default Index;