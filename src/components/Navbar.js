import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo ,setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white '>
      <div>
        <h1 className={logo ? 'hidden' : 'block'}><a href='#home'>Travel</a></h1>
      </div>
      <ul className='hidden md:flex decoration-none'>
        <a href='#home'>Home</a>
        <a href='#destinations'>Destination</a>
        <a href='#travel'>Travel</a>
        <a href='#view'>View</a>
        <a href='#search'>Book</a>
      </ul>
      <div className='hidden md:flex items-center gap-4 '>
        <a href='#search'><BiSearch size={20}/></a>
      </div>

      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
      </div>

      <div  className={nav ? 'absolute left-0 text-black top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
      <ul className='flex flex-col'>
        <h1><a href='#home'>Travel</a></h1>
        <a className='border-b' href='#home'>Home</a>
        <a className='border-b' href='#destinations'>Destination</a>
        <a className='border-b' href='#travel'>Travel</a>
        <a className='border-b' href='#view'>View</a>
        <a className='border-b' href='#search'>Book</a>
        <div className='flex flex-col'>
            <button className='my-6'><a href='#search'>Search</a></button>
        </div>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
