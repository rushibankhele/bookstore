import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {

    const { register, 
        handleSubmit, 
        formState: { errors }
     } = useForm();

    const onSubmit = data => console.log(data);

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white border-1">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          
          <h3 className="item-center font-bold text-lg">Login</h3>
          <br></br>
          <div className="">
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
              Login
            </button>
            <p>
              Not Registered?
              <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
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
