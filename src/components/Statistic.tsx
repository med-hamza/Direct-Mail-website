import Image from 'next/image'
import React from 'react'



const Statistic = () => {

    return (
        <div className='w-full bg-bg-Banner'>
            <div className=' max-w-5xl  mx-auto pt-16 pb-16'>
                <h1 className='text-5xl lg:text-6xl text-center sm:text-4xl md:text-6xl  font-bold'>
                    Why use direct mail? <br />
                    It <span className=' text-titleColor font-medium  font-covered'>  works </span> like crazy.
                </h1>
                <div className='grid grid-cols-1 items-center lg:grid-cols-3  mt-12'>
                    <div className=' mx-auto text-center pb-8 lg:pb-0'>
                        <p className=' text-6xl font-bold mb-1'>
                            28X
                        </p>
                        <p className='text-sm'>
                            Higher response rate than email <br /> & digital
                        </p>
                    </div>
                    <div className=' mx-auto text-center pb-8 lg:pb-0'>
                        <Image
                            src="/images/mail_picture.png"
                            alt=''
                            width={200}
                            height={190}
                            className=' max-w-full mb-1'
                        />
                        <p className='text-sm'>Your messages get read</p>
                    </div>
                    <div className=' mx-auto text-center'>
                        <p className=' text-6xl font-bold mb-1'>
                            17 Days
                        </p>
                        <p className='text-sm'>
                            Lifespan of a postcard vs. <br /> seconds for email or SMS
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistic
