import React from 'react'
import clients from "../assets/client.png"
import star from "../assets/star.png"
const Client = () => {
  return (
    <section className='py-[180px]'>
        <div className='max-w-container mx-auto'>
            <h3 className='font-inter font-bold text-[45px] text-center mx-auto'>Some Client Reviews</h3>
            <p className='font-inter font-normal text-[16px] text-[#737373] text-center mx-auto w-[50%] pt-[20px] pb-[130px]'>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
            <div className='flex justify-between'>
                <div className='w-[32%] px-[58px] py-[54px] rounded-[30px] transition ease-in-out duration-700 hover:shadow-2xl'>
                    <img src={clients}></img>
                    <p className='py-[20px] font-normal font-inter text-[16px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                    <img src={star}></img>
                </div>
                <div className='w-[32%] px-[58px] py-[54px] rounded-[30px] bg-[#F4EFEF]'>
                <img src={clients}></img>
                <p className='py-[20px] font-normal font-inter text-[16px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                <img src={star}></img>
                </div>
                <div className='w-[32%] px-[58px] py-[54px] rounded-[30px] transition ease-in-out duration-700 hover:shadow-2xl'>
                <img src={clients}></img>
                <p className='py-[20px] font-normal font-inter text-[16px]'>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                <img src={star}></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Client