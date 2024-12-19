import React from 'react'
import logo from "../assets/my-logo.png"
const Footer = () => {
  return (
    <section className='py-[150px]'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between'>
                <div className='w-[30%]'>
                    <img src={logo}></img>
                    <p className='pt-[30px] font-inter font-normal text-[16px] text-[#7B7B7B]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                </div>
                <div className='w-[65%]'>
                    <div className='flex justify-between'>
                    <div className='w-[45%]'>
                        <div className='flex justify-between'>
                            <div className='w-[45%]'>
                                <ul className='flex flex-col gap-[25px]'>
                                    <li><a className='font-inter font-semibold text-[20px]'>About</a></li>
                                    <li ><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>about us</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Features</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>News</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Carrers</a></li>
                                </ul>
                            </div>
                            <div className='w-[45%]'>
                            <ul className='flex flex-col gap-[25px]'>
                                    <li><a className='font-inter font-semibold text-[20px]'>Company</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Out Team</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Partner with us</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>FaQ</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-[45%]'>
                    <div className='flex justify-between'>
                            <div className='w-[45%]'>
                                <ul className='flex flex-col gap-[25px]'>
                                    <li><a className='font-inter font-semibold text-[20px]'>Support</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>about us</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Features</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>News</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Carrers</a></li>
                                </ul>
                            </div>
                            <div className='w-[45%]'>
                            <ul className='flex flex-col gap-[25px]'>
                                    <li><a className='font-inter font-semibold text-[20px]'>Get in Touch</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Out Team</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Partner with us</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>FaQ</a></li>
                                    <li><a className='font-inter font-normal text-[16px] text-[#7B7B7B]'>Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer