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
      className='-z-10 bg-black w-screen flex justify-center'
    >
        <video autoPlay loop muted className='shadow-md'>
        <source className='w-screen h-screen' src={require("../../public/CorvetteDetailingNoMusic.mp4")} type="video/mp4"/>
        </video>
  </motion.div>  )
}

export default homeVideo