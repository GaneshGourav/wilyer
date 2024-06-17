import React from "react";
import "../App.css"
import { HiOutlineVideoCamera } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageAltDots } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { CiCircleQuestion } from "react-icons/ci";

export const Navbar = () => {
  return (
    <>
      <nav className="  text-white flex justify-between items-center w-[92%] px-5 mt-5">
        <div className="flex justify-between items-center w-[90%]  md:w-[20%]">
          <div className="md:hidden">
            <TbMenuDeep />
          </div>
          <div>
            <h1 className="text-3xl font-[400]">Dashboard</h1>
          </div>
          <div>
            <HiOutlineVideoCamera className="text-3xl text-[#b6ac9f]" />
          </div>
          <div>
            <CiCircleQuestion className="text-3xl bg-black text-[#b6ac9f]" />
          </div>
        </div>
        <div>
          <div className="md:flex justify-center items-center gap-3 w-full bg-[#26221f] text-[#b6ac9f] py-2 px-5 rounded-full hidden ">
            <div>
              <CiSearch />
            </div>
            <input
              type="text"
              placeholder="Search for anything"
              className="bg-[#26221f] rounded-full text-[#b6ac9f] outline-none px-2 "
            />
          </div>
        </div>
        <div className="md:flex justify-between items-center w-[20%] text-3xl hidden">
          <div className="flex justify-between items-center p-2 bg-[#26221f] rounded-full px-3 ">
            <img
              src="https://media.istockphoto.com/id/955320026/vector/united-states-flag-icon.jpg?s=612x612&w=0&k=20&c=H_7queZAVZk-Qp30pAbM-bfh64aO4bXBEC6ws_l6wNI="
              alt=""
              className="w-8 rounded-full "
            />
            <div>
              <MdKeyboardArrowDown className="text-[#b6ac9f]" />
            </div>
          </div>
          <div className="flex relative">
            <div className="bg-red-500 rounded-full w-[15px] h-[15px]  text-center">
              <p className="text-[10px] absolute bottom-[5px] left-1 ">9</p>
            </div>
            <IoIosNotificationsOutline className="text-[#b6ac9f]" />
          </div>
          <div>
            <BiMessageAltDots className="text-[#b6ac9f]" />
          </div>
          <div className="rounded-full  w-10  py-2 flex justify-center items-center">
            <img
              src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png"
              alt=""
              className="rounded-full   object-cover"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
