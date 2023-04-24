import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Google from '../assets/Google.png'
import Apple from '../assets/Apple.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignupForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        location: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, location } = user
        if (name && email && password && location) {
            axios.post("http://localhost:3001/auth/register", user)
                .then(res => {
                    alert(res.data.message)
                    navigate('/signIn')
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div className='bg-white border-black border-solid border-2 rounded-2xl w-4/12 h-[600px] my-auto mr-32 drop-shadow-2xl flex
        flex-col min-w-[334px] max-w-[432px]  min-h-[620px] '>
            {console.log("User", user)}
            <div className='title'>
                <h1 className='text-4xl text-lightblack text-center mt-6 pb-1'>Sign Up</h1>
            </div>
            <div className='subdesc text-center py-1 text-sm text-lightblack'><p>If you need any support <Link className='text-textsec'>Click Here</Link></p></div>
            <div className='form mx-auto mt-2 mb-3 w-7/12'>
                <form>
                    <div className='name py-4 -mb-2'>
                        <input className='w-full rounded-lg py-2 border-gray-400 border-[0.1px] placeholder:font-light placeholder:text-sm placeholder:px-4' type="text" placeholder='Enter full name' name="name" value={user.name} id="name" onChange={handleChange} />
                    </div>
                    <div className='email py-4 my-3'>
                        <input className='w-full rounded-lg py-2 border-gray-400 border-[0.1px] placeholder:font-light placeholder:text-sm placeholder:px-4' type="email" placeholder='Enter Username or Email' name="email" id="email" value={user.email} onChange={handleChange} />
                    </div>
                    <div classname='password py-4 my-3'>
                        <input className='w-full rounded-lg py-2 border-gray-400 border-[0.1px] placeholder:font-light placeholder:text-sm placeholder:px-2' value={user.password} type="password" placeholder='Password' name="password" id="password" onChange={handleChange} />
                    </div>
                    <div className='location py-4 my-3'>
                        <input className='rounded-lg w-full py-2 border-gray-400 border-[0.1px] placeholder:font-light placeholder:text-sm placeholder:px-4' type="text" placeholder='Enter your address' name="location" id="location" value={user.location} onChange={handleChange} />
                    </div>
                </form>
            </div>
            <div className='login-button w-fit mx-auto'>
                <button onClick={() => { register(); }} className='bg-secondarybg text-white font-bold py-2 px-[75px] rounded-2xl'><Link className='font-thin text-sm justify-center'>Register</Link></button>
            </div>
            <p className='text-center text-xs pt-2'>Or</p>
            <div className="google-apple flex flex-row gap-10 justify-center items-end">
                <div className="google w-fit h-fit pt-3 ">
                    <Link>
                        <img className='h-7' src={Google} alt="" />
                    </Link>
                </div>
                <div className="apple">
                    <Link>
                        <img className='h-8' src={Apple} alt="" />
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default SignupForm