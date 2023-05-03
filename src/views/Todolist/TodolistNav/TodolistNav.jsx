import { useDispatch } from "react-redux";

import { changeTodoProject } from "../../../store/ui/ui.actions";

const TodolistNav = ({ projects }) => {
    const handleClick = () => { };
    return (
        <div
            id='todolistNav'
            style={{
                height: '100%',
                width: 200,
                position: 'fixed',
                zIndex: 1,
                top: 50,
                left: 0,
                backgroundColor: 'blue',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {projects.map(p => {
                return <a
                    onClick={handleClick}
                >{p}</a>
            })}
        </div>
    );
};

export default TodolistNav;