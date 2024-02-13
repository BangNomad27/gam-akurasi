// import { useState } from "react";
import Header from "../components/Headers/Header";
import Sidebar from "../components/Sidebars/Sidebar";
import NavbarTop from "../components/Sidebars/NavbarTop";

// eslint-disable-next-line react/prop-types
export default function Dashboard({ children }) 
{ 
  return(
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-100">
        {/* Navbar Top */}
        <NavbarTop />

        {/* Header */}
        <Header />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          { children }
        </div>
      </div>
    </>
  )
}