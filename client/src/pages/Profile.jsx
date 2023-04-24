import NGOpage from "../components/NGOpage";
import React from 'react';
import GetinTouch from "../components/GetinTouch";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";

const Profile = () => {
    return (
        <div className="flex flex-col space-x-0">
            <Navbar />
            <NGOpage />
            <div className=" w-full flex flex-row justify-between mt-30">


                <div className="ml-10 w-[70vw] h-[70vw] ">
                    {/* <p className="mx-10 text-center font-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, officiis. Sint sapiente alias perspiciatis quam dolorem, incidunt nemo obcaecati possimus numquam maxime praesentium iste facilis repellat? Omnis modi quae facere!</p> */}
                    <Grid />
                </div>
                <div className="mr-10 -mt-11">

                    <GetinTouch />
                </div>
            </div>

            {/* <Grid/> */}
        </div>
    )
}

export default Profile