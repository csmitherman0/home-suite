import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../../store/todolist/todolist.actions.js';

import Todo from './Todo/Todo.jsx';

const Todolist = () => {
    const todolist = useSelector(state => state.todolist);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ title: e.target.elements.title.value }));
        e.target.elements.title.value = '';
    };

    return (
        <div id='todolist'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" placeholder='Todo Title' name='title'
                    style={{
                        marginTop: 20,
                        padding: '10px 20px'
                    }}
                />
            </form>
            {todolist.map((todo, i) => {
                return <Todo todo={todo} key={i} />;
            })}
        </div>
    );
};

export default Todolist;