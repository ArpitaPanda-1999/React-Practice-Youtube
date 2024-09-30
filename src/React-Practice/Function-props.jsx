import React from "react";

const FirstPropes = (propes) => {
    const{name, Email, Phoneno} = propes;
    return(
        <>
            <h1>Hello {name}</h1>
            <p>name : {name}</p>
            <p>Email : {Email}</p>
            <p>Phoneno : {Phoneno}</p>
        </>
    )
}

export default FirstPropes;