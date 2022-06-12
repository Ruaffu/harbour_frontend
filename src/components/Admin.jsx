import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <li>
      <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li>
      <NavLink className="nav-link" to="/connect">Connect boat to harbour</NavLink>
      </li>
      <li>
      <NavLink className="nav-link" to="/update">Update boat info</NavLink>
      </li>
      <li>
      <NavLink className="nav-link" to="/delete">Delete boat</NavLink>
      </li>
    </div>
  )
}

export default Admin