import React, {useState} from "react";

const HideShowToggle = () => {

    const[showbox, setShowbox] = useState(true);

    return(
        <>
            <h2>Hide Show and Toggle</h2>
            {showbox ? <div className="box">Container</div> : null}
            <button onClick={() => setShowbox(false)}>Hide</button>
            <button onClick={() => setShowbox(true)}>Show</button>
            <button onClick={() => setShowbox(!showbox)}>Toggle</button>
        </>
    )
}

export default HideShowToggle;