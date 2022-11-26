import React from "react";
import LoginNavigation from "./LoginNavigation";
import style from './Layout.module.css';

function Layout (props) {
    return (
    <div>
        <LoginNavigation/>
        <main>
            {props.children}
        </main>
    </div>
    );
}

export default Layout