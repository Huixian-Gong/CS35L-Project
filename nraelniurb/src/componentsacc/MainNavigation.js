
import { Link } from 'react-router-dom'

import style from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={style.header}>
            <div className={style.logo}>Nraelniurb</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/account'>Home</Link>
                    </li>
                    <li>
                        <Link to='/addcourse'>Add Course</Link>
                    </li>
                    <li>
                        <Link to='/findclassmate'>Find Classmate</Link>
                    </li>
                    <li>
                        <Link to='/message'>Message</Link>
                    </li>
                    <li>
                        <Link to='/todolist'>Todo</Link>
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