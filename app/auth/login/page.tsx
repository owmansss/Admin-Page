'use client'
import axios from '../../section/api/axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

interface LoginFormProps {
  toggleForm: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ toggleForm }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await axios.post('users/login', { username, password })
      alert('Login successful')
      router.push('/section/dashboard')
    } catch (err) {
      alert(err.message || 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-center w-full p-10'
    >
      <h3 className='text-red-500 tracking-tighter'>LOGIN</h3>
      <label className='text-lg font-semibold'>Username</label>
      <input
        type='text'
        className='h-10 border-2 p-1 rounded-md'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label className='text-lg font-semibold'>Password</label>
      <input
        type='password'
        className='h-10 border-2 p-1 rounded-md'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type='submit'
        className='w-1/2 h-[30px] my-5 rounded-lg text-center text-[20px] font-bold bg-red-500 text-white'
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Login'}
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
