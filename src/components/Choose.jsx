import React from 'react'
import light from "../assets/light.png"
import call from "../assets/call.png"
import chooser from "../assets/chooser.jpg"
const Choose = () => {
  return (
    <section className='py-[180px]'>
        <div className='max-w-container mx-auto'>
            <h3 className='w-[35%] font-inter font-bold text-[45px] mx-auto text-center'>Why You Should Choose Agenc</h3>
            <p className='font-inter font-normal text-[#737373] text-[16px] text-center mx-auto w-[65%] pt-[20px] pb-[130px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className='flex justify-between'>
                <div className='w-[65%]'>
                    <div className='flex flex-col gap-[88px]'>
                    <div className='flex justify-between'>
                    <div className='w-[46%] transition ease-in-out duration-700 hover:shadow-2xl pl-[25px] pt-[25px] pb-[25px]'>
                        <img src={light}></img>
                        <h3 className='font-inter font-bold text-[25px] pt-[20px] pb-[10px]'>Innovative Ideas</h3>
                        <h5 className='font-inter font-normal text-[16px] text-[#737373]'>Because each project is different, we adapt to your business model.</h5>
                    </div>
                    <div className='w-[46%] transition ease-in-out duration-700 hover:shadow-2xl py-[25px] pl-[25px]'>
                    <img src={light}></img>
                        <h3 className='font-inter font-bold text-[25px] pt-[20px] pb-[10px]'>Innovative Ideas</h3>
                        <h5 className='font-inter font-normal text-[16px] text-[#737373]'>Because each project is different, we adapt to your business model.</h5>
                    </div>

                    
                    </div>






                    <div className='flex justify-between'>
                    <div className='w-[46%] transition ease-in-out duration-700 hover:shadow-2xl py-[25px] pl-[25px]'>
                        <img src={call}></img>
                        <h3 className='font-inter font-bold text-[25px] pt-[20px] pb-[10px]'>Dedicated Support</h3>
                        <h5 className='font-inter font-normal text-[16px] text-[#737373]'>We provide 24/7 support for all our clients and serve them professionally.</h5>
                    </div>
                    <div className='w-[46%] transition ease-in-out duration-700 hover:shadow-2xl py-[25px] pl-[25px]'>
                    <img src={call}></img>
                        <h3 className='font-inter font-bold text-[25px] pt-[20px] pb-[10px]'>Dedicated Support</h3>
                        <h5 className='font-inter font-normal text-[16px] text-[#737373]'>We provide 24/7 support for all our clients and serve them professionally.</h5>
                    </div>

                    
                    </div>
                    </div>
                </div>
                <div className='w-[30%] '>
                    <img className='transition ease-in-out duration-700 hover:shadow-2xl' src={chooser}></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Choose