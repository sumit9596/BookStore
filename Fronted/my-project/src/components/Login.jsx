import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link
                            to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            X
                        </button>
                        <h3 className="font-bold text-lg mb-8">Login</h3>
                        <p className='mb-2'>Email</p>
                        <input type="email" name="email" placeholder='Enter your Email' className='border-none bg-gray-800 rounded p-1 pr-10' {...register("email", { required: true })} />
                        <br />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                        <p className='mb-2 mt-4'>Password</p>
                        <input type="password" name="password" placeholder='Enter your Password' className='border-none bg-gray-800 rounded p-1 pr-10' {...register("password", { required: true })} />
                        <br />
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <div className='flex  items-center mt-4 justify-between'>
                            <button className="btn btn-secondary  items-center text-center">Login</button>
                            <p className='text-xs'> Not registered? <Link to='/signup' className='text-xs text-blue-500 underline cursor-pointer'>SignUp</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login