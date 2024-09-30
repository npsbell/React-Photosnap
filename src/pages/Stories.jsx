import React, { useState } from 'react'
import moon from '../../public/view/home-pic/clouds-323426_1280.jpg'
import arrow_white from '../../public/right-arrow-2.png'
import { imgData } from '../data'
import { ContentColorBar } from '../components/ItemElement'
import ScrollAnimation from "../components/ScrollAnimation";

const Stories = () => {

const [Hovered, setHovered] = useState(null)

const handleMouseEnter = (id) => {
    setHovered(id)
}

const handleMouseLeave = () => {
    setHovered(null)
}
  return (
    <>
    {/* --------------------------section1-------------------------- */}
    <div className='pt-20 relative'>
      <img src={moon} alt="" className='w-full h-[450px] md:h-[610px] object-cover brightness-50'/>
      <div className='absolute text-white top-28 md:top-40 pl-10 md:pl-20'>
        <ScrollAnimation>
        <p className='font-medium tracking-widest'>LAST MONTH’S FEATURED STORY</p>
        <h1 className='font-semibold text-2xl sm:text-4xl tracking-widest my-5 sm:w-[400px] md:w-[300px]'>HAZY FULL MOON OF APPALACHIA</h1>
        <p className='text-gray-400 font-light tracking-wide'>March 2nd 2020 <span className='text-white tracking-widest'>by Pixabay</span></p>
        <p className='text-gray-400 font-light tracking-wide mt-5 w-4/5 md:w-3/5 lg:w-2/5'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
        <h4 className='flex tracking-widest mt-5 items-center gap-5 text-sm hover:underline hover:gap-10 hover:ease-in duration-200'>READ THE STORY<img src={arrow_white} width={50} className='self-center'/></h4>
        </ScrollAnimation>
      </div>
    </div>

    {/* --------------------------section2-------------------------- */}
    <div className='grid grid-col grid-rows-16 md:grid-cols-2 md:grid-rows-8 lg:grid-cols-4 lg:grid-rows-4 h-[8000px] md:h-[4000px] lg:h-[2000px]'>
        {imgData.map((item) => (
            <div key={item.id} className='relative hover:-translate-y-6 hover:ease-in-out duration-500' onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}>
                <img src={item.img} className='w-full h-full object-cover'/>
                <div className='absolute -bottom-0 px-10 w-full text-white h-30 bg-gradient-to-t from-black/75 to-transparent'>
                    <h1 className='font-semibold tracking-wider text-xl'>{item.title}</h1>
                    <p className='font-light text-sm'>{item.author}</p>
                    <div className='border-t border-gray-500 mt-5'></div>
                    <h1 className='flex tracking-widest justify-between items-center mb-5'>READ STORY<img src={arrow_white} width={50}/></h1>
                </div>
                {Hovered === item.id && <ContentColorBar />}
            </div>
        ))}
    </div>

    </>
  )
}

export default Stories