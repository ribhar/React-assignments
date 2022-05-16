import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Counter from "./pages/Counter";
import X from "./pages/X";
import { useContext, useEffect } from "react";
import { Authcontext } from "./Context/AuthContext";
import RequiredAuth from "./components/RequiredAuth";
// import {}
// import NoteState from './Context/NodeState';
// import Home from './components/Home';

function App() {
  // const { token } = useContext(Authcontext);
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/login");
  //   }else{
  //     navigate(location.state);
  //   }
  // }, [token]);
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"about"} element={<About />}></Route>
        <Route path={"login/*"} element={<Login />}></Route>
        <Route path={"X"} element={
          <RequiredAuth>
            <X /> 
          </RequiredAuth>
          }></Route>
        <Route path={"counter/*"} element={<Counter />}>
          <Route path={":count"} element={<Counter />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
