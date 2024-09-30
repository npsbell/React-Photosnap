import React from "react";
import { table } from "../data";

const TableComponent = () => {
  return (
    <div className="py-16 px-10 md:px-24 lg:px-52 flex flex-col justify-center items-start sm:items-center overflow-x-auto w-full">
      <h1 className="text-4xl font-medium md:font-semibold tracking-widest mb-14 md:mb-24">COMPARE</h1>
      
      <table className="w-full divide-y-2 divide-black table-auto sm:table block">
        <thead className="sm:table-header-group block">
          <tr className="sm:table-row block pb-3">
            <th className="px-6 py-3 text-left text-xl md:text-sm font-medium tracking-wider sm:table-cell block">
              THE FEATURES
            </th>
            <th className="px-3 py-3 text-left text-sm font-medium tracking-wider sm:table-cell hidden ">
              BASIC
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium tracking-wider sm:table-cell hidden">
              PRO
            </th>
            <th className="py-3 text-left text-sm font-medium tracking-wider sm:table-cell hidden">
              BUSINESS
            </th>
          </tr>
        </thead>

        <tbody className="divide-y sm:table-row-group block">
          {table.map((item) => (
            <tr key={item.id} className="sm:table-row block py-5">
              <td className="pb-3 sm:p-6 whitespace-nowrap text-sm font-medium tracking-widest sm:tracking-wider sm:table-cell block">
                {item.title}
              </td>
              
              {item.basic ? <td className="sm-custom:px-7 md-custom:px-10 lg-custom:px-14 sm:p-6 sm:table-cell">
                <span className="sm:hidden text-xs text-gray-500 tracking-wider">BASIC</span>
                <img src={item.basic} className="object-cover w-[20px] sm:w-[25px]"/>
              </td> : <td className="sm-custom:px-7 md-custom:px-10 lg-custom:px-14 sm:p-6 sm:table-cell opacity-0">BASIC</td>}

              {item.pro ? <td className="sm-custom:px-7 md-custom:px-10 lg-custom:px-14 sm:p-6 sm:table-cell ">
                <span className="sm:hidden text-xs text-gray-500 tracking-wider">PRO</span>
                <img src={item.pro} className="object-cover w-[20px] sm:w-[25px]"/>
              </td> : <td className="sm-custom:px-7 md-custom:px-10 lg-custom:px-14 sm:p-6 sm:table-cell opacity-0">PRO</td>}
              
              <td className="sm-custom:px-7 md-custom:px-10 lg-custom:px-14 sm:p-6 sm:table-cell">
                <span className="sm:hidden text-xs text-gray-500 tracking-wider">BUSINESS</span>
                <img src={item.business} className="object-cover w-[20px] sm:w-[25px]"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
