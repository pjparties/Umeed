import React from 'react'
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'
import profile4 from '../assets/profile4.jpg'
import profile5 from '../assets/profile5.jpg'
import profile6 from '../assets/profile6.jpg'

const Grid = () => {
  return (
    <div className='flex flex-col text-left ml-0 p-10 -mt-20  '>
      <p className="ml-5 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, officiis. Sint sapiente alias perspiciatis quam dolorem, incidunt nemo obcaecati possimus numquam maxime praesentium iste facilis repellat? Omnis modi quae facere!</p>
      <div class="container mx-auto px-5 py-2  ">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={profile1} />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={profile2}/>
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={profile3} />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={profile4} />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={profile5} />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={profile6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid