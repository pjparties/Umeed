import React from 'react'
import SignupForm from '../components/SignupForm'
import Navbar from '../components/Navbar'

const Signup = () => {
  return (
    <div className='h-screen bg-slate-800 flex flex-col items-center '>
      <div className="w-full">
        <Navbar/>
      </div>
      <SignupForm/>
    </div>
  )
}

export default Signup