import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// import Slider from '../components/slider';
import Car1 from '../../public/car-vector-4.webp';
import Car2 from '../../public/car-vector-3.webp';
import Car3 from '../../public/car-vector-2.webp';
import Car4 from '../../public/car-vector-1.webp';
import Button from '../components/button';
// import Service from '../components/service';
import BreakPoint from '../components/breakpoint';
import Before1 from '../../public/IMG_3693.jpg';
import Before2 from '../../public/IMG_4414.webp';
import Before3 from '../../public/IMG_3842.webp';
import Before4 from '../../public/IMG_5540.webp';
import Before5 from '../../public/IMG_4370.webp';
import After1 from '../../public/IMG_3702.jpg';
import After2 from '../../public/IMG_4421.webp';
import After3 from '../../public/IMG_3849.webp';
import After4 from '../../public/IMG_4343.webp';
import After5 from '../../public/IMG_4372.webp';
import Cermaic1 from '../../public/IMG_8422.webp';
import Cermaic2 from '../../public/IMG_8399.jpg';




export default function Services () {

    const Slider = dynamic(() => import('../components/slider'))
    const Service = dynamic(() => import('../components/service'))

    const interiorExteriorLevel1 = {
        title: "Interior & Exterior Level 1 (Full)",
        description: "Our full detail service is to completely renew and revitalize all surfaces of your vehicle. This service focuses on cleaning, decontaminating, reconditioning and applying protection to the outside of your vehicle and deep cleaning the interior of your car.",
        vehicles: [{
            car: Car1,
            price: 245
        },
        {
            car: Car2,
            price: 300
        },
        {
            car: Car3,
            price: 325
        },
        {
            car: Car4,
            price: 375
        }]
    }

    const interiorExteriorLevel2 = {
        title: "Interior & Exterior Level 2 (Full+)",
        description: "Estimated Duration: 3 hours and 30 minutes. Exterior includes: Wheel and Tire Cleaning + Wheel Well Cleaning, Pre Wash (No Contact), Bug Removal, Foam Wash, Door Jamb Wipe Down, Exterior Window Cleaning, Clay Bar (Removes Embedded Contaminants), 3-6 Month Spray Sealant. Interior includes: Full Vacuum including Air Blowout, Interior Window Cleaning, All Hard Surfaces Scrubbed and Wiped. Seat Cleaning includes: Crevice Cleaning. ",
        vehicles: [{
            car: Car1,
            price: 370
        },
        {
            car: Car2,
            price: 445
        },
        {
            car: Car3,
            price: 505
        },
        {
            car: Car4,
            price: 565
        }]
    }

    const interiorLevel1 = {
        title: "Interior Level 1",
        description: "Interior includes: Full Vacuum including Air Blowout, Interior Window Cleaning, All Hard Surfaces Scrubbed and Wiped. Seat Cleaning includes: Crevice Cleaning.",
        vehicles: [{
            car: Car1,
            price: 125
        },
        {
            car: Car2,
            price: 150
        },
        {
            car: Car3,
            price: 180
        },
        {
            car: Car4,
            price: 215
        }]
    }

    const interiorLevel2 = {
        title: "Interior Level 2",
        description: "Interior includes: Full Vacuum including Air Blowout, Light Carpet Shampoo, Light Upholstery Shampoo, Interior Window Cleaning, All Hard Surfaces Scrubbed and Wiped. Seat Cleaning includes: Crevice Cleaning, Door Jamb Wipe Down",
        vehicles: [{
            car: Car1,
            price: 175
        },
        {
            car: Car2,
            price: 200
        },
        {
            car: Car3,
            price: 235
        },
        {
            car: Car4,
            price: 265
        }]
    }

    const interiorLevel3 = {
        title: "Interior Level 3 (Odor Removal)",
        description: "Interior includes: Full Vacuum including Air Blowout, Heavy Carpet Shampoo, Heavy Upholstery Shampoo, Interior Window Cleaning, All Hard Surfaces Scrubbed and Wiped. Seat Cleaning includes: Crevice Cleaning, Door Jamb Wipe Down, OZONE Treatment (Neutralize & Kills Odors/Viruses/Bacteria)",
        vehicles: [{
            car: Car1,
            price: 350
        },
        {
            car: Car2,
            price: 375
        },
        {
            car: Car3,
            price: 400
        },
        {
            car: Car4,
            price: 425
        }]
    }

    const exteriorLevel1 = {
        title: "Exterior Level 1",
        description: "Wheel and Tire Cleaning + Wheel Well Cleaning, Pre Wash (No Contact), Bug Removal, Foam Wash, Door Jamb Wipe Down, Exterior Window Cleaning, Clay Bar (Removes Emebedded Contaminants), 3-6 Month Spray Sealant.",
        vehicles: [{
            car: Car1,
            price: 135
        },
        {
            car: Car2,
            price: 175
        },
        {
            car: Car3,
            price: 210
        },
        {
            car: Car4,
            price: 255
        }]
    }

    const exteriorLevel2 = {
        title: "Exterior Level 2 - Our Most Popular Package",
        description: "Paint Enhacnment (1 Step Correction). 1 Step Correction can fix roughly 50% of paint inperfections (Swirling/Scratching/Water Spots). This package includes a Full Exterior Detail + Iron Decon and AIO (All In One) polish and sealant leaving your paint silky smooth and brigning clarity and vibrancy back to your paint. This is a great level for anyone looking to bring their daily vehicles paint back to life and protect their investment!  ",
        vehicles: [{
            car: Car1,
            price: 300
        },
        {
            car: Car2,
            price: 400
        },
        {
            car: Car3,
            price: 475
        },
        {
            car: Car4,
            price: 550
        }]
    }

    const exteriorLevel3 = {
        title: "Exterior Level 3",
        description: "Paint Enhacnment (2 Step Correction). 2 Step Correction can fix roughly 80%-90% of paint imperfections (Swirling/Scratching/Water Spots). This package includes a full exterior detail + Iron Decon, Wool Pad Rotary Cut to eliminate those stubborn defects, and finishing off your paint with an AIO (All In One) polish and sealant leaving your paint silky smooth and defect free. This package is perfectly paired with our Ceramic Coating, making your vehicle look better than ever before!",
        vehicles: [{
            car: Car1,
            price: 450
        },
        {
            car: Car2,
            price: 550
        },
        {
            car: Car3,
            price: 625
        },
        {
            car: Car4,
            price: 700
        }]
    }

    const ceramicCoating = {
        title: "Ceramic Coating",
        description: "Ceramic Coating is the ultmate exterior protection for your vehicle. Extremely durable, ultra-shiny, super hydrophobic, and lasting up to 5+ years. Ceramic coatng has a number of benefits, from protection against harsh contaminants, to saving time on cleaning. Make your vehicle look immaculate with our Ceramic Coating package and pair it with a paint correction, and you will be sure to turn heads! ",
        vehicles: [{
            car: Car1,
            price: 800
        },
        {
            car: Car2,
            price: 900
        },
        {
            car: Car3,
            price: 1000
        },
        {
            car: Car4,
            price: 1100
        }]
    }

  return (
    <main className='flex flex-col gap-2 pb-5 items-center xl:w-[80%] xl:m-auto'>
        <div className='flex flex-col gap-4 items-center lg:w-3/4 text-center lg:my-[50px] p-2'>
            <h1 className='tracking-[5px] text-3xl text-blue-400'>SERVICES</h1>
            <p className='lg:text-lg 2xl:w-3/4'>Here is our assortment of services we offer based on detaling packages and the size of the vehicle. Determine what is the best option for you and utilize the booking form to set up an appointment. We are happy to offer a 15% discount to all teachers, first responders, law enforcement, military members (active and veterans) and nurses. We are grateful for what you do for our community!</p>
            <p className='text-center text-sm font-extrabold'>(Pet hair, and severe dirtiness increase prices)</p>
        </div>
        <BreakPoint/>
        <div className='hidden lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[500px]'>
            <Service serviceType={interiorExteriorLevel1}/>
            <Slider before={Before4} after={After4}/>
        </div>
        <div className='lg:hidden'>
            <Slider before={Before4} after={After4}/>
            <Service serviceType={interiorExteriorLevel1}/>
        </div>
        <BreakPoint/>
        <Service className='lg:px-[50px] lg:h-[500px]' serviceType={interiorExteriorLevel2}/>
        <BreakPoint/>
        <div className='lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[500px] w-full'>
            <Slider before={Before5} after={After5}/>
            <Service serviceType={interiorLevel1}/>
        </div>
        <BreakPoint/>
        <div className='hidden lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[500px]'>
            <Service serviceType={interiorLevel2}/>
            <Slider before={Before2} after={After2}/>
        </div>
        <div className='lg:hidden'>
            <Slider before={Before2} after={After2}/>
            <Service serviceType={interiorLevel2}/>
        </div>
        <BreakPoint/>
        <Service className='lg:px-[50px] lg:h-[500px]' serviceType={interiorLevel3}/>
        <BreakPoint/>
        <div className='lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[500px]'>
            <Slider before={Before1} after={After1}/>
            <Service serviceType={exteriorLevel1}/>
        </div>
        <BreakPoint/>
        <div className='hidden lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[500px]'>
            <Service serviceType={exteriorLevel2}/>
            <Slider before={Before3} after={After3}/>
        </div>
        <div className='lg:hidden'>
            <Slider before={Before3} after={After3}/>
            <Service serviceType={exteriorLevel2}/>
        </div>
        <BreakPoint/>
        <Service className='lg:px-[50px] lg:h-[500px]' serviceType={exteriorLevel3}/>
        <BreakPoint/>
        <div className='lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[500px]'>
            <Slider before={Cermaic1} after={Cermaic2}/>
            <Service serviceType={ceramicCoating}/>
        </div>
        <Link href="/booking" className='m-[5px]'>
            <Button>Book Now</Button> 
        </Link>      
    </main>
  )
}

