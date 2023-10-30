import React from "react";
import { Link } from "react-router-dom";
function Logout() {
  return (
    <div>
      <Link to="/main">
        <h1 className="logouth1">login</h1>
      </Link>
    </div>
  );
}

export default Logout;
