import React from 'react'
import { Routes,Route, useNavigate } from 'react-router'
import Signin from '../components/Signin';
import Signup from '../components/Signup';


const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      
      <div>Login</div>
      <button onClick={()=>navigate("signin")}>Signin</button>
      <button onClick={()=>navigate("signup")}>Signup</button>
      <Routes>
      <Route path={"signin"} element={<Signin/>}></Route>
      <Route path={"signup"} element={<Signup/>}></Route>
    </Routes>
    </div>
    
  )
}

export default Login
