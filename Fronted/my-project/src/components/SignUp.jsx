import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate(); // ✅ useNavigate hook
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/user/signup", userData);
      console.log(response.data);
      if (response.data) {
        toast.success("SignUp successful!");
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // ✅ Navigate to home page after signup
        navigate("/", { replace: true }); 
      }
    } catch (error) {
      console.error("There was an error!", error);
      if (error.response && error.response.status === 400) {
        toast.error("User already exists. Please login.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 border-gray-700 p-8 rounded-lg shadow-lg bg-gray-900 w-96">
        <h3 className="font-bold text-lg mb-8 text-center">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-2">Name</p>
          <input
            type="text"
            placeholder="Enter your Name"
            className="border-none bg-gray-800 my-1 rounded p-1 pr-10 w-full"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && <span className="text-red-500 text-sm">This field is required</span>}

          <p className="mb-2 mt-4">Email</p>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border-none bg-gray-800 rounded p-1 pr-10 w-full"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}

          <p className="mb-2 mt-4">Password</p>
          <input
            type="password"
            placeholder="Enter your Password"
            className="border-none bg-gray-800 rounded p-1 pr-10 w-full"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500 text-sm">This field is required</span>}

          <div className="flex items-center mt-6 justify-between">
            <button className="btn btn-secondary">Sign Up</button>
            <p className="text-xs">
              Have an account?{" "}
              <button
                type="button"
                className="text-blue-500 underline cursor-pointer text-xs"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>

      <Login />
    </div>
  );
}

export default SignUp;
