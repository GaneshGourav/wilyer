import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMessageAltDots } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Navbar = () => {
  return (
    <>
      <nav className="  text-white flex justify-between items-center px-5 mt-5">
        <div className="flex justify-between items-center  w-[20%]">
          <div>
            <h1 className="text-3xl font-[400]">Dashboard</h1>
          </div>
          <div>
            <HiOutlineVideoCamera className="text-3xl text-[#b6ac9f]" />
          </div>
          <div>
            <AiTwotoneQuestionCircle className="text-3xl bg-black text-[#b6ac9f]" />
          </div>
        </div>
        <div>
          <div className="md:flex justify-center items-center gap-3 w-full bg-[#26221f] text-[#b6ac9f] py-2 px-5 rounded-full hidden ">
            <div>
              <CiSearch />
            </div>
            <input
              type="text"
              placeholder="search for anything"
              className="bg-[#26221f] rounded-full text-[#b6ac9f] "
            />
          </div>
        </div>
        <div className="md:flex justify-between items-center w-[20%] text-3xl hidden">
          <div className="flex justify-between items-center bg-[#26221f] rounded-full p-2">
            <img
              src="https://media.istockphoto.com/id/955320026/vector/united-states-flag-icon.jpg?s=612x612&w=0&k=20&c=H_7queZAVZk-Qp30pAbM-bfh64aO4bXBEC6ws_l6wNI="
              alt=""
              className="w-8 rounded-full"
            />
            <div>
              <MdKeyboardArrowDown className="text-[#b6ac9f]" />
            </div>
          </div>
          <div>
            <IoIosNotificationsOutline />
          </div>
          <div>
            <BiMessageAltDots />
          </div>
          <div className="rounded-full border border-red-500  flex justify-center items-center">
            <img
              src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
              alt=""
              className="rounded-full w-10"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
