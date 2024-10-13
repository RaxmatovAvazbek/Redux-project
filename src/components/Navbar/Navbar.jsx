import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../constants/const";
import { navtext } from "../../constants/const";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
        <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link to={"/"}>
            <img src={logo} width={"70px"} height={"70px"} alt="logo img" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
           <div>
           <Link to={'/login'}>
           <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none  font-medium rounded-lg mr-2 text-sm px-4 py-2 text-center "
            >
              LOGIN
            </button>
           </Link>
            <Link to={"/registr"}>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              REGISTR
            </button>
            </Link>
           </div>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            {navtext.map((item, idx) => (
              <div key={idx}
                className="items-center mr-3 hidden w-full md:flex md:w-auto md:order-1 text-white"
                id="navbar-cta"
              >
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
