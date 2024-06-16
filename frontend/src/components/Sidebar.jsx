import React from "react";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import box from "../assets/box.jpg";
import folder from "../assets/folder.jpg";
import deletes from "../assets/Deletebox.jpg";
import filter from "../assets/filter.jpg";
import searchs from "../assets/searchs.jpg";
import bags from "../assets/bags.jpg";
import close from "../assets/circle.jpg";

export const Sidebar = () => {
  return (
    <>
      <section className="w-[100px] h-[900px] hidden md:block  mx-auto justify-center items-center ">
        <div className="flex justify-center items-center w-[60px] border border-[#3e3935] mx-auto mt-5 rounded-full font-mono py-1">
          <h1 className="text-[#eada94] font-mona   text-center text-5xl">S</h1>
        </div>
        <div className="mt-8 flex-row gap-10 justify-between items-center  h-full ">
          <div className=" rounded-full w-[50px] mx-auto py-2 bg-yellow-200">
            <MdOutlineInsertChartOutlined className="text-[#3e3935] text-3xl mx-auto " />
          </div>
          <div className=" rounded-full w-[50px] mx-auto py-2 mt-5">
            <img src={box} alt="" />
          </div>
          <div className=" rounded-full w-[50px] mx-auto py-2 mt-5">
            <img src={folder} alt="" />
          </div>
          <div className=" rounded-full w-[50px] mx-auto py-2 mt-5">
            <img src={deletes} alt="" />
          </div>
          <div className=" rounded-full w-[50px] mx-auto py-2 mt-5">
            <img src={filter} alt="" />
          </div>
          <div className=" rounded-full w-[50px] mx-auto py-2 mt-6">
            <img src={searchs} alt="" />
          </div>
          <div className=" rounded-full w-[50px] mx-auto py-2 mt-6">
            <img src={bags} alt="" />
          </div>
        </div>
        <div className=" rounded-full w-[50px] mx-auto py-2 ">
          <img src={close} alt="" />
        </div>
      </section>
    </>
  );
};
