import React from 'react'

const Header = () => {
  return (
    <div className='max-w-container mx-auto'>
        <nav className='h-20  flex flex-col justify-center'>
        <div className='flex'>
        <div className='w-1/2 '>
            <h2 className='font-kan font-bold text-[40px]'>Furniture</h2>
        </div>
        <div className='w-1/2 items-center justify-center flex'>
            <ul className='flex  justify-center'>
                <li><a className='px-[35px] font-kan font-normal text-[18px]'>Home</a></li>
                <li><a className='px-[35px] font-kan font-normal text-[18px]'>Services</a></li>
                <li><a className='px-[35px] font-kan font-normal text-[18px]'>Doctors</a></li>
                <li><a className='px-[35px] font-kan font-normal text-[18px]'>Products</a></li>
                <li><a className='px-[35px] font-kan font-normal text-[18px]'>Gallery</a></li>
            </ul>
        </div>
        </div>
        </nav>
    </div>
  )
}

export default Header