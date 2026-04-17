import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    // Validate inputs
    if (!data.fullname || !data.email || !data.password) {
      toast.error("Please fill all fields");
      return;
    }

    if (data.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    const userData = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4001';
      const response = await axios.post(`${apiUrl}/user/signup`, userData);
      console.log(response.data);
      if (response.data) {
        toast.success("SignUp successful!");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        reset(); // Clear form
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || "Email already registered. Use a different email or login.");
      } else if (error.response && error.response.status === 500) {
        toast.error("Server error. Please try again.");
      } else if (!error.response) {
        toast.error("Cannot connect to server. Local backend not running.");
      } else {
        toast.error(error.response?.data?.message || "Signup failed. Please try again.");
      }
      reset(); // Clear password on error for security
    }
  };

  const handleClose = () => {
    navigate("/", { replace: true });
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex-grow flex justify-center items-center pt-20 pb-8">
        <div className="border-2 border-gray-300 dark:border-gray-600 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-96 relative">
          <h3 className="font-bold text-lg mb-8 text-center">Sign Up</h3>
          <button
            onClick={handleClose}
            className="absolute top-4 right-5 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 text-lg font-bold rounded-full w-8 h-8 flex items-center justify-center transition-all"
          >
            ✕
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="mb-2 font-semibold">Name</p>
            <input
              type="text"
              placeholder="Enter your Name"
              className="border border-gray-300 dark:border-gray-600 rounded w-full mb-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <span className="text-red-600 text-sm">This field is required</span>}

            <p className="mb-2 mt-4 font-semibold">Email</p>
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

            <div className="flex items-center mt-6 justify-center">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition cursor-pointer">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
