
import { Link } from 'react-router-dom'

import style from './MainNavigation.module.css'
import logo from './../ui/1f43b.png'

function MainNavigation() {
    return (
        <header className={style.header}>
            <div class="wrapper">
                <div className={style.logo}>
                    <img src={logo} alt="Logo" height={140}/>
                
                    <div class={style.lt}> 
                    Nraelniurb
                </div>
                </div>
            </div>
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
                        <Link to='/'>Log Out</Link>
                    </li>              
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation