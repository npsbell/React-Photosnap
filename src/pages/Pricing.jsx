import React from "react";
import { OtherPageColorBar } from "../components/ItemElement";
import arrow_white from "../../public/right-arrow-2.png";
import PreFooter from "../components/PreFooter";
import camera from "../../public/view/home-pic/camera-5113699_1280.jpg";
import PricingComponent from "../components/pricingComponent";
import TableComponent from "../components/tableComponent";
import ScrollAnimation from "../components/ScrollAnimation";

const Pricing = () => {
  return (
    <>
      <div className="pt-20 h-[700px] md:h-[690px]" >
        <div className='1 grid grid-col grid-rows-[40%_60%] md:grid-cols-[40%_60%] md:grid-rows-1 bg-black text-white h-full'>
            <div className='left flex relative justify-center h-full md:h-3/5 self-center order-2 md:order-1'>
                <OtherPageColorBar />
                <div className='flex flex-col justify-center mx-10'>
                  <ScrollAnimation>
                  <h1 className='font-semibold text-4xl md:text-3xl lg:text-4xl tracking-widest'>PRICING</h1>
                   <p className='text-slate-500 mt-5 font-light'>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
                   <h4 className='flex tracking-widest mt-10 items-center gap-5 text-sm hover:underline hover:gap-10 hover:ease-in duration-200'>GET AN INVITE <img src={arrow_white} width={50} className='self-center'/></h4>
                  </ScrollAnimation>
                </div>
            </div>
            <div className='right order-1 md:order-2'>
                <img src={camera} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
      </div>

      <PricingComponent />

      <TableComponent />

      <PreFooter />

    </>
  );
};

export default Pricing;
