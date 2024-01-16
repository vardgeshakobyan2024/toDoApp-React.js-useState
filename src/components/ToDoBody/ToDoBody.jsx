import ToDoItem from '../ToDoItem/ToDoItem';
import './toDoBody.css';

const ToDoBody = ({toDos, deleteToDoItem, checkItem}) => {
    return (
        <div>
            {
                toDos.map((el) => {
                    return (
                        <ToDoItem 
                            key={el.id}
                            task={el.task} 
                            id={el.id}
                            isComplited={el.isComplited} 
                            deleteToDoItem={deleteToDoItem}
                            checkItem={checkItem}
                        />
                    )
                })
            }
        </div>
    )
}

export default ToDoBody;