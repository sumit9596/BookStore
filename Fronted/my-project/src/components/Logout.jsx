import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout() {

  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/", { replace: true });
  }
  return (
    <button onClick={handleLogout} className="btn btn-sm btn-error">Logout</button>
  )
}

export default Logout