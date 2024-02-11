import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaDesktop, FaShoppingBasket, FaUserCog } from "react-icons/fa";
import { MdSell, MdWork } from "react-icons/md";
import UserDropdown from "../Cards/UserDropdown";

export default function Sidebar()
{
  const [collapseShow, setCollapseShow] = useState('hidden')

  return(
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FaBars />
          </button>

          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-md uppercase font-bold p-4 px-0"
            to="/"
          >
            Akurasi
          </Link>

          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* User Dropdown */}
              <UserDropdown />
            </li>
          </ul>

          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-md uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Akurasi
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Home
            </h6>

            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link className="flex items-center text-xs uppercase py-3 font-bold hover:text-green-500" to="/dashboard">
                  <FaDesktop className="mr-2" />
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link className="flex items-center text-xs uppercase py-3 font-bold hover:text-green-500" to="/penjualan">
                  <MdSell className="mr-2" />
                  Penjualan
                </Link>
              </li>

              <li className="items-center">
                <Link className="flex items-center text-xs uppercase py-3 font-bold hover:text-green-500" to="/penjualan">
                  <FaShoppingBasket className="mr-2" />
                  Pembelian
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Master Data
            </h6>

            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link className="flex items-center text-xs uppercase py-3 font-bold hover:text-green-500" to="/usermanagement">
                  <FaUserCog className="mr-2" />
                  User Management
                </Link>
              </li>

              <li className="items-center">
                <Link className="flex items-center text-xs uppercase py-3 font-bold hover:text-green-500" to="/penjualan">
                  <MdWork className="mr-2" />
                  Workspace
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}