import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'
const Offer = () => {

  
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row  md:justify-between  md:h-[70vh]'>
       <div className="flex-1 flex flex-col justify-center items-center  text-center gap-8  p-6">
          <h1 className='text-white text-5xl font-bold  xl:text-6xl sm-text-center'>FlavorFusion Delights</h1>
          <p className='text-white xl:text-xl'>Step into the world of "FlavorFusion Delights," where taste takes center stage and culinary experiences come to life. Our food counter is a haven for those who crave a symphony of flavors that tantalize the senses. </p>
          <CountDown />

          <button className='bg-red-500 text-white rounded py-3 px-6'> OrderNow</button>

       </div>
       <div className="flex-1 relative  w-full md:h-ful">
        <Image src = '/offerProduct.jpg' alt ="" fill className='object-contain' />
        </div>

    </div>
  )
}

export default Offer