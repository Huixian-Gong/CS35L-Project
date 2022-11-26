import { Link, Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';

import LayoutLogin from './components/layout/Layout';
import LayoutFeature from "./components/layoutin/Layout";
import Logout from './components/layoutin/Logout';
import Homepage from './pages/Homepage';
import Home from './pages/features/Home';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""})
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in")
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Details do not match!")
      setError("Details do not match!")
    }
  }
  const Logout = details => {
    setUser({ name: "", email: ""})
    console.log("logout")
  }
  return (
    <div className="App">
    {(user.email != "") ? (
      <LayoutFeature>
        <Routes>
          <Route path="/login" element={<Home/>}/> 
          <Route path="/add-course" />
          <Route path="/message"/>
          <Route path='/' element={<Logout onClick={Logout}/>}/>
        </Routes>
      </LayoutFeature>
    ) : (
      <LayoutLogin>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path='/login' element={<LoginForm Login={Login} error={error}></LoginForm>}/>
          <Route path='/sign-up' element={<SignupForm/>}/>
        </Routes>
      </LayoutLogin>
      )}
  </div>
    
  );
}

export default App;
      // <div>
      //   <h2>Welcome, <span>{user.name}</span></h2>
      //   <button onClick={Logout}>Logout</button>
      // </div>