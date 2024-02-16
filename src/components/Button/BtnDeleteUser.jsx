// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import axios from 'axios';
import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
const BtnDeleteUser = ({ userId, onDelete }) => {
  const deleteUser = async () => {
    const confirmed = await Swal.fire({
      title: 'Apakah kamu yakin?',
      text: 'Anda tidak akan dapat mengembalikkan ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    });

    if (confirmed.isConfirmed) {
      try {
        const response = await axios.delete(`http://217.196.49.94:5500/user/deleteUser?user_id=${userId}`, {
          headers: {
            'access_token': 'devx',
          },
        });

        if (response.data.status) {
          // User deleted successfully
          Swal.fire({
            icon: 'success',
            title: 'Data Berhasil dihapus!',
            showConfirmButton: false,
            timer: 1000,
          });

          // Call onDelete prop to inform parent component about the deletion
          onDelete(userId);
        } else {
          // Display an error message if deletion fails
          Swal.fire({
            icon: 'error',
            title: 'Gagal menghapus Data!',
            text: response.data.message || 'Terjadi kesalahan saat menghapus pengguna',
          });
        }
      } catch (error) {
        console.error('Error saat menghapus:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error saat menghapus!',
          text: 'Terjadi kesalahan saat menghapus pengguna',
        });
      }
    }
  };

  return (
    <button
      className="bg-red-600 hover:bg-red-500 font-bold uppercase text-xs px-4 py-4 rounded-full shadow outline-none focus:outline-none mr-2"
      type="button"
      onClick={deleteUser}
    >
      <FaTrash />
    </button>
  );
};

export default BtnDeleteUser;
