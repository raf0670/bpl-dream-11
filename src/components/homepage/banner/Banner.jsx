import React from 'react';
import bannerImg from "../../../assets/banner-main.png";

const Banner = () => {
    return (
        <div className='min-h-[60vh] space-y-5 text-center rounded-4xl bg-[linear-gradient(30deg,blue,black_30%,black_70%,#ffdbac_100%)] flex flex-col justify-center items-center mb-5'>
            <img src={bannerImg} alt="" />
            <h1 className='text-5xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='text-xl text-gray-400'>Beyond Boundaries Beyond Limits</h3>
            <button className="bg-[#E7FE29] text-black outline outline-[#E7FE29] outline-offset-4 p-2 font-semibold rounded-xl hover:scale-105 duration-800">Claim Free Credit</button>
        </div>
    );
};

export default Banner;