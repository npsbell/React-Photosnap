import React, { useState } from "react";
import { ContentColorBar } from "./ItemElement";

const PricingComponent = () => {
  const [isYear, setIsYear] = useState(false);

  const togglePlan = () => {
    setIsYear(!isYear);
    
  };

  return (
    <div className="grid grid-row-[20%_80%] h-full w-full px-10 md:px-20 lg:px-32 py-28 gap-14">
      {/* ---------section-toggle------- */}
      <div className="flex justify-center items-center gap-5">
        <span
          className={`text-xl font-semibold ${
            !isYear ? "text-black" : "text-gray-500"
          }`}
        >
          Mouthly
        </span>
        <div
          className={`toggle-container w-16 h-8 rounded-full cursor-pointer p-1 ${
            isYear ? "bg-black" : "bg-gray-300"
          }`}
          onClick={togglePlan}
        >
          <div
            className={`toggle w-6 h-6 rounded-full transform duration-300 ease-in-out ${
              isYear ? "bg-white translate-x-8" : "bg-black"
            }`}
          ></div>
        </div>
        <span
          className={`text-xl font-semibold ${
            isYear ? "text-black" : "text-gray-500"
          }`}
        >
          Yearly
        </span>
      </div>

      <div className="relative w-full">
        
          <div className={`grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:gap-8 transform duration-300 ease-in-out ${isYear ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            {/* ---------section-left------- */}
            <div className="left bg-gray-100 flex flex-col justify-center items-center py-14 px-10 my-0 lg:my-8">
              <h1 className="text-2xl font-semibold tracking-wider mb-3">
                Basic
              </h1>
              <p className="font-light text-gray-500 text-center">
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
              <h1 className="text-3xl font-semibold md:text-5xl md:font-bold tracking-widest mt-10">
                $190.00
              </h1>
              <p className="font-light text-gray-500 mb-7">per year</p>
              <button className="bg-black text-white w-full py-3 text-sm tracking-widest transform duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
                PICK PLAN
              </button>
            </div>

            {/* ---------section-middle------- */}
            <div className="meddle bg-black relative">
              <ContentColorBar className="absolute top-0" />
              <div className="flex flex-col justify-center items-center py-20 px-12">
                <h1 className="text-2xl font-semibold tracking-wider mb-3 text-white">
                  Pro
                </h1>
                <p className="font-light text-gray-500 text-center">
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
                <h1 className="text-3xl font-semibold md:text-5xl md:font-bold tracking-widest mt-10 text-white">
                  $390.00
                </h1>
                <p className="font-light text-gray-500 mb-7">per year</p>
                <button className="bg-white text-black w-full py-3 text-sm tracking-widest transform duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
                  PICK PLAN
                </button>
              </div>
            </div>
            {/* ---------section-right------- */}
            <div className="left bg-gray-100 flex flex-col justify-center items-center py-14 px-10 my-0 lg:my-8">
              <h1 className="text-2xl font-semibold tracking-wider mb-3">
                Business
              </h1>
              <p className="font-light text-gray-500 text-center">
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </p>
              <h1 className="text-3xl font-semibold md:text-5xl md:font-bold tracking-widest mt-10">
                $990.00
              </h1>
              <p className="font-light text-gray-500 mb-7">per year</p>
              <button className="bg-black text-white w-full py-3 text-sm tracking-widest transform duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
                PICK PLAN
              </button>
            </div>
          </div>
        {/* ---------------------------------------------------------------------- */}
          <div className={`absolute top-0 left-0 grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5 lg:gap-8 w-full transform duration-300 ease-in-out ${isYear ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
            {/* ---------section-left------- */}
            <div className="left bg-gray-100 flex flex-col justify-center items-center py-14 px-10 my-0 lg:my-8">
              <h1 className="text-2xl font-semibold tracking-wider mb-3">
                Basic
              </h1>
              <p className="font-light text-gray-500 text-center">
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </p>
              <h1 className="text-3xl font-semibold md:text-5xl md:font-bold tracking-widest mt-10">
                $19.00
              </h1>
              <p className="font-light text-gray-500 mb-7">per month</p>
              <button className="bg-black text-white w-full py-3 text-sm tracking-widest transform duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
                PICK PLAN
              </button>
            </div>
            {/* ---------section-middle------- */}
            <div className="meddle bg-black relative">
              <ContentColorBar className="absolute top-0" />
              <div className="flex flex-col justify-center items-center py-20 px-12">
                <h1 className="text-2xl font-semibold tracking-wider mb-3 text-white">
                  Pro
                </h1>
                <p className="font-light text-gray-500 text-center">
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
                <h1 className="text-3xl font-semibold md:text-5xl md:font-bold tracking-widest mt-10 text-white">
                  $39.00
                </h1>
                <p className="font-light text-gray-500 mb-7">per month</p>
                <button className="bg-white text-black w-full py-3 text-sm tracking-widest transform duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
                  PICK PLAN
                </button>
              </div>
            </div>

            {/* ---------section-right------- */}
            <div className="left bg-gray-100 flex flex-col justify-center items-center py-14 px-10 my-0 lg:my-8">
              <h1 className="text-2xl font-semibold tracking-wider mb-3">
                Business
              </h1>
              <p className="font-light text-gray-500 text-center">
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </p>
              <h1 className="text-3xl font-semibold md:text-5xl md:font-bold tracking-widest mt-10">
                $99.00
              </h1>
              <p className="font-light text-gray-500 mb-7">per month</p>
              <button className="bg-black text-white w-full py-3 text-sm tracking-widest transform duration-300 ease-in-out hover:bg-gray-300 hover:text-black">
                PICK PLAN
              </button>
            </div>
          </div>
      </div>

    </div>
  );
};

export default PricingComponent;
