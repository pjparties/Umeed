import React from 'react'
import umeedlogo from '../assets/umeed-logo.png'
import umeedtext from '../assets/umeed.png'
import BagIcon from '../assets/BagIcon.png'
import InboxIcon from '../assets/InboxIcon.png'
import LocationIcon from '../assets/LocationIcon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper h-16 bg-navbg fixed-top items-center flex flex-row">
        <Link to={'/'} className='flex'>
          <img className='ml-14 h-14 w-16 py-0.5 my-auto object-contain cursor-pointer' src={umeedlogo} alt="umeed-logo" />
          <img className='ml-2 h-[58px] w-[66px] my-auto object-contain cursor-pointer' src={umeedtext} alt="umeed-logo" />
        </Link>
        <div className="flex relative ml-auto mr-12">
          <Link to={'/donate'}>
            <img className=' ml-1 h-[28px] w-[40px] my-auto object-contain cursor-pointer -translate-y-0.5' src={BagIcon} alt="donate" />
          </Link>
          <img className=' ml-4 h-[30px] w-[29px] my-auto object-contain cursor-pointer' src={InboxIcon} alt="notif-overlay" />
          <Link to={'/location'}>
            <img className=' ml-5 h-[28px] w-[28px] my-auto object-contain cursor-pointer' src={LocationIcon} alt="location" />
          </Link>
        </div>
        <div id='login/signin' className='flex-row mr-5'>
          <Link to={'/signIn'}>
            <button className='bg-secondarybg text-white font-bold py-2 px-6 rounded-full mr-2'><span className='font-thin text-sm justify-center'>Login</span></button>
          </Link>
          <Link to={'/signUp'}>
            <button className='bg-primarytwo text-white font-bold py-2 px-5 rounded-full'><span className='font-medium text-sm text-secondarybg'>Sign Up</span></button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
//FFB8C6
export default Navbar
