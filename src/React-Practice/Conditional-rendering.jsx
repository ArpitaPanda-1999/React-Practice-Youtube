import React, {useState} from "react";

const ConditionalRender = () => {

    const isLogin = false;

    const items = ['Arpita', 'Ankita', 'Amisha', 'Rameswar'];

    const isAuthentication = true;

    return(
        <>
            <div>{isLogin ? <h3>welcome admin</h3> : <h3>welcome guest</h3>}</div>

            {
                (items.length > 0) ?
                (<ul>
                    {items.map((item, index) => {
                        return(<li key={index}>{item}</li>)
                    })}
                </ul>) : (<h3>no item display</h3>)
            }

            <div>
                {isAuthentication && <button onClick={() => console.log("logged out")}>Logged out</button>}
            </div>
        </>
    )
}

export default ConditionalRender;