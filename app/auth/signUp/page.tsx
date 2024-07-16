// components/SignupForm.tsx
'use client'
import React, { useState } from 'react'
import axios from '../../section/api/axios'

interface SignupFormProps {
  toggleForm: () => void
}

const SignupForm: React.FC<SignupFormProps> = ({ toggleForm }) => {
  const [nama, setNama] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [state, setState] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const result = await axios.post('/users', {
        nama,
        email,
        username,
        password,
      })
      console.log(result.data.message)
      alert(result.data.message)
      setState(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center w-full p-10'
      >
        {state ? <h1>{message}</h1> : <p></p>}
        <h3 className='text-green-500 tracking-tighter'>SIGN UP</h3>
        <label className='text-lg font-semibold' htmlFor='nama'>
          Full Name
        </label>
        <input
          type='text'
          className='h-10 border-2 p-1 rounded-md'
          name='nama'
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <label className='text-lg font-semibold' htmlFor='email'>
          Email
        </label>
        <input
          type='email'
          className='h-10 border-2 p-1 rounded-md'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className='text-lg font-semibold' htmlFor='username'>
          Username
        </label>
        <input
          type='text'
          className='h-10 border-2 p-1 rounded-md'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label className='text-lg font-semibold'>Password</label>
        <input
          type='password'
          className='h-10 border-2 p-1 rounded-md'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
