'use client'

import React, { useState } from 'react'
import LoginForm from './login/page'
import SignupForm from './signup/page'

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true)

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <img
        src='/bike4.jpg'
        alt='background'
        className='object-cover z-10 absolute w-full h-full inset-0'
      />
      <div className='inset-0 flex items-center justify-center bg-white absolute w-1/3 my-auto z-10'>
        <img src='/logo.png' alt='logo' className='top-10 left-10 absolute' />
        <div className='z-20 w-full h-full flex items-center justify-center'>
          {isLogin ? (
            <LoginForm toggleForm={toggleForm} />
          ) : (
            <SignupForm toggleForm={toggleForm} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Signup
