import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <section className='py-[200px]'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between'>
                <div className='w-[39%]'>
                    <h1 className='font-kan font-bold text-[45px]'>Furniture</h1>
                    <p className='font-kan font-normal text-[16px] w-[300px] pt-[18px]'>400 University Drive Suite 200 Coral Gables, FL 33234 USA</p>
                </div>
                <div className='w-[29%]'>
                    <div className='flex justify-between'>  
                    <ul className='flex flex-col gap-[25px]'>
                        <li><a>Links</a></li>
                        <li><a className='font-kan font-medium text-[17px]'>Home</a></li>
                        <li><a className='font-kan font-medium text-[17px]'>Shop</a></li>
                        <li><a className='font-kan font-medium text-[17px]'>About</a></li>
                    </ul>
                    <ul className='flex flex-col gap-[25px]'>
                        <li><a>Help</a></li>
                        <li><a className='font-kan font-medium text-[17px]'>Payment Option</a></li>
                        <li><a className='font-kan font-medium text-[17px]'>Returns</a></li>
                        <li><a className='font-kan font-medium text-[17px]'>Privacy Policies</a></li>
                    </ul>
                    </div>
                </div>
                <div className='w-[28%]'>
                    <h3 className='font-kan font-bold text-[30px] pl-[70px]'>Connect With US !</h3>
                    <ul className='flex gap-[20px] ml-[90px] mt-[40px]'>
                        <li><a className='text-[40px]'><FaFacebook /></a></li>
                        <li><a className='text-[40px]'><FaTwitter /></a></li>
                        <li><a className='text-[40px]'><RiInstagramFill /></a></li>
                        <li><a className='text-[40px]'><FaFacebook /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer