// eslint-disable-next-line no-unused-vars
import React from "react";
import UserDropdown from "../Cards/UserDropdown";
import { Link } from "react-router-dom";

// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function NavbarTop() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link
            className="text-white text-md uppercase hidden lg:inline-block font-semibold"
            to="/dashboard"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </Link>
          
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
