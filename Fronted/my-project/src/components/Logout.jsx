import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {

    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        setAuthUser(null );
        localStorage.removeItem("user");
        toast.success("Logged out successfully");
    }
  return (
    <button onClick={handleLogout} className="btn btn-ghost bg-red-500">Logout</button>
  )
}

export default Logout