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
        setAuthUser(response.data.user); // ✅ update context
        document.getElementById("my_modal_3").close();
        navigate("/"); // ✅ redirect to home
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
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-base-100 text-base-content">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mb-8">Login</h3>

            <p className="mb-2 font-semibold">Email</p>
            <input
              type="email"
              placeholder="Enter your Email"
              className="input input-bordered w-full mb-3 bg-base-200 text-base-content"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-error text-sm">This field is required</span>}

            <p className="mb-2 mt-4 font-semibold">Password</p>
            <input
              type="password"
              placeholder="Enter your Password"
              className="input input-bordered w-full mb-3 bg-base-200 text-base-content"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-error text-sm">This field is required</span>}

            <div className="flex items-center mt-6 justify-between">
              <button type="submit" className="btn btn-primary">Login</button>
              <p className="text-xs">
                Not registered?{" "}
                <Link to="/signup" className="text-info underline cursor-pointer font-semibold">
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
