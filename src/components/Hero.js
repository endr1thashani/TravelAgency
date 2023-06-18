import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='w-full h-screen relative' id='home'>
      <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted/>
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'>
      </div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1>First Class Travel</h1>
        <h2 className='mt-4'>Top 1% Locations Worlwide</h2>
        <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 mt-2 rounded-md text-black bg-gray-100/90'>
            <div>
                <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none ml-2' type='text' placeholder='Search your dream destination'/>
            </div>
            <div>
                <button><AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}/></button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Hero
