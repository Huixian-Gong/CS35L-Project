import React ,{ useState, useEffect } from 'react';
import Logout from './componentsacc/Logout';
import Signin from './components/SigninForm';
import Signup from './components/SignupForm';
import Welcome from './components/Welcome'
import Account from './componentsacc/board/Account';
import AddCourse from './componentsacc/AddCourse';
import FindClassmate from './componentsacc/classmate/FindClassmate';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import LayoutLogin from './components/LayoutLogin';
import LayoutAccount from './componentsacc/LayoutAccount';
import TodoList from './componentsacc/todo/TodoList';

import {db} from "./firebase"
import {query,collection} from "firebase/firestore"

function App() {
  const [user, setUser] = useState('')
  const Login = details => {
    console.log(details);
    if (details.email != ''){
      setUser(details)
    }
  }

  const Logout = details => {
    setUser('')
    console.log("logout")
  }
  
  return (
    <div>
      {(user != '') ? (
        <LayoutAccount>
          <Routes>
          <Route path="/" element={<Logout Logout={Logout}/>}></Route>
          <Route path="/account" element={<Account user={user}/>}></Route>
          <Route path="/addcourse" element={<AddCourse user={user}/>}></Route>
          <Route path='/findclassmate' element={<FindClassmate user={user}/>}></Route>
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
