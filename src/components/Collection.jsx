import React from 'react'
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
const Collection = () => {
  return (
    <section className='py-[200px] bg-[#EFEFEE]'>
        <div className='max-w-container mx-auto'>
            <div className='w-[35%] mx-auto'>
                <h3 className='text-center font-kan font-bold text-[36px]'>Inspiration Collection</h3>
                <p className='text-center font-kan font-light text-[14px] pt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex justify-between pt-[70px]'>
                <div className='h-[434px] w-[30%] pt-[60px] '>
                    <img className='w-[100%]' src={one}></img>
                </div>
                <div className='h-[434px] w-[30%] '>
                    <img className='w-[100%]'  src={two}></img>
                </div>
                <div className='h-[434px] w-[30%] pt-[60px] '>
                    <img className='w-[100%]'  src={three}></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection