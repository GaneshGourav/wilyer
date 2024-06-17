import React, { useState, useRef } from "react";
import "../App.css";
import { FaArrowUpLong } from "react-icons/fa6";

export const Slider = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const data = [
    {
      name: "Order Created",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$134,970",
      rate1: "128.451",
      incr: "+12.98%",
    },
    {
      name: "Total Sales",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$2,145,132.80",
      rate1: "2,141,564.20",
      incr: "+4.98%",
    },
    {
      name: "PPC Sales",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$890.00",
      rate1: "872.00",
      incr: "+5.17%",
    },
    {
      name: "Units Sales",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$151,740",
      rate1: "145,869",
      incr: "+5.12%",
    },
    {
      name: "Organic Sales Ra...",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$100.00",
      rate1: "100.00",
      incr: "+6.12%",
    },
    {
      name: "Refund Sales",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$134,970",
      rate1: "128.451",
      incr: "+0.12%",
    },
    {
      name: "Order Created",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$134,970",
      rate1: "128.451",
      incr: "+12.98%",
    },
    {
      name: "Order Created",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$134,970",
      rate1: "128.451",
      incr: "+12.98%",
    },
    {
      name: "Order Created",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$134,970",
      rate1: "128.451",
      incr: "+12.98%",
    },
    {
      name: "Order Created",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$134,970",
      rate1: "128.451",
      incr: "+12.98%",
    },
    {
      name: "Order Created",
      date: "Oct 16/21 - Nov 14/21",
      rate: "$134,970",
      rate1: "128.451",
      incr: "+12.98%",
    },
  ];

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
  const getIncrColor = (incr) => {
    const value = parseFloat(incr);
    return value >= 5 ? "bg-[#6ec997]" : "bg-[#e57373]";
  };
  const getRateColor = (rate) => {
    const value = parseFloat(rate.replace(/[^0-9.-]+/g, ""));
    return value > 500000 ? "text-[#e57373]" : "text-[#6ec997]";
  };

  return (
    <div className="slider-container overflow-hidden relative mt-10 px-5">
      <div
        ref={sliderRef}
        className="slider flex cursor-grab transition-transform ease-in-out"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {data.map((el, index) => (
          <div
            key={index}
            className="slider-item min-w-[250px] m-2 text-center p-5 shadow rounded-[30px] bg-[#26221f]"
          >
            <div></div>
            <div className="flex justify-between text-white">
              <div>
                <p>{el.name}</p>
              </div>
              <div>
                <h1 className="text-[#6c6c6c] text-[8px]">ooo</h1>
              </div>
            </div>
            <div>
              <p className="text-[12px] text-left text-[#6c6c6c]">{el.date}</p>
              <div>
                <h1 className={`text-left ${getRateColor(el.rate)}`}>
                  {el.rate}
                </h1>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[#515b52]">{el.rate1}</p>
                </div>
                <div
                  className={`${getIncrColor(
                    el.incr
                  )} px-2 rounded-xl flex items-center gap-1`}
                >
                  {el.incr}
                  <div>
                    <FaArrowUpLong />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


