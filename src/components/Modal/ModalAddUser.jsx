// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { IoMdAdd } from "react-icons/io";
import axios from 'axios'
import Swal from 'sweetalert2';

export default function ModalAddUser()
{
  const [showModal, setShowModal] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    password: '',
    role: '',
    workspace_id: [''],
  });

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await axios.get('http://217.196.49.94:5500/workspace/getAllWorkspace');
        setWorkspaces(response.data.data);
        // console.log('Response from API:', response.data.data); // check
      } catch (error) {
        console.error('Error fetching workspaces:', error.message);
      }
    };

    fetchWorkspaces();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);

    // Reset form data on modal close
    setUserData({
      name: '',
      username: '',
      password: '',
      role: '',
      workspace_id: [''],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Data yang ditangkap:', userData); // check 

    try {
      const response = await axios.post(
        'http://217.196.49.94:5500/user/addUser/',
        userData,
        {
          headers: {
            'access_token': 'devx',
            'content-type': 'application/json'
          }
        }
      );
      console.log('User added successfully: ', response.data);

      // Menampilkan SweetAlert ketika data berhasil di POST
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Data user berhasil ditambahkan!',
      });

      window.location.reload();
    } catch (error) {
      console.error('Error adding user:', error.message);
      
      // Menampilkan SweetAlert ketika data gagal di POST
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Terjadi kesalahan saat menambahkan Data User.',
      });
    }
    closeModal();
  };
  
  return (
    <>
      <button
        className="bg-blue-600 hover:bg-blue-500 font-bold uppercase text-xs px-4 py-2 rounded shadow outline-none focus:outline-none mr-2 mb-3 text-white flex items-center"
        onClick={openModal}
      >
        <span className="mr-3">Tambah</span>
        <IoMdAdd />
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg leading-6 font-semibold text-gray-900" id="modal-headline">
                    Tambah User
                  </h3>
                  <hr className='my-3' />
                  
                  <div className='mb-4'>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                      autoFocus
                    />
                  </div>

                  <div className='mb-4'>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={userData.username}
                      onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>

                  <div className='mb-4'>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>

                  <div className='mb-4'>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={userData.role}
                      onChange={(e) => setUserData({ ...userData, role: e.target.value })}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>

                  <div className='mb-4'>
                    <label htmlFor="workspace_id" className="block text-sm font-medium text-gray-700">
                      Workspace
                    </label>
                    <select
                      id="workspace_id"
                      name="workspace_id"
                      value={userData.workspace_id[0]}
                      onChange={(e) => setUserData({ ...userData, workspace_id: [e.target.value] })}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    >
                      <option value="" disabled>Pilih Workspace</option>
                      {Array.isArray(workspaces) &&
                        workspaces.map((workspace) => (
                          <option key={workspace.workspace_id} value={workspace.workspace_id}>
                            {workspace.workspace_name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Tambah
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}