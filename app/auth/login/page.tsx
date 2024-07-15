'use client';
import axios from '../../section/api/axios'
import React, {useState, useEffect} from 'react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { NextApiRequest, NextApiResponse } from 'next'
import { signIn } from '@/auth'


const LoginForm = ({ toggleForm }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const result = await axios.post("users/login", {username, password})
    if(result.data){
      alert("login berhasil")
      router.push("/section/dashboard")
    }
  }
    catch(err){
      alert(err)
    }
  }
  // useEffect(()=>{
  //   if(isSuccess){
  //     redirect("/section/dashboard")
  //   }
  // },[isSuccess, redirect])

  return (
    <form
    onSubmit={(e)=>handleSubmit(e)}
      className='flex flex-col justify-center w-full p-10'
      action=''
    >
      <h3 className='text-red-500 tracking-tighter'>LOGIN</h3>
      <label className='text-lg font-semibold'>Username</label>
      <input type='text' className='h-10 border-2 p-1 rounded-md' value={username}
        onChange={(e) => {setUsername(e.target.value)}}
       required />
      <label className='text-lg font-semibold'>Password</label>
      <input
        value={password}
        type='password'
        className='h-10 border-2 p-1 rounded-md'
        onChange={(e) => {setPassword(e.target.value)}}
        required
      />
      <button
        type='submit'
        className='w-1/2 h-[30px] my-5 rounded-lg text-center text-[20px] font-bold bg-red-500 text-white'
      >
        {isLoading? 'loading...' : "Login"}
      </button>
      <h5 className='font-semibold'>
        Don't have an account?{' '}
        <button onClick={toggleForm} className='text-blue-500'>
          Sign up here.
        </button>
      </h5>
    </form>
  )
}

export default LoginForm
