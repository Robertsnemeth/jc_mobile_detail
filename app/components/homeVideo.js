"use client"

import React from 'react';
import { motion } from 'framer-motion';

const homeVideo = () => {
  return (
    <motion.div
        initial={{ 
            opacity:0,
            y: -200,
            }}
      transition={{ duration: 1,}}
      whileInView={{ opacity: 1, y: 0}}
      className='-z-10 bg-black w-full flex justify-center'
    >
        <video autoPlay loop muted loading="lazy" playsinline='true' className='shadow-md w-full lg:w-3/4'>
        <source src={require("../../public/CorvetteDetailingSmall.mp4")} type="video/mp4"/>
        </video>
  </motion.div>  )
}

export default homeVideo