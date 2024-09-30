import React from "react";
import canyon from "../../public/view/home-pic/canyon-1852921_1280.jpg";
import arrow_white from "../../public/right-arrow-2.png";
import { PreFooterColorBar } from "./ItemElement";

const PreFooter = () => {
  return (
    <div
      className="bg-cover bg-center flex flex-col md:flex-row justify-between items-start md:items-center text-white h-80 md:h-72"
      style={{ backgroundImage: `url(${canyon})` }}
    >
      <div className="flex justify-start items-center relative h-full">
        <PreFooterColorBar />
        <h1 className="font-medium md:font-semibold text-4xl tracking-widest leading-[50px] pl-10 md:pr-10 lg:pl-20">
          WE’RE IN BETA.
          <br />
          GET YOUR INVITE
          <br />
          TODAY!
        </h1>
      </div>
      <div className="flex justify-end gap-5 group px-10 pb-10 md:pb-0 md:pl-0 md:pr-10 lg:pr-20">
        <h4 className="flex tracking-widest items-center text-sm hover:underline hover:ease-in duration-200">
          GET AN INVITE
        </h4>
        <img src={arrow_white} width={50} className='self-center transform transition-transform duration-200 group-hover:translate-x-5'/>
      </div>
    </div>
  );
};
export default PreFooter;