import React, {useState} from "react";

const InputBox = () => {

    const[inputValue, setInputValue] = useState("")

    const[inputValueShow, setInputValueShow] = useState(false)

    const handleInput = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value); //input change with change in text in same time   
        setInputValueShow(false);//this is false because we want onclick it will submit otherwise if true it will show on the screen
    }

    return(
        <>
            <h2>Input Details Change</h2>
            <h3>{inputValueShow ? inputValue : ""}</h3>
            <input type="text" onChange={handleInput} />
            <button onClick={() => setInputValueShow(true)}>submit</button>
        </>
    )
}

export default InputBox;