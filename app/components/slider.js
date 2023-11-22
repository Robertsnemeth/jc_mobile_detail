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
        x: -100,
        }}
      transition={{ duration: 1,}}
      whileInView={{ opacity: 1, x: 0}}
      className="w-full relative lg:m-5 lg:w-[40%]" onPointerUp={handleMouseUp}>
      <div
        className="relative w-full aspect-[70/45] m-auto lg:mt-10 overflow-hidden select-none shadow-md"
        onPointerMove={handleMove}
        onPointerDown={handleMouseDown}
      >
        <Image
          alt="before image"
          fill
          priority
          src={after}
          placeholder="blur"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full aspect-[70/45] m-auto overflow-hidden select-none shadow-md"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            alt="after image"
            src={before}
            placeholder="blur"
          />
        </div>
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-white absolute rounded-full h-4 w-4 -left-[6px] top-[calc(50%-5px)]" />
        </div>
      </div>
    </motion.div>
  );
};

export default slider;