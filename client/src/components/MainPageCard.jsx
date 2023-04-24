import React, { useEffect } from 'react'
import RahiLogo from '../assets/RahiLogo.png'
import Donate from '../assets/Donate.png'
import Volunteer from '../assets/Volunteer.png'
import SaveRed from '../assets/SaveRed.png'
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state";

const MainPageCard = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();

    dispatch(setPosts({ posts: data }));
  };

  return (
    <div class="w-[80vw] scale-110 my-9 mx-auto bg-[#D9D9D9] shadow-sm rounded-lg">
      <div class="px-4 py-5">
        <div class="flex items-start">
          {/* <!-- Icon --> */}
          <img src={RahiLogo} alt='' class="fill-current flex-shrink-0 mr-2" width="40" height="40" viewBox="0 0 40 40">
          </img>
          {/* <!-- Card content --> */}
          <div class="flex-grow truncate">
            {/* <!-- Card header --> */}
            <div class="w-full sm:flex justify-between items-center">
              {/* <!-- Title --> */}
              <h2 class="text-xl leading-snug text-darkblue truncate mb-1 sm:mb-0">Raahi Foundation</h2>
            </div>
            {/* <!-- Card body --> */}
            <div class="flex items-end justify-between whitespace-normal">
              {/* <!-- Paragraph --> */}
              <div class="max-w-md text-xs">
                <p class="mb-2">Lorem ipsum dolor sit amet, consecte adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
          </div>
          <div className='links justify-start pl-2'>
            <a class="flex-shrink-0 flex items-center justify-center w-24 h-fit mr-4 mt-1 mb-3" href="/donate">
              <img src={Donate} alt="" />
            </a>
            <a class="flex-shrink-0 flex items-center justify-center w-24 h-fit mr-4  " href="/donate">
              <img src={Volunteer} alt="" />
            </a>
          </div>
        </div>
        <div className='p-1 forsave relative left-[69rem] bottom-[5.8rem] z-10 max-w-fit'>
          <img src={SaveRed} className='h-[16px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainPageCard