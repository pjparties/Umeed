import React from 'react'
import ToggleCall from './ToggleCall'
import List from './List'


const CallChatCard = () => {
  return (
    <div className='bg-navbg w-4/12 h-2/5 rounded-3xl mx-auto my-20'>
      <div className='toggle component text-center p-3'>
        <ToggleCall />
      </div>
      <div className='list wrapper '>
        <List/>
      </div>
    </div>
  )
}

export default CallChatCard