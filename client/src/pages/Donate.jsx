import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Plus from '../assets/PlusIcon.png'

const Donate = () => {
  const [qty1, setQty1] = useState(0);
  const [qty2, setQty2] = useState(0);
  const [qty3, setQty3] = useState(0);
  return (
    <div className='Container flex flex-col h-screen items-end'>
      <div className='w-full'>
        <Navbar />
      </div>

      <div className="donation bg-background border-black border-solid border-2 rounded-2xl w-4/12 h-4/5 my-auto flex mr-32 drop-shadow-2xl flex-col">
        <span className="flex flex-row justify-around">
          <input type="text" class=" search w-7/12 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 mt-6" placeholder="Search" />
          <img src={Plus} alt="add" className="aspect-square h-4/6 mt-6 mr-4 hover:cursor-pointer" />
        </span>

        <div class="max-w-2xl px-8 py-2 bg-white rounded-3xl shadow-md my-3 mx-6 ">

          <div class="mt-2">
            <div className="flex flex-row justify-between">
              <p class="text-xl font-bold text-gray-700 hover:text-gray-600" tabindex="0">Clothes</p>
              <span className='flex flex-row justify-between mr-6'>
                <div className="bg-background rounded-lg w-8 p-1 mx-1 aspect-square">
                  <p className='px-2 hover:cursor-pointer' onClick={() => setQty1(qty1 - 1)}>-</p>
                </div>
                <div className="bg-background rounded-lg w-8 p-1 mx-1 aspect-square">
                  <p className='px-2'>{qty1}</p>
                </div>
                <div className="bg-background rounded-lg w-8 p-1 mx-1 aspect-square">
                  <p className='px-1.5 hover:cursor-pointer' onClick={() => setQty1(qty1 + 1)}>+</p>
                </div>
              </span>
            </div>

            <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita d</p>
          </div>
        </div>

        <div class="max-w-2xl px-8 py-2 bg-white rounded-3xl shadow-md my-3 mx-6 ">

          <div class="mt-2">
            <div className="flex flex-row justify-between">
              <p class="text-xl font-bold text-gray-700 hover:text-gray-600" tabindex="0">Books</p>
              <span className='flex flex-row justify-between mr-6'>
                <div className="bg-background rounded-lg w-8 p-1 mx-1 aspect-square">
                  <p className='px-2 hover:cursor-pointer' onClick={() => setQty2(qty2 - 1)}>-</p>
                </div>
                <div className="bg-background rounded-lg w-8 p-1 mx-1 aspect-square">
                  <p className='px-2'>{qty2}</p>
                </div>
                <div className="bg-background rounded-lg w-8 p-1 mx-1 aspect-square">
                  <p className='px-1.5 hover:cursor-pointer' onClick={() => setQty2(qty2 + 1)}>+</p>
                </div>
              </span>
            </div>

            <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita d</p>
          </div>
        </div>

        <div class="max-w-2xl px-8 py-2 bg-white rounded-3xl shadow-md my-3 mx-6 ">

          <div class="mt-2">
            <div className="flex flex-row justify-between">
              <p class="text-xl font-bold text-gray-700 hover:text-gray-600" tabindex="0">Toys</p>
              <span className='flex flex-row justify-between mr-6'>
                <div className="bg-background rounded-lg w-8 p-1 mx-1 aspect-square">
                  <p className='px-2 hover:cursor-pointer' onClick={() => setQty3(qty3 - 1)}>-</p>
                </div>
                <div className="bg-background rounded-lg w-8 p-1 mx-1 aspect-square">
                  <p className='px-2'>{qty3}</p>
                </div>
                <div className="bg-background rounded-lg w-8 p-1 mx-1 aspect-square">
                  <p className='px-1.5 hover:cursor-pointer' onClick={() => setQty3(qty3 + 1)}>+</p>
                </div>
              </span>
            </div>

            <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita d</p>
          </div>
        </div>

        <input type="text" className='bg-donate2 w-10/12 rounded-md py-4 mx-auto px-4 my-5' placeholder='Address' />

        <button className='w-10/12 bg-secondarybg rounded-md mx-auto py-2 my-4 '>
          <h1 className='text-white font-extrabold'>Donate</h1>
        </button>

      </div>
    </div>
  )
}

export default Donate 