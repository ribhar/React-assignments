import "./App.css";
import React from "react";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  const [auth,setAuth]=React.useState(false)
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>{setAuth(!auth)}}>
        {/* Show text Add House or Show Rentals based on state */}
          {auth ? "Add New House":"Shoe Houses Tables"}
     
      </button>
      {auth? <Rentals/> : <AddHouse/>  }
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;

