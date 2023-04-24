import React from 'react'
import DonateCard from '../components/DonateCard'
import { styles } from '../styles.js'

const Donate = () => {
  return (
    <div className={`${styles.donateImage}`}>
      <DonateCard/> 
      <div className="fixed bottom-36 left-24">
        <h1 className='text-7xl text-white'>Donations</h1>
      </div>
    </div>
  )
}

export default Donate