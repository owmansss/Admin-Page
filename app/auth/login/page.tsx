import React from 'react'
export default function LoginForm(){

  return (
    <form
      className='flex flex-col justify-center w-full p-10'
      action=''
    >
      <h3 className='text-red-500 tracking-tighter'>LOGIN</h3>
      <label className='text-lg font-semibold'>Username</label>
      <input type='text' className='h-10 border-2 p-1 rounded-md' required />
      <label className='text-lg font-semibold'>Password</label>
      <input
        type='password'
        className='h-10 border-2 p-1 rounded-md'
        required
      />
      <button
        type='submit'
        className='w-1/2 h-[30px] my-5 rounded-lg text-center text-[20px] font-bold bg-red-500 text-white'
      >
        LOGIN
      </button>
      <h5 className='font-semibold'>
        Don't have an account?{' '}
        <button className='text-blue-500'>
          Sign up here.
        </button>
      </h5>
    </form>
  )
}

