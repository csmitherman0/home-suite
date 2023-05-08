import './TodolistNav.styles.css';

import { useDispatch, useSelector } from "react-redux";

import { changeTodoProject, hideTodolistNav } from "../../../store/ui/ui.actions";
import { addProject, removeProject } from '../../../store/todoProjects/todoProjects.actions';
import { removeTodosByProject } from '../../../store/todolist/todolist.actions';

import closeSquare from '../../../assets/svg/close-square.svg';
import trash from '../../../assets/svg/trash.svg';

const TodolistNav = () => {
    const projects = useSelector(state => state.todolistProjects);
    const ui = useSelector(state => state.ui);
    const dispatch = useDispatch();

    const handleProjectClick = (e) => {
        const projectId = e.target.getAttribute('data-project');
        const targetProject = projects.find(p => p._id === projectId);
        dispatch(changeTodoProject(targetProject));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectName = e.target.elements.projectName.value;
        if (projectName) {
            dispatch(addProject(projectName));
        }

        // Clear the input
        e.target.elements.projectName.value = '';
    };

    const handleTrashClick = (e) => {
        e.stopPropagation();
        const projectId = e.target.getAttribute('data-project');
        if (projectId === projects[0]._id) {
            return null;
        }
        if (ui.currTodoProject._id === projectId) {
            dispatch(changeTodoProject(projects[0]));
        }
        dispatch(removeTodosByProject({ _id: projectId }))
        dispatch(removeProject(projectId));
    };

    return (
        <div
            id='todolistNav'
        >
            <img
                id='closeSquare'
                src={closeSquare}
                onClick={() => dispatch(hideTodolistNav())}
            />
            {projects.map(p => {
                return <a
                    key={p._id}
                    data-project={p._id}
                    onClick={handleProjectClick}
                >
                    {p.name}
                    <img
                        id='trashIcon'
                        src={trash}
                        onClick={handleTrashClick}
                        data-project={p._id}
                    />
                </a>
            })}
            <form onSubmit={handleSubmit}>
                <input type='text' name='projectName' />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default TodolistNav;