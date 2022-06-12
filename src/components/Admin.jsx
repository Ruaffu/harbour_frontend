import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
import "../styles/Forms.css";

const Admin = () => {
  return (
    <div className='login'>
      <li>
      <NavLink className="button" to="/">Home</NavLink>
      </li>
      <li>
      <NavLink className="button" to="/connect">Connect boat to harbour</NavLink>
      </li>
      <li>
      <NavLink className="button" to="/update">Update boat info</NavLink>
      </li>
      <li>
      <NavLink className="button" to="/delete">Delete boat</NavLink>
      </li>
    </div>
  )
}

export default Admin