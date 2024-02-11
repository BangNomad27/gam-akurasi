// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

import BackgroundImage from '../assets/image/bg-login.png'
import Login from '../views/Login'

export default function Auth()
{
  return(
    <>
      {/* Navbar */}
      <nav className='top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link className='text-white text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase' to="/">
              Akurasi
            </Link>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main>
        <section className="relative w-full h-screen py-40 bg-gray-800">
          <img src={BackgroundImage} alt="Background Image" className='absolute top-0 w-full h-full bg-cover' />

          <Login />

          {/* Footer */}
          <footer className='absolute w-full bottom-0 pb-6'>
            <div className='container mx-auto px-4'>
              <hr className='mb-6 border-1 border-white-800' />
              <div className='w-full md:w-4/12 px-4'>
                <div className='text-sm text-gray-500 font-semibold py-1 text-center md:text-left'>
                  <span className='text-white'>Copyright © {new Date().getFullYear()}{""}.</span> Akurasi All Right Reserved.
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  )
}