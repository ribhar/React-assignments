import React from 'react'
// import React, { Component } from 'react';
import {Link} from "react-router-dom"
function Nav() {
  return (
  <div style={{
    marginBottom:"10px",
    padding: "40px",
    color: "white",
    background: "black",
    fontSize: "30px",
    fontWeight: "bold",
    display: "flex",
    gap: "20px",

    }}>
      <div>
      <Link to='/home' style={{color: "white", textDecoration: "none"}}>Home</Link>
      </div>
      
      <div>
        <Link to='/about' style={{color: "white", textDecoration: "none"}} >About</Link>
      </div>

      <div>
        <Link to='/login' style={{color: "white", textDecoration: "none"}} >Login</Link>
      </div>
      <div>
        <Link to='/x' style={{color: "white", textDecoration: "none"}} >X</Link>
      </div>

      <div>
        <Link to='/counter' style={{color: "white", textDecoration: "none"}} >Counter</Link>
      </div>
    </div>
  )
}

export default Nav
