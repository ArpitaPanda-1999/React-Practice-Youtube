import React, { useState } from "react";

const Index1 = () => {

    const[num, setNum] = useState(0);
    const changeNum = () => {
        setNum(num + 1);
    }

    const changeNum1 = () => {
        setNum(num - 1)
    }
    return(
        <>
            <button onClick={changeNum1}>-</button><h1>{num}</h1><button onClick={changeNum}>+</button>
        </>
    )
}

export default Index1;