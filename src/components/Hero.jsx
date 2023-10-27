import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import beachVid from '../assets/beachVid.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video src={beachVid} className='w-full h-screen object-cover' autoPlay loop muted/>
        <div className="w-full h-full absolute bg-gray-900/30 top-0 left-0" >
            <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center text-white p-4">
                <h1>First Class Travel</h1>
                <h2 className='py-4'>Top 1% Locations Worldwide</h2>
                <form className='flex justify-between items-center max-w-[700px] text-black bg-gray-100/90 border p-1 mx-auto rounded-md w-full'>
                    <div>
                        <input type="text" className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none font-[Poppins]' placeholder='Search Destinations'/>
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} className="icon" style={{color:'#ffffff'}}/></button>
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Hero
