import { useState } from "react";
import { FaBox, FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login()
{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://217.196.49.94:5500/user/login', 
        {
          username,
          password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      console.log('Login successful', response.data);
      // Handle login success, such as updating state or redirecting

      navigate('/dashboard'); // Redirect to Dashboard.jsx after successful login
    } catch (error) {
      console.error('Login gagal', error);

      // Handle login failure, such as displaying an error message
      // navigate('/error'); // Redirect to ErrorPage.jsx after failed login
    }
  };

  return(
    <div className='flex justify-center items-center h-full'>
      <form className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-md shadow-md shadow-green-600/40'>
        <h2 className='text-4xl font-bold text-center flex justify-center items-center mb-4 text-green-600'>
          <FaBox className='mr-3' />
          <span className='uppercase'>Akurasi</span>
        </h2>
              
        <hr className="mb-6 border-1 border-green-600" />

        <label className="relative block mb-4">
          <span className="sr-only">Username</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FaUser className='text-zinc-600' />
          </span>
          <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-green-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm text-zinc-600" 
            placeholder="Enter your username..." type="text" 
            name="search" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </label>

        <label className="relative block mb-4">
          <span className="sr-only">Password</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FaLock className='text-zinc-600' />
          </span>
          <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-green-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm text-zinc-600" 
            placeholder="Enter your password..." 
            type="password" 
            name="search" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button 
          className='w-full py-3 mt-3 bg-green-600 hover:bg-green-500 relative text-white rounded-md'
          onClick={handleLogin}
        >
          Sign In
        </button>
      </form>
    </div>
  )
}