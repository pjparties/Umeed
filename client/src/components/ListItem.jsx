import React from 'react'
import Info from '../assets/Info.png'
// import MessageHeart from '../assets/MessageHeart.png'
import { Link } from 'react-router-dom';

const ListItem = ({ngoName,callTime}) => {
  ngoName = 'Raahi Foundation';
  callTime = 'Yesterday';
  return (
    <>
      <li class="py-2 h-fit">
        <div class="flex flex-row items-center justify-between mx-5">
          <div class="max-w-fit">
            <p class="text-sm font-semibold w-fit cursor-pointer text-darkblue truncate">
              {ngoName}
            </p>
            <p class="text-xs cursor-default -mt-1 text-white font-thin w-fit truncate">
              phone
            </p>
          </div>
          <div class=" mr-0 inline-flex items-center font-light text-white">
            <p className='cursor-default'>{callTime}</p>
            <Link><img src={Info} className='ml-4 mr-1 h-[24px] w-[24px]'/></Link>
          </div>
        </div>
      </li>
    </>
  )
}

export default ListItem