import React, { useState } from "react";
import style from './SignupForm.module.css'

function SignupForm({ Login, error }) {
    const [details, setDetails] = useState({Name: "", email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <main className={style.main}>
        <form onSubmit={submitHandler}>
            <div className={style.inner}>
                <h2>Sign up</h2>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
                <div className={style.group}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                </div>
                <div className={style.group}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className={style.group}>
                    <label htmlFor="passward">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <div className={style.group}>
                    <label htmlFor="passward">Confirm Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <input type="submit" value="CONFIRM"></input>
            </div>
        </form>
        </main>
    );
}

export default SignupForm;