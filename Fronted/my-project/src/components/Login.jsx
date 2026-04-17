import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/user/login", userData);
      console.log(response.data);

      if (response.data) {
        toast.success("Login successful!");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setAuthUser(response.data.user);
        document.getElementById("my_modal_3").close();
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
      <dialog id="my_modal_3" className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-96 relative">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="absolute right-3 top-2 text-gray-600 hover:text-gray-900 text-2xl font-bold transition"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mb-8">Login</h3>

            <p className="mb-2 font-semibold">Email</p>
            <input
              type="email"
              placeholder="Enter your Email"
              className="border border-gray-300 rounded w-full mb-3 bg-gray-100 text-gray-800 px-3 py-2 focus:outline-none focus:border-blue-500"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-600 text-sm">This field is required</span>}

            <p className="mb-2 mt-4 font-semibold">Password</p>
            <input
              type="password"
              placeholder="Enter your Password"
              className="border border-gray-300 rounded w-full mb-3 bg-gray-100 text-gray-800 px-3 py-2 focus:outline-none focus:border-blue-500"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-600 text-sm">This field is required</span>}

            <div className="flex items-center mt-6 justify-between">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition cursor-pointer">
                Login
              </button>
              <p className="text-xs">
                Not registered?{" "}
                <Link to="/signup" className="text-blue-600 underline cursor-pointer font-semibold hover:text-blue-700 transition">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
