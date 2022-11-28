import React from "react";
import MainNavigation from "./MainNavigation";
import style from './LayoutAccount.module.css';

function Layout (props) {
    return (
    <div>
        <MainNavigation/>
        <main className={style.main}>
            {props.children}
        </main>
    </div>
    );
}

export default Layout