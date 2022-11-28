import React ,{ useState, useEffect } from 'react';
import Logout from './componentsacc/Logout';
import Signin from './components/SigninForm';
import Signup from './components/SignupForm';
import Welcome from './components/Welcome'
import Account from './componentsacc/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LayoutLogin from './components/LayoutLogin';
import LayoutAccount from './componentsacc/LayoutAccount';
import TodoList from './componentsacc/TodoList';

import {db} from "./firebase"
import {query,collection} from "firebase/firestore"
import Todo from './componentsacc/TodoList';

function App() {
  const [user, setUser] = useState({email:''})
  const Login = details => {
    console.log(details);
    if (details.email != ''){
      setUser({email: details})
    }
  }

  const Logout = details => {
    setUser({ name: "", email: ""})
    console.log("logout")
  }

  return (
    <div>
      {(user.email != '') ? (
        <LayoutAccount>
          <Routes>
          <Route path="/" element={<Logout Logout={Logout}/>}></Route>
          <Route path="/todolist" element={<TodoList user={user}/>}></Route>
          </Routes>
        </LayoutAccount>  
      ) : (
      <AuthContextProvider>
        <LayoutLogin>
          <Routes>
            <Route path="/" element={<Welcome/>}></Route>
            <Route path='/login' element={<Signin Login={Login}/>}/>
            <Route path='/signup' element={<Signup />}/>
          </Routes>
        </LayoutLogin>
      </AuthContextProvider>
      )}
    </div>
  );
}

export default App;
