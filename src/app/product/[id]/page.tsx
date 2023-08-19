import React from 'react'
import Image from "next/image";
import { singleProduct } from '@/data';
import Price from '@/components/Price';
const ProductPage = () => {
  return (
    <div className='p-4  lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>
{ singleProduct.img && <div className="relative w-full h-1/2 md:h-[70%] justify-centermd:gap-6 xl:gap-8">
  <Image  src ={singleProduct.img} alt = '' className='object-contain' fill />

</div>
}
<div className="h-1/2">
<h1 className='text-3xl font-bold uppercase '> {singleProduct.title}</h1>
<p> {singleProduct.desc}</p>
 <Price price = {singleProduct.price} id={singleProduct.id} options ={singleProduct.options}/>
</div>

    </div>
  )
}

export default ProductPage