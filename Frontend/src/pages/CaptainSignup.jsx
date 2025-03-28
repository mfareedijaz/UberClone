import React, { useContext } from 'react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const vehicleColorRef = useRef(null)
  const vehiclePlateRef = useRef(null)
  const vehicleTypeRef = useRef(null)
  const vehicleCapacityRef = useRef(null)


  const { captain, setCaptain } = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstNameRef.current.value,
        lastname: lastNameRef.current.value,
      },
      email: emailRef.current.value,
      password: passwordRef.current.value,
      vehicle: {
        color: vehicleColorRef.current.value,
        plate: vehiclePlateRef.current.value,
        capacity: vehicleCapacityRef.current.value,
        vehicleType: vehicleTypeRef.current.value,
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)
    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    firstNameRef.current.value = ""
    lastNameRef.current.value = ""
    emailRef.current.value = ""
    passwordRef.current.value = ""
    vehicleColorRef.current.value = ""
    vehiclePlateRef.current.value = ""
    vehicleTypeRef.current.value = ""
    vehicleCapacityRef.current.value = ""
  }
  return (
    <div className='px-5 py-5 h-screen flex flex-col justify-between'>

      <div>
        <img className='w-20' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

        <form onSubmit={submitHandler}>
          <h3 className='text-base font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-4'>
            <input className='bg-[#eeeeee] w-1/2 px-4 py-2 text-base rounded border placeholder:text-sm' required type="text" id="firstname" placeholder='First name' ref={firstNameRef} />

            <input className='bg-[#eeeeee] w-1/2 px-4 py-2 text-base rounded border placeholder:text-sm' required type="text" id="lastname" placeholder='Last name' ref={lastNameRef} />
          </div>

          <h3 className='text-base font-medium mb-2'>What's your email</h3>
          <input className='bg-[#eeeeee] mb-4 w-full px-4 py-2 text-base rounded border placeholder:text-sm' required type="email" id="email" placeholder='email@example.com' ref={emailRef} />

          <h3 className='text-base font-medium mb-2'>Enter password</h3>
          <input className='bg-[#eeeeee] mb-4 w-full px-4 py-2 text-base rounded border placeholder:text-sm' required type="password" id="password" placeholder='password' ref={passwordRef} />

          <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-2 mb-2'>
            <input className='bg-[#eeeeee] w-1/2 px-4 py-2 text-base rounded border placeholder:text-sm' type="text" required placeholder='color' ref={vehicleColorRef} />

            <input className='bg-[#eeeeee] w-1/2 px-4 py-2 text-base rounded border placeholder:text-sm' type="text" required placeholder='plate' ref={vehiclePlateRef} />
          </div>
          <div className='flex gap-2 mb-6'>
            <input className='bg-[#eeeeee] w-1/2 px-4 py-2 text-base rounded border placeholder:text-sm' type="number" required placeholder='capacity' ref={vehicleCapacityRef} />

            <select className='bg-[#eeeeee] w-1/2 px-4 py-2 text-base rounded border placeholder:text-sm' required ref={vehicleTypeRef}>
              <option value="" disabled>Select Type</option>
              <option value="car">car</option>
              <option value="auto">auto</option>
              <option value="moto">motorcycle</option>
            </select>
          </div>

          <button className='bg-[#111] mb-2 text-base text-white font-semibold w-full px-4 py-2 rounded'>Create Captain Account</button>
        </form>

        <p className='text-center text-sm'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>

      <div>
        <p className='text-xs leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>

    </div>
  )
}

export default CaptainSignup