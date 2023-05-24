import './NavBar.styles.css';

import { Link } from 'react-router-dom';
import { persistor } from '../../../store/index.js';

const NavBar = () => {
    const purgeCache = () => {
        persistor.purge()
            .then(() => console.log('Cache Pruged!'))
            .catch(() => console.log('Could Not Purge Cache...'));
    };
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/todolist">Todo List</Link>
                </li>
                <li>
                    <Link to="/notes">Notes</Link>
                </li>
                <li style={{ float: "right" }} onClick={purgeCache}>
                    <a href="/">Purge Store</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;