import React from 'react';
import wasa from "../assets/wasaa.png"
import nesco from "../assets/nescoa.png"
import desco from "../assets/desco1.png"
import btcl from "../assets/btcla.png"

const GridCard = () => {
    return (
        <div className='my-10'>
        <h2 className='text-2xl pb-5 font-bold text-center text-blue-700'>Available Payment Partners</h2>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 '>
            <div className='bg-white shadow p-4 card  flex items-center flex-col hover:shadow-xl transition duration-300'>
                <img className='w-20' src={wasa} alt="wasa" />
                <p className='font-bold text-xl text-blue-700'>WASA</p>
            </div>
            <div className='bg-white shadow p-4 card  flex items-center flex-col hover:shadow-xl transition duration-300'>
                <img className='w-20' src={btcl} alt="btcl" />
                <p className='font-bold text-xl text-blue-700'>BTCL</p>
            </div>
            <div className='bg-white shadow p-4 card  flex items-center flex-col hover:shadow-xl transition duration-300'>
                <img className='w-20' src={nesco} alt="nesco" />
                <p className='font-bold text-xl text-blue-700'>NESCO</p>
            </div>
            <div className='bg-white shadow p-4 card  flex items-center flex-col hover:shadow-xl transition duration-300'>
                <img className='h-[80px]' src={desco} alt="desco" />
                <p className='font-bold text-xl text-blue-700'>DESCO</p>
            </div>
        </div>
        </div>
    );
};

export default GridCard;