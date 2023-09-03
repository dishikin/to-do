import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList.jsx";
import "./App.css";

function App() {
    const [todoList, setTodoList] = useState([])

    return (
        <div className="appContainer">
            <div className="appTitile">
                <h1>ToDo List</h1>
            </div>
            <div className="app">
                <AddTodo setTodoList={setTodoList} />
                <TodoList todoList={todoList} setTodoList={setTodoList} />
            </div>
        </div>
        
);
}

export default App;
