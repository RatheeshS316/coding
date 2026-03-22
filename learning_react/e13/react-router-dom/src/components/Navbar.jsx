import React from 'react'
import "./Navbar.css"
import { Link , useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  } 

  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
      <nav>
        <h1>Home Page</h1>
        <ul>
           <Link to="/">Home</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/about">About</Link>

           <li onClick={handleClick}>Users</li>  {/*  Or*/}
           {/* <Link to="/users">Users</Link> */}
           
           <Link to="/user">User</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
