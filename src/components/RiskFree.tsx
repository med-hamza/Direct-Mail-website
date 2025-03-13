import Image from 'next/image'
import React from 'react'

const RiskFree = () => {
    return (
        <div className=' w-full px-3 lg:px-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-7 bg-[#FF6D2C]'>
            <div className='lg:col-span-4 md:grid-cols-1 mt-16 mb-10 lg:mb-0  px-4 lg:pl-20'>
                <h1 className='text-5xl lg:text-8xl text-white sm:text-4xl md:text-6xl  font-bold'>
                    Try MailMagnet <br /> Risk-Free
                </h1>
                <p className=' mt-7 text-white text-xl font-medium'>
                    No contracts. No commitments. Guaranteed results.*
                </p>
                <div className=' flex gap-10 mt-10 '>
                    <button className="btn-primary-white">
                        GET STARTED
                    </button>

                    <div>
                        <Image
                            src="/images/whitestar.png"
                            alt=''
                            width={130}
                            height={24}
                            className=' max-w-full '
                        />
                        <p className=' text-sm text-white font-medium'>  5.0 Shopify Rating</p>
                    </div>
                </div>

            </div>
            <div className=' lg:col-span-3  hidden lg:block'>
                <div className=' flex'>
                    <Image
                        src="/images/paw.png"
                        alt=''
                        width={580}
                        height={600}
                        className=' max-w-full'
                    />
                </div>
            </div>

        </div>
    )
}

export default RiskFree
