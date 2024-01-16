import './toDoItem.css';

const ToDoItem = ({key, task, id, isComplited, deleteToDoItem, checkItem}) => {
    return (
        <div className="toDoItem" style={{backgroundColor: isComplited ? "green" : "", transition: "0.5s"}}>
            <input type="checkbox" onChange={() => checkItem(id)}/>
            <p style={{color: isComplited ? "#fff" : "", transition: "0.5s"}}>{task}</p>
            <button onClick={() => deleteToDoItem(id)}>delete</button>
        </div>
    )
}

export default ToDoItem;