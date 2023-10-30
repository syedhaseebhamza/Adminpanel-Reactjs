import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
function Layout() {
  const [isAdmin,setIsAdmin] = useState(true)
  return (
    <>
      <div className="App">
        <Sidebar isAdmin={isAdmin} />
        <Navbar isAdmin={isAdmin} />
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
