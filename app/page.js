import Image from 'next/image';
import dynamic from 'next/dynamic';
import TwoLogo from '../public/JCDetailing-Logo-TwoColor.png'
import Gallary from './components/gallary';
import Button from './components/button';
import Testimonials from './components/testimonials';
import Link from 'next/link';
// import HomeVideo from './components/homeVideo';
import BreakPoint from './components/breakpoint';

export default function Home() {

  const HomeVideo = dynamic(() => import('./components/homeVideo'))

  return (
    <main className="flex flex-col gap-5 items-center">
      <HomeVideo/>
      <section className='m-2 lg:m-5 p-2 lg:p-0 lg:w-3/4 lg:flex lg:gap-10 lg:h-[400px] lg:justify-between'>
        <div className='lg:flex lg:flex-col lg:w-1/2'>
          <h1 className='text-1xl lg:text-3xl text-center lg:text-start tracking-[5px] capitalize mb-2 text-blue-400'>About Me</h1>
          <p className='text-center lg:text-start lg:text-lg'>
            Hello everyone, my name is Jordan, owner and operator of JC Mobile Detailing! I started a detailing business simply because I love working on and restoring vehicles to their former glory! With more than 8 years of experience restoring and revitalizing dirty and faded vehicles to showroom quality, I look forward to serving my surrounding communities with the craft I love! We pride ourselves on being Enumclaw's premier mobile detailer!       
          </p>
        </div>
          <Image src={TwoLogo} alt="company logo" className='w-[300px] hidden lg:block'/>
      </section>
      <BreakPoint/>
      {/* <section className='m-2 p-2 flex flex-col items-center'>
        <Gallary/>
      </section> */}
      {/* <BreakPoint/> */}
      <section className='m-2 p-2 flex flex-col items-center gap-4 lg:flex-row lg:gap-[300px] lg:w-3/4 lg:h-[400px] lg:p-0'>
      <div className='lg:flex lg:flex-col lg:w-1/2'>
        <h1 className='text-1xl lg:text-3xl text-center lg:text-start tracking-[5px] capitalize mb-2 text-blue-400'>It's all in the details</h1>
          <p className='text-center lg:text-start lg:text-lg'>
            We use the top of the line products when detailing your vehicle, from waxes, cleaners, polishing compounds and everything in between! We wouldn’t use anything but the best on our vehicles, so why would we do any different for our customers! 
          </p>
      </div>
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
