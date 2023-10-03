'use client'

import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const footer = () => {
  return (
    <footer className='bg-black text-white flex flex-col gap-2 items-center p-4'>
        <section className='flex gap-4'>
            <a href="/" target="_blank">
              <FaFacebookF size='30'/>
            </a>
            <a href="https://www.instagram.com/jc_mobile_detailingllc/" target="_blank">
              <FaInstagram size='30'/>
            </a>
        </section>
        <section className='text-sm flex flex-col items-center'>
            <h2>jordan.jcmobiledetailing@gmail.com</h2>
            <h2>+1 (253) 549-8517</h2>
            <h2>JC Mobile Detailing &copy; 2023</h2>
        </section>
    </footer>
  )
}

export default footer