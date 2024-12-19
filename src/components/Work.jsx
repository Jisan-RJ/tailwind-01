import React from 'react'

import work1 from "../assets/work1.jpg"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"
import work4 from "../assets/work4.png"
import work5 from "../assets/work5.png"
import work6 from "../assets/work6.png"
const Work = () => {
  return (
    <section className='py-[180px] bg-gray-100'>
        <div className='max-w-container mx-auto'>
            <h3 className='text-center font-inter font-bold text-[45px]'>Our Recent Work</h3>
            <p className='font-inter font-normal text-center text-[16px] text-[#737373] w-[530px] mx-auto pt-[20px] pb-[50px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
           <div className='flex flex-col gap-[24px]'>
           <div className='flex justify-between'>
                <div className='w-[32%] '>
                    <img className='w-full' src={work1}></img>
                    <div className='bg-white rounded-bl-[20px] rounded-br-[20px] px-[42px] transition ease-in-out duration-700 hover:shadow-2xl'>
                    <h4 className='text-center  pt-[30px] font-inter font-bold text-[20px] '>Task Management App</h4>
                    <h5 className='text-center  font-inter font-normal text-[16px] text-[#737373] pb-[30px]'>This is a task management application that can help you be more </h5>
                    </div>
                </div>
                <div className='w-[32%]'>
                    <img className='w-full' src={work2}></img>
                    <div className='bg-white rounded-bl-[20px] rounded-br-[20px] px-[42px] transition ease-in-out duration-700 hover:shadow-2xl'>
                    <h4 className='text-center  pt-[30px] font-inter font-bold text-[20px] '>Saas Landing Page Design</h4>
                    <h5 className='text-center  font-inter font-normal text-[16px] text-[#737373] pb-[30px]'>This is a task management application that can help you be more </h5>
                    </div>
                </div>
                <div className='w-[32%]'>
                    <img className='w-full' src={work3}></img>
                    <div className='bg-white rounded-bl-[20px] rounded-br-[20px] px-[42px] transition ease-in-out duration-700 hover:shadow-2xl'>
                    <h4 className='text-center  pt-[30px] font-inter font-bold text-[20px] '>App Design</h4>
                    <h5 className='text-center  font-inter font-normal text-[16px] text-[#737373] pb-[30px]'>This is a task management application that can help you be more </h5>
                    </div>
                </div>
            </div>



            <div className='flex justify-between'>
                <div className='w-[32%]'>
                    <img className='w-full' src={work4}></img>
                    <div className='bg-white rounded-bl-[20px] rounded-br-[20px] px-[42px] transition ease-in-out duration-700 hover:shadow-2xl'>
                    <h4 className='text-center  pt-[30px] font-inter font-bold text-[20px] '>Landing Page Design</h4>
                    <h5 className='text-center  font-inter font-normal text-[16px] text-[#737373] pb-[30px]'>This is a task management application that can help you be more </h5>
                    </div>
                </div>
                <div className='w-[32%]'>
                    <img className='w-full' src={work5}></img>
                    <div className='bg-white rounded-bl-[20px] rounded-br-[20px] px-[42px] transition ease-in-out duration-700 hover:shadow-2xl'>
                    <h4 className='text-center  pt-[30px] font-inter font-bold text-[20px] '>Dashboard Design</h4>
                    <h5 className='text-center  font-inter font-normal text-[16px] text-[#737373] pb-[30px]'>This is a task management application that can help you be more </h5>
                    </div>
                </div>
                <div className='w-[32%]'>
                    <img className='w-full' src={work6}></img>
                    <div className='bg-white rounded-bl-[20px] rounded-br-[20px] px-[42px] transition ease-in-out duration-700 hover:shadow-2xl'>
                    <h4 className='text-center  pt-[30px] font-inter font-bold text-[20px] '>Web App Design</h4>
                    <h5 className='text-center  font-inter font-normal text-[16px] text-[#737373] pb-[30px]'>This is a task management application that can help you be more </h5>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Work