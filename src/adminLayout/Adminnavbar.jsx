import React from "react";

function Adminnavbar() {
  return (
    <div>
      <nav className="adminNavbar">
        <ul>
          <Link to={"/dashboard"}>
            <li>Menu</li>
          </Link>
          <Link to={"/home"}>
            <li>Home</li>
          </Link>
          <Link to={"/admin"}>
            <li>Admin</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Adminnavbar;
