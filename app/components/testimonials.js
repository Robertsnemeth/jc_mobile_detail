import React from 'react';

const testimonials = () => {

    const clientTestimonials = [
        {
            name: 'John Doe',
            feedback: 'JC Mobile Detailing is wonderful! I love how they cleaned my car!'
        },
        {
            name: 'Jane Doe',
            feedback: 'JC Mobile Detailing is wonderful!'
        },        {
            name: 'Hana Doe',
            feedback: 'JC Mobile Detailing is wonderful!'
        },        {
            name: 'Bobby Doe',
            feedback: 'JC Mobile Detailing is wonderful!'
        },        {
            name: 'Mugi Doe',
            feedback: 'JC Mobile Detailing is wonderful!'
        },        {
            name: 'Cam Doe',
            feedback: 'JC Mobile Detailing is wonderful!'
        },        {
            name: 'Jordan Doe',
            feedback: 'JC Mobile Detailing is wonderful!'
        },
    ]

  return (
    <div className="relative m-auto w-[300px] lg:h-[300px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[50px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[50px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*20)] gap-5">
        {clientTestimonials.map((testi, index) => (
            <div className="slide flex w-[300px] items-center justify-center" key={index}>
                <div className='flex flex-col gap-1'>
                    <h3 className="font-bold">{testi.name} -</h3>
                    <p>"{testi.feedback}"</p>
                </div>
            </div>
            ))}
            {clientTestimonials.map((testi, index) => (
            <div className="slide flex w-[125px] items-center justify-center" key={index}>
                <div className='flex flex-col gap-1'>
                    <h3 className="font-bold">{testi.name} -</h3>
                    <p>"{testi.feedback}"</p>
                </div>
            </div>
            ))}
        </div>
    </div>  )
}

export default testimonials