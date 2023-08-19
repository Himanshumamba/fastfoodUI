"use client"
import React,{useState ,useEffect} from 'react'
import Image from 'next/image'
const data = [
    {
        id:1,
        title:'Savor the Flavors: Your Culinary Journey Starts Here!',
        image:'/slide1.jpg',
    },
    {
        id: 2,
        title: 'Feast and Finesse: Where Gastronomy Meets Adventure',
        image: '/slide2.jpg',
    },
    {
        id: 3,
        title: 'Taste the World on Your Plate: Explore, Indulge, Repeat.',
        image: '/slide3.jpg',
    }
]

const Slider = () => {

    const[currentSlide,setCurrentSlide] = useState(0);
     useEffect(() => {

        const interval = setInterval(
            ()=>setCurrentSlide((prev)=> prev === data.length-1 ? 0 : prev+1)

        ,1800)
     
       return () => {
        clearInterval(interval);
       }
     }, [])
     

  return (
    <div className=' flex  flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]  lg:flex-row '>
        <div className="flex-1  flex items-center justify-center  flex-col gap-8 text-red-500 lg:h-full">
        <h1 className='text-4xl text-center capita;lise p-4 md:text-5xl  xl:text-5xl'>  {data[currentSlide].title}</h1>
        <button className='bg-red-500  text-white rounded py-4 px-8 '> Shop Now</button>

        </div>
        <div className=" w-full flex-1 relative lg:h-full ">
            <Image src = {data[currentSlide].image} alt = ''  fill/>
        </div>

        </div>
  )
}

export default Slider