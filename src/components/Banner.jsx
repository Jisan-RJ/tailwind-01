import React from 'react'

const Banner = () => {
  return (
    <section className='bg-ban py-[200px]'>
        <div className='max-w-container mx-auto'>
            <div className='w-[48%]'>
                <h4 className='font-kan font-normal text-[22px]'>New Arrival</h4>
                <h1 className='font-kan font-bold text-[52px] leading-[55px] pt-[30px] pb-[20px]'>Discover <span className='text-green-200'>Our New</span> Collection</h1>
                <p className='font-kan font-light text-[17px] pb-[52px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <a className='px-[60px] py-[16px] border bg-green-400 rounded-[40px] font-kan font-medium text-[20px]'>Buy Now</a>
            </div>
        </div>
    </section>
  )
}

export default Banner