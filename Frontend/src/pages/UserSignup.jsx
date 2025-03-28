import React, { useContext } from 'react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserSignup = () => {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()
  const { user, setUser } = useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstNameRef.current.value,
        lastname: lastNameRef.current.value,
      },
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    firstNameRef.current.value = ""
    lastNameRef.current.value = ""
    emailRef.current.value = ""
    passwordRef.current.value = ""
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-16 mb-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-4'>
            <input className='bg-[#eeeeee] w-1/2 px-4 py-2 text-base rounded border placeholder:text-sm' required type="text" id="firstname" placeholder='First name' ref={firstNameRef} />

            <input className='bg-[#eeeeee] w-1/2 px-4 py-2 text-base rounded border placeholder:text-sm' required type="text" id="lastname" placeholder='Last name' ref={lastNameRef} />
          </div>

          <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <input className='bg-[#eeeeee] mb-4 w-full px-4 py-2 text-base rounded border placeholder:text-sm' required type="email" id="email" placeholder='email@example.com' ref={emailRef} />

          <h3 className='text-base font-medium mb-2'>Enter password</h3>
          <input className='bg-[#eeeeee] mb-6 w-full px-4 py-2 text-base rounded border placeholder:text-sm' required type="password" id="password" placeholder='password' ref={passwordRef} />

          <button className='bg-[#111] mb-2 text-base text-white font-semibold w-full px-4 py-2 rounded'>Create account</button>
        </form>

        <p className='text-center text-sm'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </div>

      <div>
        <p className='text-xs leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>

    </div>
  )
}

export default UserSignup