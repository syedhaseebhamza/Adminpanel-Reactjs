import React, { useState } from "react";
import Welcom from "./Welcom";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [LoggedIn, setLoggedIn] = useState(false);

  const userChange = (event) => {
    setUserName(event.target.value);
  };

  const PwdChange = (event) => {
    setUserPwd(event.target.value);
  };

  const btnAction = (event) => {
    event.preventDefault();
    if (userName === "hhh" && userPwd === "1122") {
      setLoggedIn(true);
    } else {
      alert("error");
    }
  };

  return (
    <div className="h-[100vh] w-[100%]">
      {LoggedIn ? (
        <Welcom />
      ) : (
        <div className="bg-gray-600 h-[100vh] w-[100%]">
          <h1 className="pb-9 pt-[5%] pl-[35%] text-7xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl green:text-white">
            WEL
            <span className="text-blue-600 dark:text-blue-500">COM</span>
          </h1>
          <div className="pb-2 pl-[35%]">
            <label
              htmlFor="email"
              className="block pb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              value={userName}
              onChange={userChange}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username"
              required
            />
          </div>
          <div className="pb-2 pl-[35%]">
            <label
              htmlFor="password"
              className="block pb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              value={userPwd}
              onChange={PwdChange}
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
          </div>
          <button
            onClick={btnAction}
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ml-[55%] mt-[2%] dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            LogIn
          </button>
        </div>
      )}
    </div>
  );
}
export default Login;