import { useState, useEffect } from "react";

// icons
import { FaPencil } from "react-icons/fa6";
import { BiDetail } from "react-icons/bi";

// fetching with axios
import axios from 'axios';

import ModalAddUser from "../Modal/ModalAddUser";
import BtnDeleteUser from "../Button/BtnDeleteUser";

export default function TableUserManagement()
{
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://217.196.49.94:5500/user/getAllUser', {
      headers: {
        'access_token': 'devx',
      },
    })
      .then(response => {
        if (response.data.status && Array.isArray(response.data.data)) {
          setUsers(response.data.data);
        } else {
          console.error('Invalid user data structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDeleteUser = (deletedUserId) => {
    // Update the state or perform any other actions after user deletion
    const updatedUsers = users.filter(user => user.user_id !== deletedUserId);
    setUsers(updatedUsers);
  };


  if (loading) {
    // You can replace this with a loading spinner or any other loading indicator
    return <p>Loading sebentar</p>; 
  }

  return(
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-50 text-zinc-800">

        <div className="rounded-t mb-0 px-4 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg py-3">
                User Management
              </h3>

              {/* Add Button */}
              <ModalAddUser />
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    No
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Name
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Username
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Role
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Workspace Name
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user, index) => (
                  <tr key={user.user_id}>
                    <td className="px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-sm font-semibold text-left">
                      <span>{index + 1}</span>
                    </td>
                    <td className="px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-sm font-semibold text-left">
                      <span>{user.name}</span>
                    </td>
                    <td className="px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-sm font-semibold text-left">
                      {user.username}
                    </td>
                    <td className="px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-sm font-semibold text-left">
                      {user.role}
                    </td>
                    <td className="px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-sm font-semibold text-left">
                      {/* Accessing the first workspace's name */}
                      {user.workspaces && user.workspaces.length > 0 ? user.workspaces[0].workspace_name : ''}
                    </td>
                    <td className="px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap text-sm font-semibold text-left">
                      <div className="flex flex-wrap">
                        <button className="bg-green-600 hover:bg-green-500 font-bold uppercase text-xs px-4 py-4 rounded-full shadow outline-none focus:outline-none mr-2" type="button">
                          <BiDetail />
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-300 font-bold uppercase text-xs px-4 py-4 rounded-full shadow outline-none focus:outline-none mr-2" type="button">
                          <FaPencil />
                        </button>
                        
                        <BtnDeleteUser userId={user.user_id} onDelete={handleDeleteUser} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}