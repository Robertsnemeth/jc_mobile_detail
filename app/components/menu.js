import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'

const menu = ( { isOpen, setIsOpen }) => {

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <motion.nav
    initial={{ 
      y: -180,
      }}
    transition={{ duration: .1,}}
    whileInView={{ opacity: 1, y: 0}}
        className='bg-black text-white w-screen h-[300px] absolute top-0 right-0 flex flex-col items-center transition-all duration-300 z-10'>
            <Link href="/services" className='text-center tracking-[10px] hover:opacity-80 hover:underline md:text-2xl' onClick={handleClick}>Services</Link>
            <Link href="/booking" className='text-center tracking-[10px] hover:opacity-80 hover:underline md:text-2xl' onClick={handleClick}>Book Now</Link>
            <Link href="/" className='text-center tracking-[10px] hover:opacity-80 hover:underline md:text-2xl' onClick={handleClick}>Home</Link>
    </motion.nav>
  )
}

export default menu