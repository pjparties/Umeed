import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Google from '../assets/Google.png'
import Apple from '../assets/Apple.png'
import axios from 'axios'
import { useDispatch } from "react-redux";
import { setLogin } from "../state";

const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () => {
    axios.post("http://localhost:3001/auth/login", user)
      .then(res => {
        console.log(user)
        alert('Welcome back')
        dispatch(
          setLogin({
            user: res.user,
            token: res.token,
          })
        );
        navigate('/')
      })
  }
  return (

    < div className='h-4/6 w-1/4 mx-auto mt-10 rounded-2xl p-3 bg-white min-w-[334px] max-w-[432px]  min-h-[600px]' >
      {console.log("User", user)}
      <div className='title'>
        <h1 className='text-4xl text-lightblack text-center mt-6 pb-1'>Sign in</h1>
      </div>
      <div className='subdesc text-center py-1 text-sm text-lightblack'><p>If you need any support <Link className='text-textsec'>Click Here</Link></p></div>
      <div className='form w-fit mx-auto mt-2 mb-3'>
        <form>
          <div className='email py-3 my-3 w-1'>
            <input className='rounded-lg border-gray-400 border-[0.1px] py-2 placeholder:font-light placeholder:text-sm placeholder:px-2' type="email" value={user.email} placeholder='Enter Username or Email' name="email" id="email" onChange={handleChange} />
          </div>
          <div classname='password my-3 '>
            <input className='rounded-lg border-gray-400 border-[0.1px] py-2 placeholder:font-light placeholder:text-sm placeholder:px-2' type="password" value={user.password} placeholder='Password' name="password" id="password" onChange={handleChange} />
          </div>
        </form>
        <Link className='pt-2 font-normal text-xs  w-fit mx-0.5 my-2'>Forgot Password?</Link>
      </div>
      <div className='login-button w-fit mx-auto my-3'>
        <button className='bg-secondarybg text-white font-bold py-2 px-[75px] rounded-2xl' onClick={() => { login(); }}><Link className='font-thin text-sm justify-center'>Login</Link></button>
      </div>
      <p className='text-center text-xs pt-2'>Or</p>
      <div className="google-apple flex flex-row gap-10 justify-center items-end my-6">
        <div className="google w-fit h-fit pt-3">
          <Link>
            <img className='h-7 ' src={Google} alt="" />
          </Link>
        </div>
        <div className="apple">
          <Link>
            <img className='h-8' src={Apple} alt="" />
          </Link>
        </div>
      </div>
      <div className='signup text-center pt-3'>
        <p>Not A Member? <Link to='/signUp' className='text-linkcolor'>Sign up</Link></p>
      </div>
    </div >
  )
}
// height: 693.3869018554688px;
// width: 392px;
// left: 788px;
// top: 104px;
// border-radius: [object Object]px;
// // 

export default SigninForm