import React from 'react';
import Link from 'next/link';
import Slider from '../components/slider';
import Car3 from '../../public/car-vector-1.webp';
import Car4 from '../../public/car-vector-2.webp';
import Car2 from '../../public/car-vector-3.webp';
import Car1 from '../../public/car-vector-4.webp';
import Button from '../components/button';
import Service from '../components/service';
import BreakPoint from '../components/breakpoint';
import Before1 from '../../public/IMG_3693.jpg';
import Before2 from '../../public/IMG_3789.jpg';
import After1 from '../../public/IMG_3702.jpg';
import After2 from '../../public/IMG_3801.jpg';
    



export default function Services () {

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

    const deluxeInterior = {
        title: "Deluxe Interior",
        description: "We address every single surface of the interior.We start with a deep vacuuming of the whole interior, wash floor mats and spot clean staining, shampoo carpets and seats if needed, clean and condition leather, scrub all plastics, clean dashboard and center console, clean door jambs, clean windows, apply protectant to interior trim, and do a final inspection to ensure quality.",
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

    const basicInterior = {
        title: "Basic Interior",
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
        description: "This is our best value service for those who want to go above and beyond with their vehicle. This is a 1 stage polish resulting in a 60% paint correction (polish) that eliminates most scratches and defects plus the standard exterior detail. Finished off with a spray on ceramic infused wax that will leave your paint refreshed and protected. An additional stage polish (2 stage) can be added for an additional $75 and will include a buffed on ceramic infused wax.",
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
    <main className='flex flex-col gap-2 pb-5 items-center'>
        <div className='flex flex-col gap-1 items-center lg:w-3/4 text-center mt-5 p-2'>
            <h1 className='tracking-[5px] text-xl lg:text-2xl font-bold text-blue-400'>SERVICES</h1>
            <p className="text-sm lg:text-xl">Here is our assortment of services we offer based on detaling packages and the size of the vehicle. Determine what is the best option for you and utilize the booking form to set up an appointment.</p>
            <p className='text-center text-xs lg:text-sm font-extrabold'>(Pet hair, and severe dirtiness increase prices)</p>
        </div>
        <Slider before={Before1} after={After1}/>
        <Service serviceType={fullDetail}/>
        <BreakPoint/>
        <Service serviceType={deluxeInterior}/>
        <BreakPoint/>
        <Slider before={Before2} after={After2}/>
        <Service serviceType={basicInterior}/>
        <BreakPoint/>
        <Service serviceType={deluxeExterior}/>
        <Link href="/booking" className='m-[5px]'>
            <Button>Book Now</Button> 
        </Link>      
    </main>
  )
}
