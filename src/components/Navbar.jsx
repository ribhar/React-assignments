import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link style={{color:"white",fontSize:"25px",margin:"0px 10px",textDecoration:"none"}} to="/" >Home</Link>
      <Link style={{color:"white",fontSize:"25px",margin:"0px 10px",textDecoration:"none"}} to="/about" >About</Link>
      <Link style={{color:"white",fontSize:"25px",margin:"0px 10px",textDecoration:"none"}} to="/products" >Products</Link>
      <Link style={{color:"white",fontSize:"25px",margin:"0px 10px",textDecoration:"none"}} to="/products/men" >Men</Link>
      <Link style={{color:"white",fontSize:"25px",margin:"0px 10px",textDecoration:"none"}} to="/products/women" >Women</Link>
      <Link style={{color:"white",fontSize:"25px",margin:"0px 10px",textDecoration:"none"}} to="/products/kids" >Kids</Link>
      <Link style={{color:"white",fontSize:"25px",margin:"0px 10px",textDecoration:"none"}} to="/products/homedecor" >Home Decor</Link>
    </nav>
  );
};
