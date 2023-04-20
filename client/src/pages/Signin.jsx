import React from 'react'
import SigninForm from '../components/SigninForm'
import Navbar from '../components/Navbar'

const Signin = () => {
  return (
    <div className='h-screen bg-slate-800 '>
      <Navbar/>
      <SigninForm/>
    </div>
  )
}

export default Signin