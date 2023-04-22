import React from 'react'
import Navbar from '../components/Navbar'
import CallChatCard from '../components/CallChatCard'
import LocationCard from '../components/LocationCard'

const Location = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
      {/* <CallChatCard/>  */}
      <LocationCard/>
    </div>
  )
}

export default Location