"use client";

import { useState } from 'react'
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx'
import Image from 'next/image'
import logo from '../../public/JCDetailing-Logo-AllColor.jpg'

const navbar = () => {

    const [ isClicked, setIsClicked ] = useState(false);

    const handleMenuClick = () => {
        console.log("clicked");
        setIsClicked(!isClicked);
    };

  return (
    <nav className='flex justify-between items-center p-4 bg-black '>
        <div>
            <Link href={'/'}><Image src={logo} className="w-[75px] h-[50px]"/></Link>
        </div>
        <RxHamburgerMenu className="h-8 w-8 text-white cursor-pointer" onClick={handleMenuClick}/>
    </nav>
  )
};

export default navbar