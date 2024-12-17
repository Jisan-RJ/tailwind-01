import React from 'react'
import live from "../assets/live.png"
import live2 from "../assets/live2.png"
import live3 from "../assets/live3.png"
const Browse = () => {
  return (
    <section className='py-[200px]'> 
        <div className='max-w-container mx-auto'>
        <div className='w-[35%] mx-auto'>
                <h3 className='text-center font-kan font-bold text-[36px]'>Browse The Range</h3>
                <p className='text-center font-kan font-light text-[14px] pt-[10px] pb-[65px]' >  dolor sit , consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

        <div className='flex justify-between'>
            <div className='w-[32%] h-[520px]'>
                <img className='w-full h-full' src={live}></img>
                <h4 className='text-center font-kan font-bold text-[27px] text-[#AD8C7A] pt-[26px]'>Dining</h4>
            </div>
            <div className='w-[32%] h-[520px]'>
            <img className='w-full h-full' src={live2}></img>
            <h4 className='text-center font-kan font-bold text-[27px] text-[#BFB09C] pt-[26px]'>Living</h4>
            </div>
            <div className='w-[32%] h-[520px]'>
            <img className='w-full h-full' src={live3}></img>
            <h4 className='text-center font-kan font-bold text-[27px] text-[#B5845C] pt-[26px]'>Bedroom</h4>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Browse