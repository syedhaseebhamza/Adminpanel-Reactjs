import React from "react";
import { Link } from "react-router-dom";

function Sidebar({isAdmin}) {
  return (
    <div className="sidebar">
      <button>switch to {isAdmin ? 'Admin' : 'User'}</button>
      <ul>
        <Link to={'dashboard'}>
          <li>Dashboard</li>
        </Link>
        <Link to={'user'}>
          <li>user data</li>
        </Link>
        <Link to={'menu'}>
          <li>Settings</li>
        </Link>
      </ul>
      <button>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
