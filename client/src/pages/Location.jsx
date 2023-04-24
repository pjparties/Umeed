import React from 'react'
import Navbar from '../components/Navbar'
import CallChatCard from '../components/CallChatCard'
import LocationCard from '../components/LocationCard'
import {styles} from '../styles.js'
const Location = () => {
  return (
    <div className=''>
      <Navbar />
      {/* <CallChatCard/>  */}
      <div className={`${styles.bgImage}`} >
        <LocationCard />
        
      </div>
      
    </div>
  )
}

export default Location