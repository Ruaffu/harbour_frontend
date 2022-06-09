import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";

function logout() {
    apiFacade.logout();
}

const Header = ( { loggedIn } ) => {
  return (
    <div>
      <header>
        <nav>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="owner">All Boat Owners</NavLink>
          <NavLink className="nav-link" to="boats">Boats by Harbour</NavLink>
          <NavLink className="nav-link" to="admin">Admin options</NavLink>


          {
            loggedIn ?
                <NavLink className="nav-button" to="/" onClick={logout}>Logout</NavLink>
              : 
              <NavLink className="nav-button" to="login">Login</NavLink>
          }


        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default Header