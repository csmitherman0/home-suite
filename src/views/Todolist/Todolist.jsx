import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo, removeTodo } from '../../store/todolist/todolist.actions.js';

import Todo from './Todo/Todo.jsx';
import DeleteDialog from '../../components/dialogs/DeleteDialog.jsx';

const Todolist = () => {
    const todolist = useSelector(state => state.todolist);
    const dispatch = useDispatch();

    const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
    // Because the <DeleteDialog /> component has no way of knowing which todo to delete. That data must come from the <Todo /> component.
    const [deletedTodo, setDeletedTodo] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ title: e.target.elements.title.value }));
        e.target.elements.title.value = '';
    };

    const handleContainerClick = () => {
        setDeleteDialogVisible(false);
    };

    const handleDeleteButtonClick = (todo) => {
        dispatch(removeTodo(todo));
    };

    return (
        <div id='todolist' onClick={handleContainerClick}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" placeholder='Todo Title'
                    required name='title'
                    style={{
                        marginTop: 20,
                        padding: '10px 20px'
                    }}
                />
            </form>
            {todolist.map((todo, i) => {
                return <Todo todo={todo} key={i} setDeleteDialogVisible={setDeleteDialogVisible} setDeletedTodo={setDeletedTodo} />;
            })}
            {deleteDialogVisible && <DeleteDialog target={deletedTodo} handleClick={handleDeleteButtonClick} />}
        </div>
    );
};

export default Todolist;