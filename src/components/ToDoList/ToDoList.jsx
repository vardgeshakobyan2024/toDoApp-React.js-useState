import { useState } from 'react';
import ToDoHeader from '../ToDoHeader/ToDoHeader';
import './toDoList.css';
import ToDoBody from '../ToDoBody/ToDoBody';

const ToDoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [toDos, setToDos] = useState([]);

    const addNewToDo = (e) => {
        e.preventDefault();
        let newToDo = {
            id: new Date().getTime().toString(),
            task: inputValue,
            isComplited: false,
            isEditing: false,
            editingText: ""
        }
        setToDos([...toDos, newToDo]);
        setInputValue("");
    }

    const deleteToDoItem = (id) => {
        setToDos(toDos.filter((el) => el.id !== id));
    }

    const checkItem = (id) => {
        setToDos(toDos.map((toDo) => toDo.id === id ? {...toDo, isComplited: !toDo.isComplited} : toDo))
    }

    return (
        <div className="toDoList">
            <h1>ToDoList...</h1>
            <ToDoHeader inputValue={inputValue} setInputValue={setInputValue} addNewToDo={addNewToDo}/>
            <ToDoBody toDos={toDos} deleteToDoItem={deleteToDoItem} checkItem={checkItem}/>
        </div>
    )
}

export default ToDoList;