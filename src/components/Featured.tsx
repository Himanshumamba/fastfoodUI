import React from 'react'
import Image from 'next/image'
import { featuredProducts } from '@/data'
const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
         <div className='w-max flex'>

      { featuredProducts.map((item)=>(

       <div key = {item.id} className='w-screen h-[60vh] flex-col flex items-center justify-around p-4 md:w-[50vw]  xl:w-[33vw] hover:bg-red-100 transitio-all duration-300'>
        <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all:duration-500'>
         { item.img &&   
         <Image src ={item.img} alt = "" fill className='object-contain'/> 
         }
         </div>

        <div className='flex-1  flex flex-col items-center  justify-center text-center gap-4'> 
                <h1 className='text-xl font-bold uppercase'> {item.title}</h1> 
                <p className='p-4'> {item.desc}</p>
                <span className='text-xl font-bold'> ${item.price}</span>
                <button className='bg-red-500 text-white p-2  rounded-md '> Add to cart</button>
        </div>

        </div>
            
              ))  }
    </div>

    </div>
  )
}

export default Featured