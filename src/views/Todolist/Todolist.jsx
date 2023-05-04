import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addTodo, removeTodo } from '../../store/todolist/todolist.actions.js';

import { showDeleteDialog, hideDeleteDialog, showTodolistNav } from '../../store/ui/ui.actions.js';

import Todo from './Todo/Todo.jsx';
import TodolistNav from './TodolistNav/TodolistNav.jsx';
import DeleteDialog from '../../components/dialogs/DeleteDialog.jsx';

import hamburger from '../../assets/svg/hamburger.svg';

const Todolist = () => {
    const todolist = useSelector(state => state.todolist);
    const projects = useSelector(state => state.todolistProjects);
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    // Because the <DeleteDialog /> component has no way of knowing which todo to delete. That data must come from the <Todo /> component.
    const [deletedTodo, setDeletedTodo] = useState({});
    const [currTodos, setCurrTodos] = useState();

    useEffect(() => {
        setCurrTodos(todolist.filter(t => t.project === ui.currTodoProject));
    }, [ui.currTodoProject, todolist])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ title: e.target.elements.title.value, project: ui.currTodoProject }));
        e.target.elements.title.value = '';
    };

    const handleContainerClick = () => {
        dispatch(hideDeleteDialog());
    };

    const handleDeleteButtonClick = (todo) => {
        dispatch(removeTodo(todo));
    };

    return (
        <div id='todolist' onClick={handleContainerClick}>
            <h1>{ui.currTodoProject}</h1>
            {!ui.todolistNavShowing && (
                <img
                    src={hamburger}
                    style={{
                        position: 'absolute',
                        top: 55,
                        left: 0,
                        width: 40,
                        height: 40
                    }}
                    onClick={() => dispatch(showTodolistNav())}
                />
            )}
            {ui.todolistNavShowing && <TodolistNav projects={projects} />}
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
            {currTodos?.map(((todo, i) => {
                return <Todo todo={todo} key={i} showDeleteDialog={showDeleteDialog} setDeletedTodo={setDeletedTodo} />;
            }))}
            {ui.deleteDialogShowing && <DeleteDialog target={deletedTodo} handleClick={handleDeleteButtonClick} />}
        </div>
    );
};

export default Todolist;