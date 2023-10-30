import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [userValue, setUserValue] = useState(" ");
  const [userpwd, setUserPwd] = useState(" ");
  // const [islogin, setLogin] = useState(false);
  console.log(userValue, userpwd);
  const handleChange = (setState) => (event) => setState(event.target.value);

  // const someAction = () => {
  //   // e.preventDefault();
  //   console.log(userValue, userpwd);
  //   //admin@gmail.com 123 for admin
  //   //user@gmail.com 123 for user
  //   if (userValue === "abc" && userpwd === "123") {
  //     setLogin(true);
  //     alert("go to new page");
  //   } else {
  //     alert("error");
  //   }
  // };

  return (
    <div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={handleChange(setUserValue)}
            value={userValue}
            type="email"
            id="email"
            className="    bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            onChange={handleChange(setUserPwd)}
            value={userpwd}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          onClick={(e) => {
            if (userValue === "abc" && userpwd === "123") {
              // setLogin(true);
              navigate("/main");
            } else {
              alert("Username or password is empty");
            }
          }}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
