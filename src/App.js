import { useState } from "react";

function ToDo ({value}) {
    return(
        <li>
            {value}
        </li>
    )
}

function ToDos ({toDoList}) {

    const renderToDo = (i) => {
        // console.log("i" + i)
        // console.log("toDoList[i]" + toDoList[i])
        // console.log(toDoList[1])
        return(
            <ToDo 
            key={i}
            value={toDoList[i]}
            />
        )
    }


    return (
        <>
            {[...Array(3).keys()].map((i) => (
                renderToDo(i)
                ))}
        </>
    )
}

function App() {
    const [toDoIndex, setToDoIndex] = useState(0)
    const [toDoList, setToDoList] = useState(Array(3).fill(""))

    const handleAddToDo = () => {
        if (toDoIndex === 2) {
            setToDoIndex(0)
        }
        let currentList = toDoList.slice()
        currentList[toDoIndex] = "hello"
        setToDoList(currentList)
        setToDoIndex(toDoIndex+1)
    }

    return (
    <div className="App">
        <button className="addToDo" onClick={handleAddToDo}>
            Add ToDo
        </button>
        <input type="text"></input>
        <ul>
            <ToDos toDoList={toDoList}/>
        </ul>
    </div>
);
}

export default App;
