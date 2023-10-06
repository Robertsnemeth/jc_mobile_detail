import Image from 'next/image';
import Gallary from './components/gallary';
import Button from './components/button';
import Testimonials from './components/testimonials';
import Link from 'next/link';
import HomeVideo from './components/homeVideo';
import BreakPoint from './components/breakpoint';

export default function Home() {

  return (
    <main className="flex flex-col gap-5 items-center">
      <HomeVideo/>
      <section className='m-2 lg:m-5 p-2 lg:p-0 lg:w-1/2'>
        <h1 className='text-1xl lg:text-2xl text-center tracking-[5px] capitalize mb-2 text-blue-400'>About Me</h1>
        <p className='text-center lg:text-lg'>
        Hello everyone, my name is Jordan, owner and operator of JC Mobile Detailing! I started a detailing business simply because I love working on and restoring vehicles to their former glory! With more than 8 years of experience restoring and revitalizing dirty and faded vehicles to showroom quality, I look forward to serving my surrounding communities with the craft I love!        
        </p>
      </section>
      <BreakPoint/>
      {/* <section className='m-2 p-2 flex flex-col items-center'>
        <Gallary/>
      </section> */}
      {/* <BreakPoint/> */}
      <section className='m-2 p-2 flex flex-col items-center gap-4 lg:w-1/2'>
      <h1 className='text-1xl lg:text-2xl text-center tracking-[5px] capitalize mb-2 text-blue-400'>It's all in the details</h1>
        <p className='text-center lg:text-lg'>
          We use the top of the line products when detailing your vehicle, from waxes, cleaners, polishing compounds and everything in between! We wouldn’t use anything but the best on our vehicles, so why would we do any dierent for our customers! 
        </p>
        <Link href="/services">
          <Button>Services</Button>
        </Link>
      </section>
      <section className='m-2 p-2 lg:w-1/2'>
        {/* <Testimonials/> */}
      </section>
    </main>
  )
}
