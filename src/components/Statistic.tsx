'use client'
import Image from 'next/image'
import React from 'react'
import { SecondLettrePullUp } from './animation/SecondLettrePullUp'
import { ScrollAnimation } from './animation/FadeMotion'


// const fadeUpVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
// };

// const fadeInVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } },
// };

const fadeOutVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};
const slideFade = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeIn' } },
}
const scaleFadeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeInOut' }
    },
};



const Statistic = () => {

    return (
        <div className='w-full bg-bg-Banner'>
            <div className=' max-w-5xl  mx-auto pt-16 pb-16'>
                <h1 className=' text-3xl lg:text-6xl text-center sm:text-4xl md:text-6xl  font-bold'>
                    <SecondLettrePullUp
                        text="Why use direct"
                        highlightedText='mail?'
                        highlightClassName="text-titleColor font-medium font-covered"
                    />
                    <SecondLettrePullUp
                        text="It works like crazy."
                    />
                </h1>

                <div className='grid grid-cols-1 items-center lg:grid-cols-3  mt-12'> {/* fade in */}
                    <ScrollAnimation variants={fadeOutVariants} className="mx-auto text-center pb-8 lg:pb-0">
                        <p className=' text-6xl font-bold mb-1'>
                            28X
                        </p>
                        <p className='text-sm'>
                            Higher response rate than email <br /> & digital
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation variants={slideFade} className=' mx-auto text-center pb-8 lg:pb-0'> {/* fade up */}
                        <Image
                            src="/images/mail_picture.png"
                            alt=''
                            width={200}
                            height={190}
                            className=' max-w-full mb-1'
                        />
                        <p className='text-sm'>Your messages get read</p>
                    </ScrollAnimation>
                    <ScrollAnimation variants={scaleFadeVariants} className="mx-auto text-center">
                        <p className=' text-6xl font-bold mb-1'>
                            17 Days
                        </p>
                        <p className='text-sm'>
                            Lifespan of a postcard vs. <br /> seconds for email or SMS
                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}

export default Statistic
