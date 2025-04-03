import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserLogin = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const navigate = useNavigate()
  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    emailRef.current.value = ""
    passwordRef.current.value = ""
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-16 mb-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <input className='bg-[#eeeeee] mb-4 w-full px-4 py-2 text-base rounded border placeholder:text-sm' required type="email" id="email" placeholder='email@example.com' ref={emailRef} />

          <h3 className='text-base font-medium mb-2'>Enter password</h3>
          <input className='bg-[#eeeeee] mb-6 w-full px-4 py-2 text-base rounded border placeholder:text-sm' required type="password" name="" id="password" placeholder='password' ref={passwordRef} />

          <button className='bg-[#111] mb-2 text-base text-white font-semibold w-full px-4 py-2 rounded'>Login</button>
        </form>

        <p className='text-center text-sm'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>

      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center mb-5 text-base text-white font-semibold w-full px-4 py-2 rounded'>Sign in as Captain</Link>
      </div>

    </div>
  )
}

export default UserLogin