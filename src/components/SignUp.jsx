import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Login from './Login'

function SignUp() {

    const { register, 
        handleSubmit, 
        formState: { errors }
     } = useForm();

    const onSubmit = data => console.log(data);

  return (
    <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
      <div className="w-[600px] ">
        <div className="modal-box dark:bg-slate-900 dark:text-white border-2">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/'>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            </Link>
          <h3 className="item-center font-bold text-lg">Signup</h3>
          <br></br>
          <div>
            <span className="mt-2 space-y-2">Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w80 px-3 py1 border rounded-md outline-none"
              {...register("text", { required: true })}
            />
            <br />
            {errors.text && <span className="text-sm text-red-500">This field is required</span>}
            <br />
          </div>
          <div>
            <span className="mt-2 space-y-2">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w80 px-3 py1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            <br />
          </div>
          <div>
            <span className="mt-2 space-y-2">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w80 px-3 py1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex justify-around">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
              Signup
            </button>
            <p>
              Have Account?
              <button className="underline text-blue-500 cursor-pointer"
              onClick={()=> document.getElementById("my_modal_3").showModal()}
              >
                  Login
              </button>
              
            </p>
            <Login/>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp