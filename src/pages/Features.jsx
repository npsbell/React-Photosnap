import { feature } from "../data";
import { OthePageColorBar } from "../components/ItemElement";
import friend from "../../public/view/home-pic/friends-4821707_1280.jpg";
import arrow_white from "../../public/right-arrow-2.png";
import PreFooter from "../components/PreFooter";
import ScrollAnimation from "../components/ScrollAnimation";
import HoverIcon from "../components/HoverIcon";

const Features = () => {
  return (
    <>
     {/* --------------------------section1-------------------------- */}
     <div className="pt-20 h-[700px] md:h-[690px]" >
        <div className='1 grid grid-col grid-rows-[40%_60%] md:grid-cols-[40%_60%] md:grid-rows-1 bg-black text-white h-full'>
            <div className='left flex relative justify-center h-full md:h-3/5 self-center order-2 md:order-1'>
                <OthePageColorBar />
                <div className='flex flex-col justify-center mx-10'>
                   <ScrollAnimation>
                   <h1 className='font-semibold text-4xl md:text-3xl lg:text-4xl tracking-widest'>FEATURES</h1>
                   <p className='text-slate-500 mt-5 font-light'>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
                   <h4 className='flex tracking-widest mt-10 items-center gap-5 text-sm hover:underline hover:gap-10 hover:ease-in duration-200'>GET AN INVITE <img src={arrow_white} width={50} className='self-center'/></h4>
                   </ScrollAnimation>
                </div>
            </div>
            <div className='right order-1 md:order-2'>
                <img src={friend} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
      </div>

      {/* --------------------------section2-------------------------- */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-10 lg:h-[850px]'>
        {feature.map((item) => (
            <div key={item.id} className='grid grid-rows-[35%_30%_35%] h-80'>
                <HoverIcon className='justify-self-center self-end'>
                <img src={item.img}/>
                </HoverIcon>
                <h1 className="font-semibold text-xl tracking-wide justify-self-center self-center">{item.title}</h1>
                <p className='text-gray-500 justify-self-center text-center font-light w-[80%] md:w-[55%] lg:w-full'>{item.des}</p>
            </div>
        ))}
    </div>

    <PreFooter />

    </>
  )
}

export default Features