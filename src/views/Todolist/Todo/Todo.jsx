import trash from '../../../assets/svg/trash.svg';
import check from '../../../assets/svg/check.svg';
import restore from '../../../assets/svg/restore.svg';

import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../../store/todolist/todolist.actions';

const Todo = ({ todo, showDeleteDialog, setDeletedTodo }) => {
    const dispatch = useDispatch();

    const handleTrashClick = (e) => {
        e.stopPropagation();
        dispatch(showDeleteDialog());
        setDeletedTodo(todo);
    };

    const handleCheckClick = () => {
        dispatch(toggleTodo(todo));
    };
    return (
        <div
            className='todo'
            style={{
                width: '100%',
                textAlign: 'center',
                marginTop: 50,
                marginBottom: 50,
                border: '1px solid lightgray',
                position: 'relative',
            }}
        >
            <img
                src={trash}
                onClick={handleTrashClick}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 30,
                    height: 30,
                    cursor: 'pointer',
                }}
            />
            <img
                src={todo.completed ? restore : check}
                onClick={handleCheckClick}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 30,
                    height: 30,
                    cursor: 'pointer',
                }}
            />
            <h2
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#959595' : 'black',
                }}
            >
                {todo.title}
            </h2>
        </div>
    );
};

export default Todo;