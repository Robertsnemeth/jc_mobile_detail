"use client";

import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import logo from '../../public/JCDetailing-Logo-AllColor.jpg'
import Menu from './menu'
import Hamburgerbutton from './hamburgerbutton';

const navbar = () => {

    const [ isClicked, setIsClicked ] = useState(false);

    const handleMenuClick = () => {
        console.log("clicked");
        setIsClicked(!isClicked);
    };

  return (
    <nav className='flex justify-between items-center p-4 bg-black relative shadow-xlg shadow-white'>
        <div className='lg:flex lg:justify-between'>
            <Link href={'/'}><Image src={logo} alt="logo" className="w-[75px] h-[50px] md:w-[100px] md:h-[75px] hover:opacity-80"/></Link>
            <div className='hidden lg:flex lg:gap-8 lg:ml-24'>
              <Link href="/services" className='text-center text-white tracking-[10px] hover:opacity-80 hover:underline md:text-base'>Services</Link>
              <Link href="/booking" className='text-center text-white tracking-[10px] hover:opacity-80 hover:underline md:text-base'>Book Now</Link>
            </div>
        </div>
        <div onClick={handleMenuClick} className='z-20 lg:hidden'>
          <Hamburgerbutton className=" text-white cursor-pointer" isOpen={isClicked} setIsOpen={setIsClicked}/>
        </div>
        {isClicked && <Menu isOpen={isClicked} setIsOpen={setIsClicked}/>}
    </nav>
  )
};

export default navbar