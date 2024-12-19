import React from 'react'
import ban from "../assets/ban.png"
const Banner = () => {
  return (
    <section className='bg-no-repeat absolute  py-[300px] w-full z-[-1] ' style={{backgroundImage: `url(${ban})`}} >
        <div className='max-w-container mx-auto'>
            <div className='w-50% mx-auto flex justify-center flex-col items-center'>
                <h1 className='font-inter font-bold text-[75px] text-white text-center leading-[82px]'>We Help brands with high quality services</h1>
                <p className='font-inter font-normal text-[16px] text-white text-center w-[45%] pt-[51px] pb-[40px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                <a className='px-[42px] py-[15px] bg-[#6A4DF4] rounded-[10px] font-inter font-semibold text-[20px] text-white'>Get Started</a>
            </div>
        </div>
    </section>
  )
}

export default Banner