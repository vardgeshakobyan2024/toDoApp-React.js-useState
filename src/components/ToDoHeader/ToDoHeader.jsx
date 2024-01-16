import './toDoHeader.css';

const ToDoHeader = ({inputValue, setInputValue, addNewToDo}) => {
    return (
        <form onSubmit={addNewToDo}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}

export default ToDoHeader;