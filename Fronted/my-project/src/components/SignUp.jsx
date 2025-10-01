import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import Login from "./Login"


function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen ">
                <div className="border-2 border-gray-700 p-8 rounded-lg shadow-lg bg-gray-900">
                    <div className="">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link className="btn btn-sm btn-circle btn-ghost ml-50">X</Link>
                            <h3 className="font-bold text-lg mb-8">SignUp</h3>
                            <p className='mb-2'>Name</p>
                            <input  type="text" name="name" placeholder='Enter your Name' className='border-none bg-gray-800 my-1 rounded p-1 pr-10' {...register("text", { required: true })}/>
                            <br />
                            {errors.text && <span className="text-red-500">This field is required</span>}

                            <p className='mb-2'>Email</p>
                            <input {...register("email", { required: true })} type="email" name="email" placeholder='Enter your Email' className='border-none bg-gray-800 rounded p-1 pr-10' />
                            <br />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                            <p className='mb-2 mt-4'>Password</p>
                            <input {...register("password", { required: true })} type="password" name="password" placeholder='Enter your Password' className='border-none bg-gray-800 rounded p-1 pr-10' />
                            <br />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <div className='flex  items-center mt-4 justify-between'>
                                <button className="btn btn-secondary  items-center text-center">SignUp</button>
                                <p className='text-xs'> Have account ? </p>
                                <button onClick={() =>
                                    document.getElementById("my_modal_3").showModal()
                                }
                                    className='text-xs text-blue-500 underline cursor-pointer'>Login</button>
                                <Login />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignUp