import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4001';
      const response = await axios.post(`${apiUrl}/users/login`, userData);
      console.log(response.data);

      if (response.data) {
        toast.success("Login successful!");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setAuthUser(response.data.user);
        setShowModal(false);
        navigate("/");
      }
    } catch (error) {
      console.error("There was an error!", error);
      if (error.response && error.response.status !== 401) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      {/* Login Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition cursor-pointer"
      >
        Login
      </button>

      {/* Modal Backdrop */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowModal(false)}></div>
      )}

      {/* Modal Content */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-2xl p-6 w-96 relative pointer-events-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <button
                type="button"
                className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 text-2xl font-bold transition"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg mb-6">Login</h3>

              <p className="mb-2 font-semibold">Email</p>
              <input
                type="email"
                placeholder="Enter your Email"
                className="border border-gray-300 dark:border-gray-600 rounded w-full mb-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-600 text-sm">This field is required</span>}

              <p className="mb-2 mt-4 font-semibold">Password</p>
              <input
                type="password"
                placeholder="Enter your Password"
                className="border border-gray-300 dark:border-gray-600 rounded w-full mb-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-red-600 text-sm">This field is required</span>}

              <div className="flex items-center mt-6 justify-between">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition cursor-pointer">
                  Login
                </button>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Not registered?{" "}
                  <Link to="/signup" onClick={() => setShowModal(false)} className="text-blue-600 dark:text-blue-400 underline cursor-pointer font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
