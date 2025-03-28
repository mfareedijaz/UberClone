import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div>
            <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1538563188159-070c4db2bc65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full pt-8 flex flex-col justify-between bg-red-400'>
                <img className='w-16 ml-9' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <div className='bg-white px-4 pb-6 py-4'>
                    <h2 className='font-bold text-2xl'>Get Started with Uber</h2>
                    <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5 font-medium'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start