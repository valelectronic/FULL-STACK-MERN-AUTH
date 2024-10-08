import React from 'react'
import {Link} from "react-router-dom"

function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>sign up </h1>
      <form action="" className='flex flex-col gap-4'>
      <input type="text" placeholder='username' id="username" 
      className='border p-3 rounded-lg'/>
      <input type="text" placeholder='email' id="email" 
      className='border p-3 rounded-lg'/>
      <input type="text" placeholder='password' id="password" 
      className='border p-3 rounded-lg'/>
      <button className='bg-slate-800 text-white 
      p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-75'> sign up </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account ?  </p>
        <Link to= {"/SignIn"}>
        <span className='text-blue-700'>sign in </span>

        </Link>
      </div>
    </div>
  )
}

export default SignUp