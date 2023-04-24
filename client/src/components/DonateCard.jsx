import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Plus from '../assets/PlusIcon.png'

const DonateCard = () => {
  const [qty1, setQty1] = useState(0);
  const [qty2, setQty2] = useState(0);
  const [qty3, setQty3] = useState(0);
  return (
    <div className='Container flex flex-col h-screen items-end'>
      <div className='w-full'>
        <Navbar />
      </div>
      <div className="donation bg-background border-black border-solid border-2 rounded-2xl min-w-[334px] max-w-[432px]  min-h-[656px] my-auto flex mr-32 drop-shadow-2xl flex-col">
        <span className="flex flex-row">
          <div className="search my-auto w-[35vw] ml-[2rem]">
            <form class="flex items-center mx-5 my-5 w-full">
              <label for="simple-search" class="sr-only">Search</label>
              <div class=" relative w-full rounded-lg">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required />
              </div>
            </form>
          </div>
          <img src={Plus} alt="add" className="aspect-square max-h-3/6 my-auto ml-[3rem] mr-[3rem] hover:cursor-pointer" />
        </span>

        <div className="max-w-2xl px-8 py-2 bg-white rounded-3xl shadow-md my-3 mx-6 ">
          <div className="mt-2">
            <div className="flex flex-row justify-between">
              <p className="text-xl font-bold text-gray-700 hover:text-gray-600" tabindex="0">Clothes</p>
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
            <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita d</p>
          </div>
        </div>
        <div className="max-w-2xl px-8 py-2 bg-white rounded-3xl shadow-md my-3 mx-6 ">
          <div className="mt-2">
            <div className="flex flex-row justify-between">
              <p className="text-xl font-bold text-gray-700 hover:text-gray-600" tabindex="0">Books</p>
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
            <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita d</p>
          </div>
        </div>
        <div className="max-w-2xl px-8 py-2 bg-white rounded-3xl shadow-md my-3 mx-6 ">
          <div className="mt-2">
            <div className="flex flex-row justify-between">
              <p className="text-xl font-bold text-gray-700 hover:text-gray-600" tabindex="0">Toys</p>
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
            <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita d</p>
          </div>
        </div>
        <input type="text" className='bg-donate2 w-10/12 rounded-md py-2 mx-auto px-4 my-2' placeholder='Address' />
        <button className='w-10/12 bg-secondarybg rounded-md mx-auto py-2 my-2 '>
          <h1 className='text-white font-extrabold'>Donate</h1>
        </button>
      </div>
    </div>
  )
}

export default DonateCard