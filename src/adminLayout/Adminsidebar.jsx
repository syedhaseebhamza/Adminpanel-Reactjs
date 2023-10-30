import React from "react";

function Adminsidebar() {
  return (
    <div className="adminSidebar">
      <ul>
        <Link>
          <li>Dashboard</li>
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

export default Adminsidebar;
