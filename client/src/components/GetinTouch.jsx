import React from 'react'
import Dropdown from './Dropdown'

export const GetinTouch = () => {
    return (
        <section class=" my-10 max-w-4xl p-6 mx-auto bg-getinTouch rounded-md shadow-md w-[420px] h-[514px]">
            <h2 class="  text-[56.75px] font-thin text-black capitalize">Get in <span className='text-[56.75px] font-thin text-getinTouch2'>Touch</span></h2>
            <form>
                <div class="grid grid-cols-1 gap-6 mt-4">
                    <div>
                        <input placeholder='Name' id="name" type="text" class="block w-full px-4 py-2 mt-2 text-black bg-gray-50 border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <input placeholder='Email' id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-black bg-gray-50 border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <input placeholder="Phone number" id="phone" type="tel" class="block w-full px-4 py-2 mt-2 text-black bg-gray-50 border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                    </div>
                </div>
                <Dropdown></Dropdown>
                <div class="grid grid-cols-1 gap-6 mt-8">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-700 bg-getinTouch3 rounded-md hover:bg-secondarybg  focus:outline-none focus:bg-getinTouch3">SEND</button>
                </div>
            </form>
        </section>
    )
}





