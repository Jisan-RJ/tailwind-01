import React from 'react'
import logo from "../assets/my-logo.png"
const Header = () => {
  return (
    <section className='fixed top-0 left-0 w-full'>
      <div className='max-w-container mx-auto'>
      <nav className='flex justify-between items-center py-[35px] '>
        <div className='w-[30%]'>
          <a>
            <img src={logo}></img>
          </a>
        </div>
        <div className='w-[60%]'>
          <ul className='flex items-center'>
            <li><a className='px-[33px] font-inter font-medium text-[#6A4DF4] '>Home</a></li>
            <li><a className='px-[33px] font-inter font-medium text-black '>About</a></li>
            <li><a className='px-[33px] font-inter font-medium  text-black'>Services</a></li>
            <li><a className='px-[33px] font-inter font-medium text-black'>Careers</a></li>
            <li><a className='px-[33px] font-inter font-medium text-black'>Contact</a></li>
          </ul>
        </div>
        <div className='w-[40%]'>
          <div className='flex justify-end'>
          <a className='px-[42px] py-[15px] bg-[#6A4DF4] text-white rounded-[10px]'>Contact</a>
          </div>
        </div>
      </nav>
      </div>
    </section>
  )
}

export default Header