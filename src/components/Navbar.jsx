import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
const Navbar = () => {
    const [nav,setNav] = useState(false);
    const [logo,setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className='flex justify-between items-center h-20 px-4 w-full absolute text-white z-10'>
      <div className=''>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>Beaches</h1>
      </div>
      <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch size={20} className='mr-5'/>
            <BsPerson size={20}/>
        </div>
        <div className='md:hidden z-10 ' onClick={handleNav}>
            {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} /> }
        </div>
        <div onClick={handleNav} className={nav? 'absolute left-0 top-[0] w-full text-black  bg-gray-100/50 px-4 py-7 flex flex-col ease-in-out duration-300' : 'fixed left-[-100%]'}>
        <h1 className=''>Beaches</h1>
        
        <ul >
            <li className='border-b border-black'>Home</li>
            <li className='border-b border-black'>Destination</li>
            <li className='border-b border-black'>Travel</li>
            <li className='border-b border-black'>View</li>
            <li className='border-b border-black'>Book</li>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex my-8 justify-between'>
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
                <FaTwitter className='icon'/>
                <FaPinterest className='icon'/>
                <FaYoutube className='icon'/>
            </div>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
