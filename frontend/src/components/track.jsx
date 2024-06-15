import React from "react";
import { LiaCalendar } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineFolder } from "react-icons/hi2";
import { HiOutlineFolderAdd } from "react-icons/hi";

export const Tracks = () => {
  return (
    <>
      <div className=" flex justify-between items-center  px-5 text-[#b6ac9f] mt-10">
        <div className="md:flex justify-start items-center gap-5 w-[40%] hidden">
          <div className="flex justify-between items-center gap-2 text-white font-bold">
            <div >
              <p className="border rounded-full px-1">01</p>
            </div>
            <div>
              <p>Overview</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div>
              <h1 className="border border-[#6c6c6c] rounded-full px-1">02</h1>
            </div>
            <div>
              <p>PPC</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div>
              <h1 className="border border-[#6c6c6c]  rounded-full px-1">03</h1>
            </div>
            <div>
              <p>Year to year...</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div>
              <h1 className="border border-[#6c6c6c]  rounded-full px-1">04</h1>
            </div>
            <div>
              <p>Customize</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-[30%] ">
            <div className="flex justify-between items-center gap-2 py-2 bg-[#26221f] px-4 rounded-full">
          <div>
            <LiaCalendar />
          </div>
          <div className="">
            <p>
              <span className="text-white">30days</span> Oct 16/21-NOV 14/21
            </p>
          </div>
          <div>
        
            {" "}
            <MdKeyboardArrowDown className="text-[#b6ac9f] " />
          </div>
          </div>
          <div className="flex justify-start items-center gap-5">
          <div><HiOutlineFolder className="text-2xl" /></div>
          <div className=" rounded-full bg-yellow-200 p-2"><HiOutlineFolderAdd className="text-2xl text-black " /></div>
          </div>
        </div>
      </div>
    </>
  );
};
