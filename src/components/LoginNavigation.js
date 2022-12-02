
import { Link } from 'react-router-dom'

import classes from './LoginNavigation.module.css'

function MainNavigation() {
    return (
        
        <header className={classes.header}>
            <Link to="/"> <div className={classes.logo}>Nraelniurb</div></Link>
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
                    <li>
                        <Link to="/resetpassword">Reset Password</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation