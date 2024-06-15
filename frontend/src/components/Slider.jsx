import React, { useState, useRef } from 'react';
import '../App.css';

const Slider = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    const walk = (x - startX) * 3; // scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="slider-container overflow-hidden w-[10%] ">
      <div
        ref={sliderRef}
        className="slider flex cursor-grab transition-transform ease-in-out"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="slider-item min-w-[200px] m-2 bg-gray-200 text-center p-5 shadow"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
