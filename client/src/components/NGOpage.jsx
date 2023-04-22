import React from 'react'
import RahiLogo from '../assets/RahiLogo.png'
import Donate from '../assets/Donate.png'
import Volunteer from '../assets/Volunteer.png'
import SaveRed from '../assets/SaveRed.png'

const NGOpage = () => {
    return (

        <div class="px-2 py-5 w-full h-[109] mx-2 mb-10">
            <div class="flex justify-around w-full ">
                {/* <!-- Icon --> */}
                <div className=' flex flex-row'>

                    <img src={RahiLogo} alt='' class="fill-current flex-shrink-0 mr-2 w-[5vw] h-[5vw]" viewBox="0 0 40 40">
                    </img>
                    {/* <!-- Card content --> */}
                    <div class="flex-grow truncate flex-col">
                        {/* <!-- Card header --> */}
                        <div class="w-full sm:flex justify-between items-center ">
                            {/* <!-- Title --> */}
                            <h2 class=" ml-2 text-3xl font-thin leading-snug text-darkblue truncate mb-1 sm:mb-0">Raahi Foundation</h2>
                        </div>
                    {/* <!-- Card body --> */}
                    <div class="flex items-end justify-start whitespace-normal">
                        {/* <!-- Paragraph --> */}
                        <div class="max-w-md text-xs mt-10">
                            <p class="mb-2">Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    </div>

                </div>
                <div className=' flex flex-row justify-end  pl-10  w-[30-vh]  '>
                    <div className='pr-5'>

                        <a class="flex-shrink-0 flex items-center align-middle justify-center  h-fit ml-5 mr-4 mt-1 mb-3" href="/donate">
                            <img className=' w-[10vw] align-middle' src={Donate} alt="" />
                        </a>
                    </div>
                    <div className='pl-5'>

                        <a class="flex-shrink-0 flex items-center justify-center align-middle  h-fit mr-4 mt-1 mb-3  " href="/donate">
                            <img className='w-[10vw] align-middle' src={Volunteer} alt="" />
                        </a>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default NGOpage