
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/login'>Home</Link>
                    </li>
                    <li>
                        <Link to='/add-course'>Add Course</Link>
                    </li>
                    <li>
                        <Link to='/message'>
                            Message
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Log Out
                        </Link>
                    </li>              
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation