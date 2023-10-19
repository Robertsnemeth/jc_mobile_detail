"use client"

import { useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import SuccessMessage from '../components/successmessage';
import Button from '../components/button';

const Contact = () => {

  const form = useRef();
  const EMAIL_KEY = process.env.EMAIL_KEY;

  const [ emailSent, setEmailSent ] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm( "service_bqhmcwu", 'template_d2nbs7p', form.current, 'yYaTkV2LC8nxhsdxb' )
      .then(res => {
        console.log(EMAIL_KEY);
        console.log(res, "SUCCESS");
        e.target.reset();
        setEmailSent(true)
        setTimeout(() => {
          setEmailSent(false)
        }, 3000)
      })
      .catch(err => console.log(err, "ERROR"))
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-full min-h-screen sm:w-3/4 justify-center items-center text-center gap-2">
        <div className='flex flex-col gap-4 items-center lg:mt-[50px]'>
            <h1 className='tracking-[5px] text-3xl text-blue-400 uppercase'>Booking</h1>
            <p className='lg:text-lg lg:w-3/4 xl:w-1/2 lg:text-center'>
                Please provide your Name, Email, Subject (your vehicle and the service you would like) and a quick message describing the time frame you are looking for. We will get back to you by the end of the day to schedule an appointment! 
            </p>
        </div>
      <form onSubmit={sendEmail} ref={form} className='flex flex-col gap-2 w-[90%]'>
        <div className='flex flex-col lg:flex-row gap-2 w-full'>
            <input required type="text" placeholder="Name" name="name" className="lg:w-1/2 px-6 py-2 border transition-all focus:border-gray-400/40 focus:border-b-4"/>
            <input required type="email" placeholder="Email" name="email" className="lg:w-1/2 px-6 py-2 border transition-all focus:border-gray-400/40 focus:border-b-4"/>
        </div>
        <input required type="text" placeholder='Subject' name="subject" className="px-6 py-2 border transition-all focus:border-gray-400/40 focus:border-b-4"/>
        <textarea required name="message" className="px-6 py-2 border transition-all focus:border-gray-400/40 focus:border-b-4" cols="30" rows="10" placeholder="Message..." ></textarea>
        <Button className="">SUBMIT</Button>
      </form>
      {emailSent && <SuccessMessage/>}
    </motion.div>
  )
}

export default Contact
