import React, {useState} from "react";

const Folder = ({handleInsertNode, Explorer }) => {
    console.log(Explorer);
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible : false,
        isFolder : null
    })

    const handleClick = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible : true,
            isFolder 
        })
    }

    const onAddFolder = (e) => {
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(Explorer.id, e.target.value, showInput.isFolder)
            setShowInput({...showInput, visible:false})
        }
    }
    
    if(Explorer.isFolder){
        return(
            <div className="main" style={{marginTop:10, marginLeft:10, cursor:"pointer"}}>
                <div className = "folder" onClick = {() => setExpand(!expand)}>
                    <span>📁{Explorer.name}</span>
                    <div>
                        <button onClick={(e) => handleClick(e, true)}>📁+</button>
                        <button onClick={(e) => handleClick(e, false)}>📄+</button>
                    </div>
                </div>
                
                <div style={{display : expand ? "block" : "none"}}>
                    {
                        showInput.visible && (
                            <div className="inputContainer">
                                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                                <input type="text" onKeyDown={onAddFolder} onBlur={() => setShowInput({...showInput, visible:false})} className="inputContainer__input" autoFocus/>
                            </div>
                        )
                    }

                    {
                        Explorer.items.map((exp, index) => {
                            return(
                                <Folder handleInsertNode={handleInsertNode} Explorer={exp} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    else{
        return(
            <div className = "file" style={{marginTop:10, marginLeft:10 }}>
                <span>📄{Explorer.name}</span>
            </div>
        )
    }    
}

export default Folder;