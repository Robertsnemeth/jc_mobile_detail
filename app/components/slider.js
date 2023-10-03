"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";


const slider = ({
  before,
  after
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <motion.div 
      initial={{ 
        opacity:0,
        x: -200,
        }}
      transition={{ duration: 1,}}
      whileInView={{ opacity: 1, x: 0}}
      className="w-full relative m-5 lg:w-1/2" onMouseUp={handleMouseUp}>
      <div
        className="relative w-full lg:w-3/4 xl:w-1/2 aspect-[70/45] m-auto lg:mt-10 overflow-hidden select-none shadow-md"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <Image
          alt=""
          fill
          priority
          src={after}
        />

        <div
          className="absolute top-0 left-0 right-0 w-full aspect-[70/45] m-auto overflow-hidden select-none shadow-md"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            alt=""
            src={before}
          />
        </div>
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </motion.div>
  );
};

export default slider;