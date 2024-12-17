import React from 'react'
import five from "../assets/five.png"
const Space = () => {
  return (
    <section className='py-[200px]'>
        <div className='max-w-container mx-auto'>
            <div className='flex'>
                <div className='w-1/2 py-[200px]'>
                    <h3 className='font-kan font-bold text-[45px]'>Beautify Your Space</h3>
                    <p className='font-kan font-light text-[15px] w-[388px] pb-[40px]'>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <a className='px-[46px] py-[15px] border  rounded-[40px]  border-green-300 font-kan font-medium  text-[18px] relative  after:absolute  after:content-[""] after:rounded-[40px] after:duration-700 after:ease-in-out after:left-0 after:top-0 after:w-[60%] after:bg-green-300 after:z-[-1] after:h-[100%] hover:after:w-[100%] hover:after:z-[-1]   ' >Learn More</a>
                </div>
                <div className='w-1/2'>
                    <div className='h-[690px] w-[500px]'>
                        <img className='w-[100%] h-[100%]' src={five}></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Space