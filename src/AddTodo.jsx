import { useState } from "react";

const AddTodo = ({ setTodoList }) => {
    const [todo, setTodo] =useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (todo === ""){
            return;
        }
        setTodoList((todoList) => [...todoList, { task: todo, isComplete: false }])
        setTodo("")
    }

    const handleAddTodo = (event) => {
        console.log(event.target.value)
        setTodo(event.target.value)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input value={ todo } placeholder="Add a New Task" onChange={ handleAddTodo }></input>
            <button type="submit">Add ToDo</button>
        </form>
    )
}

export default AddTodo;