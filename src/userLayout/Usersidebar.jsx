import React from "react";

function Usersidebar() {
  return (
    <div className="userSidebar">
      <ul>
        <Link>
          <li>Dashboard</li>
        </Link>
        <Link>
          <li>user data</li>
        </Link>
        <Link>
          <li>Settings</li>
        </Link>
        <Link>
          <li>Log out</li>
        </Link>
      </ul>
    </div>
  );
}

export default Usersidebar;
