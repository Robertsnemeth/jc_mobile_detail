"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const service = ({serviceType}) => {
  return (
    <motion.div
    initial={{ 
        opacity:0,
        y: -50,
        }}
        transition={{ duration: .5,}}
        whileInView={{ opacity: 1, y: 0}}
    className='m-2 p-2 lg:w-1/2 flex flex-col items-center -z-10'>
        <h1 className='text-1xl lg:text-2xl text-center tracking-[5px] capitalize mb-2 text-blue-400'>{serviceType.title}</h1>
        <p className='text-center lg:text-lg'>{serviceType.description}</p>
        <br></br>
        <h1 className='text-sm tracking-[2px]'>STARTING AT</h1>
        <div className='grid grid-cols-2 gap-2 m-2'>
            {serviceType.vehicles.map((vehicle, idx) => (
                <div key={idx} className="text-center">
                    <Image src={vehicle.car} className=" w-[100px]"/>
                    <p>${vehicle.price}</p>
                </div>
            ))}
        </div>
    </motion.div>  )
}

export default service