import React, { useEffect } from 'react'
import { Routes,Route, useNavigate, useLocation } from 'react-router'
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext';



const Login = () => {
  const {token, login} = useContext(Authcontext)
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state.from.pathname || "/";
  const handleclick= ()=>{
    login();
    navigate(from,{replace: true})
  }

  useEffect(()=>{
    if(token){
      navigate(from,{replace: true})
    }
  },[token])
  return (
    <div>
      
      <div>Login</div>
      <button onClick={handleclick}>Login</button>

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
