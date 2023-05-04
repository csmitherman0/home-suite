import './TodolistNav.styles.css';

import { useDispatch } from "react-redux";

import { changeTodoProject, hideTodolistNav } from "../../../store/ui/ui.actions";

import closeSquare from '../../../assets/svg/close-square.svg';

const TodolistNav = ({ projects }) => {
    const dispatch = useDispatch();
    const handleProjectClick = (e) => {
        dispatch(changeTodoProject(e.target.getAttribute('data-project')));
    };
    return (
        <div
            id='todolistNav'
        >
            <img
                src={closeSquare}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 40,
                    height: 40
                }}
                onClick={() => dispatch(hideTodolistNav())}
            />
            {projects.map(p => {
                return <a
                    key={p}
                    data-project={p}
                    onClick={handleProjectClick}
                >{p}</a>
            })}
        </div>
    );
};

export default TodolistNav;