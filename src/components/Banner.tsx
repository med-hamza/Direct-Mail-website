import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className=' w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-7 bg-bg-Banner lg:pb-5 pb-5 pt-10'>
            <div className='lg:col-span-4 md:grid-cols-1 mt-16  px-4 lg:pl-20'>
                <h1 className='text-5xl lg:text-8xl sm:text-4xl md:text-6xl  font-bold'>
                    Meet your <br />
                    <span className=' text-titleColor font-medium  font-covered'>  favorite </span> new (old) marketing channel.
                </h1>
                <p className=' mt-7 text-text text-xl font-medium'>
                    Remarkable results. Easier than email. Postcard marketing <br /> reinvented for modern ecommerce.
                </p>
                <button className="btn-primary-section mt-10 ">
                    Try it Risk-free
                </button>
            </div>
            <div className=' lg:col-span-3  hidden lg:block'>
                <div className=' flex justify-end'>
                    <Image
                        src="/images/invest-picture.png"
                        alt=''
                        width={644}
                        height={500}
                        className=' max-w-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
