import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid }, reset, watch } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: ""
    }
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    const userData = {
      fullname: data.fullname.trim(),
      email: data.email.trim().toLowerCase(),
      password: data.password,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4001';
      const response = await axios.post(`${apiUrl}/user/signup`, userData);
      console.log(response.data);
      if (response.data) {
        toast.success("SignUp successful!");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        reset({ fullname: "", email: "", password: "" });
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || "Email already registered. Try different email.");
      } else if (error.response && error.response.status === 500) {
        toast.error("Server error. Please try again.");
      } else if (!error.response) {
        toast.error("Backend not running. Start local server at port 4001.");
      } else {
        toast.error(error.response?.data?.message || "Signup failed. Please try again.");
      }
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
              className={`border rounded w-full mb-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 focus:outline-none transition ${errors.fullname ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'}`}
              {...register("fullname", {
                required: "Name is required"
              })}
            />
            {errors.fullname && <span className="text-red-600 text-xs mb-3 block">{errors.fullname.message}</span>}

            <p className="mb-2 mt-4 font-semibold">Email</p>
            <input
              type="email"
              placeholder="Enter your Email"
              className={`border rounded w-full mb-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 focus:outline-none transition ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'}`}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" }
              })}
            />
            {errors.email && <span className="text-red-600 text-xs mb-3 block">{errors.email.message}</span>}

            <p className="mb-2 mt-4 font-semibold">Password</p>
            <input
              type="password"
              placeholder="Enter your Password"
              className={`border rounded w-full mb-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 focus:outline-none transition ${errors.password ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'}`}
              {...register("password", {
                required: "Password is required"
              })}
            />
            {errors.password && <span className="text-red-600 text-xs mb-3 block">{errors.password.message}</span>}

            <div className="flex items-center mt-6 justify-center">
              <button
                type="submit"
                disabled={!isValid}
                className={`text-white px-6 py-2 rounded font-semibold transition cursor-pointer ${isValid
                  ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                  : 'bg-gray-400 cursor-not-allowed opacity-60'
                  }`}
              >
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
