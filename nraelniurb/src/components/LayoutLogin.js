import React from "react";
import LoginNavigation from "./LoginNavigation";
import style from './LayoutLogin.module.css';

function Layout (props) {
    return (
    <div  style={{ 
        backgroundImage: `url("https://shb.ais.ucla.edu/shibboleth-idp/img/skyline.jpg")` ,
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