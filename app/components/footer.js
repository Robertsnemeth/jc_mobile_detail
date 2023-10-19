'use client'

import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const footer = () => {
  return (
    <footer className='bg-black text-white flex flex-col gap-2 items-center p-4 max-w-screen'>
        <section className='flex gap-4'>
            <a href="https://www.facebook.com/profile.php?id=61551566326296" target="_blank">
              <FaFacebookF size='30' className='text-blue-400 hover:text-blue-300'/>
            </a>
            <a href="https://www.instagram.com/jc_mobile_detailingllc/" target="_blank">
              <FaInstagram size='30' className='text-blue-400 hover:text-blue-300'/>
            </a>
        </section>
        <section className='text-sm flex flex-col items-center'>
          <div className='flex gap-1 items-center'>
            <AiOutlineMail size='15'/>
            <h2>jordan.jcmobiledetailing@gmail.com</h2>
          </div>
          <div className='flex gap-1 items-center'>
            <AiOutlinePhone size='15'/>
            <h2>+1 (253) 549-8517</h2>
          </div>
            <h2>JC Mobile Detailing LLC &copy; 2023</h2>
        </section>
    </footer>
  )
}

export default footer