import React from "react";
import MainNavigation from "./MainNavigation";
import style from './LayoutAccount.module.css';
import img from '../ui/UCLA_SUNSET_Wilson+Plaza_2.jpg'

function Layout (props) {
    return (
    // <div style={{ 
    //     backgroundImage : `url(${img})` ,
    //     backgroundSize:"cover",
    //     height : "100vh",
    //     backgroundPosition: 'center',
        
    //     }}>
        <div className={style.img}>
        <MainNavigation/>
        
        <main className={style.main}>
            {props.children}
        </main>
    </div>
    );
}

export default Layout