import React, { useState } from 'react'
import arrow_black from '../../public/right-arrow.png'
import arrow_white from '../../public/right-arrow-2.png'
import pic_home1 from '../../public/view/home-pic/nature-7189418_1280.jpg'
import pic_home2 from '../../public/view/home-pic/camera-1130731_1280.jpg'
import pic_home3 from '../../public/view/home-pic/nature-8064890_1280.webp'
import { ImgData, Feature } from '../data'
import { ContentColorBar, HomepageColorBar } from '../components/ItemElement'
import ScrollAnimation from '../components/ScrollAnimation'
import HoverIcon from "../components/HoverIcon";

const Homepage = () => {

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
    <div className='pt-20 grid grid-rows-3 h-[2300px] md:h-[1900px]'>
        <div className='1 grid grid-col grid-rows-[40%_60%] md:grid-cols-[40%_60%] md:grid-rows-1 bg-black text-white'>
            <div className='left relative flex justify-center h-full md:h-2/5 self-center order-2 md:order-1'>
                <HomepageColorBar />
                <div className='flex flex-col justify-center mx-10'>
                   <ScrollAnimation>
                   <h1 className='font-semibold text-4xl md:text-3xl lg:text-4xl tracking-widest'>CREATE AND<br/>SHARE YOUR<br/>PHOTO STORIES.</h1>
                   <p className='text-slate-500 mt-3 font-light'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                   <h4 className='flex tracking-widest mt-5 items-center gap-5 text-sm hover:underline hover:gap-10 hover:ease-in duration-200'>GET AN INVITE <img src={arrow_white} width={50} className='self-center'/></h4>
                   </ScrollAnimation>
                </div>
            </div>
            <div className='right order-1 md:order-2'>
                <img src={pic_home1} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className='2 grid grid-col grid-rows-[40%_60%] md:grid-cols-[60%_40%] md:grid-rows-1 bg-white text-black'>
            <div className='left'>
                <img src={pic_home2} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='right flex flex-col justify-center px-16 md:py-10 md:px-10 lg:px-16'>
               <ScrollAnimation>
                <h1 className='font-semibold text-4xl md:text-3xl lg:text-4xl tracking-widest'>BEAUTIFUL<br/>STORIES<br/>EVERY TIME</h1>
                <p className='text-slate-500 mt-3 font-light'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                <h4 className='flex tracking-widest mt-5 items-center gap-5 text-sm hover:underline hover:gap-10 hover:ease-in duration-200'>VIEW THE STORIES <img src={arrow_black} width={50}/></h4>
                </ScrollAnimation>
            </div>
        </div>
        <div className='3 grid grid-col grid-rows-[40%_60%] md:grid-cols-[40%_60%] md:grid-rows-1 bg-white text-black'>
            <div className='left flex flex-col justify-center md:py-10 px-16 md:px-10 lg:px-16 order-2 md:order-1'>
                <ScrollAnimation>
                <h1 className='font-semibold text-4xl md:text-3xl lg:text-4xl tracking-widest'>DESIGNED FOR EVERYONE</h1>
                <p className='text-slate-500 mt-3 font-light'>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
                <h4 className='flex tracking-widest mt-5 items-center gap-5 text-sm hover:underline hover:gap-10 hover:ease-in duration-200'>VIEW THE STORIES <img src={arrow_black} width={50} /></h4>
                </ScrollAnimation>
            </div>
            <div className='right order-1 md:order-2'>
                <img src={pic_home3} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
    
    {/* --------------------------section2-------------------------- */}
    <div className='grid grid-col grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 h-[2000px] md:h-[1000px] lg:h-[500px]'>
        {ImgData.slice(0,4).map((item) => (
            <div key={item.id} className='relative hover:-translate-y-6 hover:ease-in-out duration-500' onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave}>
                <img src={item.img} className='w-full h-full object-cover '/>
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

    {/* --------------------------section3-------------------------- */}    
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 lg:h-[450px]'>
        {Feature.slice(0,3).map((item) => (
            <div key={item.id} className='grid grid-rows-[35%_30%_35%] h-80'>
                <HoverIcon className='justify-self-center self-end'>
                <img src={item.img}/>
                </HoverIcon>
                <h1 className="font-semibold text-xl tracking-wide justify-self-center self-center">{item.title}</h1>
                <p className='text-gray-500 justify-self-center text-center font-light w-[80%] md:w-[55%] lg:w-full'>{item.des}</p>
            </div>
        ))}
    </div>

    </>
  )
}

export default Homepage