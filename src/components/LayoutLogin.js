import React from "react";
import LoginNavigation from "./LoginNavigation";
import style from './LayoutLogin.module.css';
import img from '../ui/skyline.jpg'
function Layout (props) {
    return (
    <div  style={{ 
        backgroundImage: `url(${img})` ,
        backgroundSize:"cover",
        height: "100vh",
        backgroundPosition: 'center',
        }} >
        <LoginNavigation/>
        <main>
            {props.children}
        </main>
    </div>
    );
}

export default Layout