import React from "react"

const TodoList = ({ todoList, setTodoList}) => {

    const handleRemoveTodo = (index) => {
        const newTodos = [...todoList]
        newTodos.splice(index, 1)
        setTodoList(newTodos)
    }
    
    const handleDone = (index) => {
        const compTodos = [...todoList]
        compTodos[index].isComplete = true
        setTodoList(compTodos)
    }

    return (
        <ul>
            { todoList.map((todo, index) => (
                <li key={ index } >
                    <span style={todo.isComplete === true ? {color: "grey", textDecorationLine:"line-through"} : {}}>{ todo.task }</span> 
                    <input value="Done" type="button" onClick={ () => handleDone(index) }></input>
                    <input value="X" type="button" onClick={ () => handleRemoveTodo(index) }></input> 
                    </li>
            ))
            }
        </ul>
    )
}

export default TodoList;