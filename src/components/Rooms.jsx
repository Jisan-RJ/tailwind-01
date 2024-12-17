import React from 'react'
import rooms from "../assets/rooms.avif"
import rooms2 from "../assets/rooms2.avif"
const Rooms = () => {
  return (
    <section className='py-[200px]'>
        <div className='max-w-container mx-auto'>
            <div className='flex justify-between'>
                <div className='w-[40%]'>
                    <h3 className='font-kan font-medium text-[50px] leading-[60px]'>50+ Beautiful rooms inspiration</h3>
                    <p className='font-kan font-normal text-[19px] w-[380px] pt-[20px] pb-[40px]'>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
                    <a className='px-[45px] py-[15px] font-kan font-medium text-[16px] border border-green-300 rounded-[40px] relative after:absolute after:top-0 after:left-0 after:w-[50%] after:rounded-[40px] after:bg-green-300 after:h-full after:ease-in-out after:duration-700 after:z-[-1] hover:after:w-[100%]' >Explore More</a>
                </div>
                <div className='w-[57%]'>
                    <div className='flex justify-between'>
                        <div className='w-[346px]'>
                            <img className='w-[100%] h-[100%]' src={rooms}></img>
                        </div>
                        <div className='w-[309px] h-[374px] '>
                            <img className='w-[100%] h-[100%]' src={rooms2}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rooms