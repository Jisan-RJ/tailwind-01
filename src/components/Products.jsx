import React from 'react'
import pro1 from "../assets/pro1.avif"
import pro2 from "../assets/pro2.avif"
import pro3 from "../assets/pro3.avif"
import pro4 from "../assets/pro4.avif"
const Products = () => {
  return (
    <section className='py-[200px]'>
        <div className='max-w-container mx-auto'>
             <h3 className='text-center font-kan font-bold text-[36px]'>Our Products</h3>
             <div className='flex flex-col gap-[180px]'>
             <div className='flex justify-between'>
            <div className='w-[23%] h-[350px]'>
                <img className='w-full h-full' src={pro1}></img>
                <h3 className='font-kan font-bold text-[22px] pt-[22px] '>Syltherine</h3>
                <p className='font-kan font-normal text-[17px] text-gray-500 py-[6px]'>stylish Dining table</p>
                <div className='flex justify-between'>
                <h6 className='font-kan font-medium text-[18px]'>Rp 2500.00</h6>
                <h6 className='font-kan font-medium text-[18px] text-gray-400'>Rp 3500.00</h6>
                </div>
            </div>
            <div className='w-[23%] h-[350px]'>
            <img className='w-full h-full' src={pro2}></img>
            <h3 className='font-kan font-bold text-[22px] pt-[22px]'>Leviosa</h3>
            <p className='font-kan font-normal text-[17px] text-gray-500 py-[6px]'>stylish Dining table</p>
                <div className='flex justify-between'>
                <h6 className='font-kan font-medium text-[18px]'>Rp 4500.00</h6>
                <h6 className='font-kan font-medium text-[18px] text-gray-400'>Rp 6000.00</h6>
                </div>
            </div>
            <div className='w-[23%] h-[350px]'>
            <img className='w-full h-full' src={pro3}></img>
            <h3 className='font-kan font-bold text-[22px] pt-[22px]'>Lolito</h3>
            <p className='font-kan font-normal text-[17px] text-gray-500 py-[6px]'>stylish Dining table</p>
                <div className='flex justify-between'>
                <h6 className='font-kan font-medium text-[18px]'>Rp 1500.00</h6>
                <h6 className='font-kan font-medium text-[18px] text-gray-400'>Rp 3500.00</h6>
                </div>
            </div>
            <div className='w-[23%] h-[350px]'>
            <img className='w-full h-full' src={pro4}></img>
            <h3 className='font-kan font-bold text-[22px] pt-[22px]'>Respira</h3>
            <p className='font-kan font-normal text-[17px] text-gray-500 py-[6px]'>stylish Dining table</p>
                <div className='flex justify-between'>
                <h6 className='font-kan font-medium text-[18px]'>Rp 1000.00</h6>
                <h6 className='font-kan font-medium text-[18px] text-gray-400'>Rp 1800.00</h6>
                </div>
            </div>
        </div>

        

        <div className='flex justify-between mb-[200px]'>
            <div className='w-[23%] h-[350px]  '>
                <img className='w-full h-full' src={pro1}></img>
                <h3 className='font-kan font-bold text-[22px] pt-[22px] '>Griffo</h3>
                <p className='font-kan font-normal text-[17px] text-gray-500 py-[6px]'>stylish Dining table</p>
                <div className='flex justify-between'>
                <h6 className='font-kan font-medium text-[18px]'>Rp 2500.00</h6>
                <h6 className='font-kan font-medium text-[18px] text-gray-400'>Rp 3500.00</h6>
                </div>
            </div>
            <div className='w-[23%] h-[350px]'>
            <img className='w-full h-full' src={pro2}></img>
            <h3 className='font-kan font-bold text-[22px] pt-[22px]'>Muggo</h3>
            <p className='font-kan font-normal text-[17px] text-gray-500 py-[6px]'>stylish Dining table</p>
                <div className='flex justify-between'>
                <h6 className='font-kan font-medium text-[18px]'>Rp 4500.00</h6>
                <h6 className='font-kan font-medium text-[18px] text-gray-400'>Rp 6000.00</h6>
                </div>
            </div>
            <div className='w-[23%] h-[350px]'>
            <img className='w-full h-full' src={pro3}></img>
            <h3 className='font-kan font-bold text-[22px] pt-[22px]'>Pingky</h3>
            <p className='font-kan font-normal text-[17px] text-gray-500 py-[6px]'>stylish Dining table</p>
                <div className='flex justify-between'>
                <h6 className='font-kan font-medium text-[18px]'>Rp 1500.00</h6>
                <h6 className='font-kan font-medium text-[18px] text-gray-400'>Rp 3500.00</h6>
                </div>
            </div>
            <div className='w-[23%] h-[350px]'>
            <img className='w-full h-full' src={pro4}></img>
            <h3 className='font-kan font-bold text-[22px] pt-[22px]'>Potty</h3>
            <p className='font-kan font-normal text-[17px] text-gray-500 py-[6px]'>stylish Dining table</p>
                <div className='flex justify-between'>
                <h6 className='font-kan font-medium text-[18px]'>Rp 1000.00</h6>
                <h6 className='font-kan font-medium text-[18px] text-gray-400'>Rp 1800.00</h6>
                </div>
            </div>
        </div>


        
             </div>

             <a className=' ml-[502px] mt-[100px] px-[70px] py-[15px] rounded-[40px] border border-green-300 relative  after:absolute  after:content-[""]  after:left-0 after:top-0 after:w-[50%] after:bg-green-300 after:h-[100%] after:rounded-[40px] after:z-[-1] after:duration-700 after:ease-in-out before:absolute before:content-[""] before:duration-1000 before:ease-in-out before:top-0 before:right-[0] before:w-[0] before:bg-green-200 before:h-[100%] before:z-[-1] before:rounded-[40px] hover:after:w-[50%] hover:before:w-[50%] hover:transition hover:ease-out hover:duration-4000 hover:after:rounded-tr-none hover:after:rounded-br-none hover:before:rounded-tl-none hover:before:rounded-bl-none' >See More</a>
        </div>
        
    </section>
  )
}

export default Products