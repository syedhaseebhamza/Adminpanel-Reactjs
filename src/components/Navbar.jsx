import React from "react";
function Navbar({isAdmin}) {
  return (
    <div className="main">
      <nav className="navbar">
        {isAdmin ? 'Admin' : 'User'}
      </nav>
    </div>
  );
}

export default Navbar;
