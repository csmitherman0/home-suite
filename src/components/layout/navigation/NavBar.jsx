import './NavBar.styles.css';

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
                <li><a href='/todolist'>Todo List</a></li>
                <li><a href='/notes'>Notes</a></li>
                <li style={{ float: 'right' }} onClick={purgeCache}><a href='/'>Purge Store</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;