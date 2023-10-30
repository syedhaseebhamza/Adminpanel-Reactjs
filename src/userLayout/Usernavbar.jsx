import React from "react";

function Usernavbar() {
  return (
    <nav className="userNavbar">
      <ul>
        <Link>
          <li>Menu</li>
        </Link>
        <Link>
          <li>Home</li>
        </Link>
        <Link>
          <li>User</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Usernavbar;
