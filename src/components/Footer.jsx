import React from "react";
import logo_white from "../../public/logo-white.svg";
import facebook_icon from "../../public/social/facebook.svg";
import youtube_icon from "../../public/social/youtube.svg";
import twitter_icon from "../../public/social/twitter.svg";
import pinterest_icon from "../../public/social/pinterest.svg";
import instagram_icon from "../../public/social/instagrame.svg";
import arrow_white from "../../public/right-arrow-2.png";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row justify-around md:justify-between items-center text-white h-[530px] md:h-80 lg:h-60 md:px-10 lg:px-20">
      {/* ---------------------left-side-------------------- */}
      <dev className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-center">
          <img src={logo_white} alt="" className="self-start" />
          {/* ---------------------md-------------------- */}
          <div className="hidden gap-2 my-8 md:flex lg:hidden text-sm">
            <h4 className="transform duration-300 ease-in-out hover:text-gray-500 cursor-pointer w-[100px]">
              HOME
            </h4>
            <h4 className="transform duration-300 ease-in-out hover:text-gray-500 cursor-pointer w-[100px]">
              STORIES
            </h4>
            <h4 className="transform duration-300 ease-in-out hover:text-gray-500 cursor-pointer w-[100px]">
              FEATURES
            </h4>
            <h4 className="transform duration-300 ease-in-out hover:text-gray-500 cursor-pointer w-[100px]">
              PRICING
            </h4>
          </div>
          <div className="flex justify-between mt-10 md:mt-0 lg:mt-10 self-center md:self-start gap-3 cursor-pointer">
            <img src={facebook_icon} alt="" />
            <img src={youtube_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={pinterest_icon} alt="" />
            <img src={instagram_icon} alt="" />
          </div>
        </div>

        {/* ---------------------sm & lg-------------------- */}
        <div className="flex flex-col justify-center lg:self-center items-center text-center lg:text-start tracking-widest text-sm lg:pl-[40px] leading-8 lg:leading-6 md:hidden lg:block mt-5 md:mt-0">
          <h4 className="transform duration-300 ease-in-out hover:text-gray-500 cursor-pointer w-[100px]">
            HOME
          </h4>
          <h4 className="transform duration-300 ease-in-out hover:text-gray-500 cursor-pointer w-[100px]">
            STORIES
          </h4>
          <h4 className="transform duration-300 ease-in-out hover:text-gray-500 cursor-pointer w-[100px]">
            FEATURES
          </h4>
          <h4 className="transform duration-300 ease-in-out hover:text-gray-500 cursor-pointer w-[100px]">
            PRICING
          </h4>
        </div>
      </dev>

      {/* ---------------------right-side-------------------- */}
      <div>
        <div className="flex justify-center md:justify-end gap-5 group">
          <h4 className="flex tracking-widest items-center text-sm hover:underline hover:ease-in duration-200">
            GET AN INVITE
          </h4>
          <img
            src={arrow_white}
            width={50}
            className="self-center transform transition-transform duration-200 group-hover:translate-x-5"
          />
        </div>
        <p className="mt-5 text-gray-500 font-light">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className='flex flex-col justify-center items-center md:items-start lg:ml-10'>
            <h1 className='md:ml-14 flex tracking-widest items-center gap-5 text-sm hover:underline hover:gap-10 hover:ease-in duration-200'>GET AN INVITE <img src={arrow_white} width={50}/></h1>
            <p className='mt-5 text-gray-500 font-light'>Copyright 2019. All Rights Reserved</p>
        </div> */
}
