import React from 'react'
import umeedlogo from '../assets/umeed-logo.png'
import umeedtext from '../assets/umeed.png'
import BagIcon from '../assets/BagIcon.png'
import InboxIcon from '../assets/InboxIcon.png'
import LocationIcon from '../assets/LocationIcon.png'
const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper h-16 bg-navbg fixed-top items-center flex flex-row">
        <img className='ml-14 h-[58px] w-[66px] my-auto object-contain cursor-pointer' src={umeedlogo} alt="umeed-logo" />
        <img className='ml-2 h-[58px] w-[66px] my-auto object-contain cursor-pointer' src={umeedtext} alt="umeed-logo" />
        <div className="flex relative ml-auto mr-12">
          <img className=' ml-1 h-[28px] w-[40px] my-auto object-contain cursor-pointer -translate-y-0.5' src={BagIcon} alt="bagicon" />
          <img className=' ml-4 h-[30px] w-[29px] my-auto object-contain cursor-pointer' src={InboxIcon} alt="inbox" />
          <img className=' ml-4 h-[28px] w-[28px] my-auto object-contain cursor-pointer' src={LocationIcon} alt="location" />
        </div>
        <div id='login/signin' className='flex-row mr-5'>
          <button className='bg-secondarybg text-white font-bold py-2 px-6 rounded-full mr-2'><span className='font-thin text-sm justify-center'>Login</span></button>
          <button className='bg-primarytwo text-white font-bold py-2 px-4 rounded-full'><span className='font-medium text-sm text-secondarybg'>Sign Up</span></button>
        </div>

      </div>
    </nav>
  )
}
//FFB8C6
export default Navbar
