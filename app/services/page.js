import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// import Slider from '../components/slider';
import Car1 from '../../public/car-vector-4.webp';
import Car2 from '../../public/car-vector-3.webp';
import Car3 from '../../public/car-vector-1.webp';
import Car4 from '../../public/car-vector-2.webp';
import Button from '../components/button';
// import Service from '../components/service';
import BreakPoint from '../components/breakpoint';
import Before1 from '../../public/IMG_3693.jpg';
import Before2 from '../../public/IMG_3789.webp';
import Before3 from '../../public/IMG_3842.webp';
import Before4 from '../../public/IMG_5540.webp';
import Before5 from '../../public/IMG_4370.webp';
import After1 from '../../public/IMG_3702.jpg';
import After2 from '../../public/IMG_3801.webp';
import After3 from '../../public/IMG_3849.webp';
import After4 from '../../public/IMG_4343.webp';
import After5 from '../../public/IMG_4372.webp';




export default function Services () {

    const Slider = dynamic(() => import('../components/slider'))
    const Service = dynamic(() => import('../components/service'))

    const fullDetail = {
        title: "Full Detail",
        description: "Our full detail service is to completely renew and revitalize all surfaces of your vehicle. This service focuses on cleaning, decontaminating, reconditioning and applying protection to the outside of your vehicle and deep cleaning the interior of your car.",
        vehicles: [{
            car: Car1,
            price: 225
        },
        {
            car: Car2,
            price: 260
        },
        {
            car: Car3,
            price: 300
        },
        {
            car: Car4,
            price: 350
        }]
    }

    const basicInterior = {
        title: "Basic Interior",
        description: "This is a light detailing of the interior, we thoroughly vacuum the entire interior, wash floor mats, clean windows, and apply protectant to interior trim.",
        vehicles: [{
            car: Car1,
            price: 100
        },
        {
            car: Car2,
            price: 125
        },
        {
            car: Car3,
            price: 170
        },
        {
            car: Car4,
            price: 200
        }]
    }

    const deluxeInterior = {
        title: "Deluxe Interior",
        description: "We address every single surface of the interior. We start with a deep vacuuming of the whole interior, wash floor mats and spot clean staining, shampoo carpets and seats, clean and condition leather, scrub all plastics, clean dashboard and center console, clean door jambs, clean windows, apply protectant to interior trim, and do a final inspection to ensure quality.",
        vehicles: [{
            car: Car1,
            price: 160
        },
        {
            car: Car2,
            price: 185
        },
        {
            car: Car3,
            price: 220
        },
        {
            car: Car4,
            price: 250
        }]
    }

    const basicExterior = {
        title: "Basic Exterior",
        description: "This is for those looking to greatly enhance the exterior appearance of their vehicle without going overboard. The result is a glossy, smooth surface, contaminant free, vibrant color, deep cleaned wheels and tires, and the application of a spray ceramic sealant with 6 months durability.",
        vehicles: [{
            car: Car1,
            price: 120
        },
        {
            car: Car2,
            price: 145
        },
        {
            car: Car3,
            price: 180
        },
        {
            car: Car4,
            price: 225
        }]
    }

    const deluxeExterior = {
        title: "Deluxe Exterior",
        description: "This is our best value service for those who want to go above and beyond with their vehicle. This is a 1 stage polish resulting in a 60% paint correction (polish) that eliminates most scratches and defects plus the basic exterior detail. Finished off with a spray on ceramic infused wax that will leave your paint refreshed and protected. An additional stage polish (2 stage) can be added for an additional $75 and will include a buffed on ceramic infused wax.",
        vehicles: [{
            car: Car1,
            price: 250
        },
        {
            car: Car2,
            price: 325
        },
        {
            car: Car3,
            price: 400
        },
        {
            car: Car4,
            price: 450
        }]
    }

  return (
    <main className='flex flex-col gap-2 pb-5 items-center w-screen'>
        <div className='flex flex-col gap-4 items-center lg:w-3/4 text-center lg:my-[50px] p-2'>
            <h1 className='tracking-[5px] text-3xl text-blue-400'>SERVICES</h1>
            <p className='lg:text-lg'>Here is our assortment of services we offer based on detaling packages and the size of the vehicle. Determine what is the best option for you and utilize the booking form to set up an appointment. We are happy to offer a 15% discount to all teachers, first responders, law enforcement, military members (active and veterans) and nurses. We are grateful for what you do for our community!</p>
            <p className='text-center text-sm font-extrabold'>(Pet hair, and severe dirtiness increase prices)</p>
        </div>
        <BreakPoint/>
        <div className='hidden lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[400px]'>
            <Service serviceType={fullDetail}/>
            <Slider before={Before4} after={After4}/>
        </div>
        <div className='lg:hidden'>
            <Slider before={Before4} after={After4}/>
            <Service serviceType={fullDetail}/>
        </div>
        <BreakPoint/>
        <div className='lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[400px]'>
            <Slider before={Before5} after={After5}/>
            <Service serviceType={basicInterior}/>
        </div>
        <BreakPoint/>
        <div className='hidden lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[400px]'>
            <Service serviceType={deluxeInterior}/>
            <Slider before={Before2} after={After2}/>
        </div>
        <div className='lg:hidden'>
            <Slider before={Before2} after={After2}/>
            <Service serviceType={deluxeInterior}/>
        </div>
        <BreakPoint/>
        <div className='lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[400px]'>
            <Slider before={Before1} after={After1}/>
            <Service serviceType={basicExterior}/>
        </div>
        <BreakPoint/>
        <div className='hidden lg:flex lg:gap-1 lg:items-center lg:px-[50px] lg:h-[400px]'>
            <Service serviceType={deluxeExterior}/>
            <Slider before={Before3} after={After3}/>
        </div>
        <div className='lg:hidden'>
            <Slider before={Before3} after={After3}/>
            <Service serviceType={deluxeExterior}/>
        </div>
        <Link href="/booking" className='m-[5px]'>
            <Button>Book Now</Button> 
        </Link>      
    </main>
  )
}

