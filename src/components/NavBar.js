import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
// import LogoPic from '../assets/png-transparent-gym-logo-fitness-removebg-preview';


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("https://serenity-server.onrender.com/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header className="header">
      <div className="navbar">
      <Link to="/login" className="x">
        <div className="code-x">
          <i class="fas fa-circle vxv"></i>
          <i class="fas fa-circle v"></i>
          <i class="fas fa-circle vx"></i>
        </div>
      </Link>
      <Link to="/login" className="x">
        <p>Home</p>
      </Link>
      <Link to="/login" className="x">
        <p>About</p>
      </Link>
      </div>
      <ul className="search">
        <input placeholder="Search" />
          <li><i class="bi bi-search"></i></li>
      </ul>
      <div>
        <Icon/>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Link to="/signup" className="x">Signup</Link>
            <Link to="/login" className="x">Login</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
