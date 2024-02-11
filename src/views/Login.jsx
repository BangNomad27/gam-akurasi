import { useState } from "react";
import { FaBox, FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Login()
{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      console.error('Login Gagal');
    }

    console.log('Username', username);
    console.log('Password', password);
  };

  return(
    <div className='flex justify-center items-center h-full'>
      <form className='max-w-[400px] w-full mx-auto bg-white p-8 rounded-md shadow-md shadow-green-600/40' onSubmit={handleSubmit}>
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
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-green-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm text-zinc-600" placeholder="Enter your username..." type="text" name="search" value={username} onChange={handleUsernameChange} />
        </label>

        <label className="relative block mb-4">
          <span className="sr-only">Password</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FaLock className='text-zinc-600' />
          </span>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-green-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm text-zinc-600" placeholder="Enter your password..." type="password" name="search" value={password} onChange={handlePasswordChange} />
        </label>

        <button className='w-full py-3 mt-3 bg-green-600 hover:bg-green-500 relative text-white rounded-md'>
          Sign In
        </button>
      </form>
    </div>
  )
}