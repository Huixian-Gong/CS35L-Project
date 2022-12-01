
import { Link } from 'react-router-dom'

import classes from './LoginNavigation.module.css'

function MainNavigation() {
    return (
        
        <header className={classes.header}>
            <div className={classes.logo}>Nraelniurb</div>
            <nav>
                <ul>
                    <li>
                        {/* <Link to='/'> Home</Link> */}
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation