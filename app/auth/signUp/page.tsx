// components/SignupForm.js
'use client';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from '../../section/api/axios'

const SignupForm = ({ toggleForm }) => {
  const [nama, setnama] = useState()
  const [email, setemail] = useState()
  const [username, setusername] = useState()
  const [password, setpassword] = useState()
  const [state, setstate] = useState(false)
  const [message, setmessage] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/users',{nama,email,username,password},{
    })
    .then(result =>{
      console.log(result.data.message)
      alert(result.data.message)
      setstate(true)
    })
    .catch(err => {console.log(err)})
  }

  return (
    <>
    <form
      onSubmit={(e)=>handleSubmit(e)}
      className='flex flex-col justify-center w-full p-10'
    >
      {state? <h1>{message}</h1> : <p></p>}
      <h3 className='text-green-500 tracking-tighter'>SIGN UP</h3>
      <label className='text-lg font-semibold' htmlFor='nama'>Full Name</label>
      <input type='text' className='h-10 border-2 p-1 rounded-md' name='nama' onChange={(e)=> {setnama(e.target.value)}} required />
      <label className='text-lg font-semibold' htmlFor='email'>Email</label>
      <input type='email' className='h-10 border-2 p-1 rounded-md' name='email' onChange={(e)=> {setemail(e.target.value)}} required />
      <label className='text-lg font-semibold' htmlFor='username'>Username</label>
      <input type='text' className='h-10 border-2 p-1 rounded-md' name='username' htmlFor='password' onChange={(e)=> {setusername(e.target.value)}} required />
      <label className='text-lg font-semibold'>Password</label>
      <input
        type='password'
        className='h-10 border-2 p-1 rounded-md'
        name='password'
        onChange={(e)=> {setpassword(e.target.value)}}
        required
      />
      <button
        type='submit'
        className='w-1/2 h-[30px] my-5 rounded-lg text-center text-[20px] font-bold bg-green-500 text-white'
      >
        SIGN UP
      </button>
      <h5 className='font-semibold'>
        Already have an account?{' '}
        <button onClick={toggleForm} className='text-blue-500'>
          Login here.
        </button>
      </h5>
    </form>
    </>
  )
}

export default SignupForm
