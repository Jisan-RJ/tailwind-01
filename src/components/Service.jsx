import React from 'react'
import webs from "../assets/web.png"
import ui from "../assets/ui.png"
import settings from "../assets/settings.png"
import motion from "../assets/motion.png"
import anime from "../assets/anime.png"
import digi from "../assets/digi.png"
const Service = () => {
  return (
    <section className='py-[180px]'>
        <div className='max-w-container mx-auto'>
            <h3 className='text-center font-inter font-bold text-[45px]'>Our Provided Services</h3>
            <p className='font-inter font-normal text-center text-[16px] text-[#737373] w-[530px] mx-auto pt-[20px] pb-[50px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            <div className='flex flex-col gap-[24px]'>
            <div className='flex justify-between'>
                <div className='w-[32%] pt-[80px] pb-[47px] px-[49px] text-center transition ease-in-out duration-700 hover:shadow-2xl'>
                    <img className='mx-auto' src={webs}></img>
                    <h3 className='pt-[40.5px] pb-[20px] font-inter font-bold text-[25px]'>Web Design</h3>
                    <p className='font-inter font-normal text-[16px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className='w-[32%] pt-[80px] pb-[47px] px-[49px] text-center transition ease-in-out duration-700 hover:shadow-2xl'>
                    <img className='mx-auto' src={ui}></img>
                    <h3 className='pt-[40.5px] pb-[20px] font-inter font-bold text-[25px]'>UI/UX Design</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className='w-[32%] pt-[80px] pb-[47px] px-[49px] text-center transition ease-in-out duration-700 hover:shadow-2xl'>
                    <img className='mx-auto' src={settings}></img>
                    <h3 className='pt-[40.5px] pb-[20px] font-inter font-bold text-[25px]'>Web Development</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
            </div>



            <div className='flex justify-between'>
                <div className='w-[32%] pt-[80px] pb-[47px] px-[49px] text-center transition ease-in-out duration-700 hover:shadow-2xl'>
                    <img className='mx-auto' src={motion}></img>
                    <h3 className='pt-[40.5px] pb-[20px] font-inter font-bold text-[25px]'>Motion Graphics</h3>
                    <p className='font-inter font-normal text-[16px] text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className='w-[32%] pt-[80px] pb-[47px] px-[49px] text-center transition ease-in-out duration-700 hover:shadow-2xl'>
                    <img className='mx-auto' src={anime}></img>
                    <h3 className='pt-[40.5px] pb-[20px] font-inter font-bold text-[25px]'>3D Animation</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
                <div className='w-[32%] pt-[80px] pb-[47px] px-[49px] text-center transition ease-in-out duration-700 hover:shadow-2xl'>
                    <img className='mx-auto' src={digi}></img>
                    <h3 className='pt-[40.5px] pb-[20px] font-inter font-bold text-[25px]'>Digital Marketing</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Service