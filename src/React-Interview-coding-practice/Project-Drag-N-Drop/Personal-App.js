import "./Personal-Style.css"
import React, {useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid"; 

const item = {
    id: v4(),
    name: "First element"
}

const item1 = {
    id: v4(),
    name: "Second element"
}


function AppPersonal2() {
    const[text, setText] = useState("");
  const[state, setState] = useState({
    "todo" : {
        title: "Todo",
        items: [item, item1]
    },
    "in-progress": {
        title: "In-Progress",
        items: []
    },
    "done": {
        title: "Completed",
        items: []
    }
    })
  
    const handleDragEnd = ({destination, source}) => {
        console.log("from", source);
        console.log("to", destination);
        
        if(!destination){  
            return
        }
        if(destination.index === source.index && destination.droppableId === source.droppableId){
            return
        }
        //Creating a copy of item before removing before it from state
        const itemCopy = {...state[source.droppableId].items[source.index]}
        setState(prev => {
            prev = {...prev}
            //remove from previous items
            prev[source.droppableId].items.splice(source.index, 1)
            //Adding to new items array location
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
            return prev 
        })
    }

    const addItem = () => {
        setState(prev => {
            return{
                ...prev,
                todo: {
                    title: "todo",
                    items: [{id: v4(), name: text}, ...prev.todo.items]
                }

            }
        })
        setText("");
    }
   
  return (
    <div className="App">
        <div>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
            <button className='btn btn-success' onClick={addItem}>Add</button>
        </div>
        <DragDropContext onDragEnd={handleDragEnd} >
                {
                    _.map(state, (data, key) => {
                        return(
                            <div key={key} className={"column"}>
                                <h3>{data.title}</h3>
                                <Droppable droppableId={key}>
                                    {(provided) => {
                                        return(
                                            <div ref={provided.innerRef} {...provided.droppableProps} className="dropable-col">
                                                {data.items.map((el,index) => {
                                                    return(
                                                        <Draggable key={el.id} index={index} draggableId={el.id}>
                                                            {(provided, snapshot) => {
                                                                return(
                                                                    <div className={`drag-item ${snapshot.isDragging && "dragging"}`}
                                                                     ref={provided.innerRef}
                                                                     {...provided.draggableProps}
                                                                     {...provided.dragHandleProps}
                                                                    >
                                                                        {el.name}
                                                                    </div>
                                                                )
                                                            }}
                                                        </Draggable>
                                                    )
                                                })} 
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </div>
                        )
                    })
                }
            </DragDropContext>
    </div>
  );
}

export default AppPersonal2;

