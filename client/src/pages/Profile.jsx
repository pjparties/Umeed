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


                <div className="ml-10 w-[70vw] h-[70vw] "><Grid/></div>
                <div className="mr-10 -mt-20">

                    <GetinTouch />
                </div>
            </div>

            {/* <Grid/> */}

        </div>
    )
}

export default Profile