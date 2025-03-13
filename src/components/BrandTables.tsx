import { brandTable } from '@/utils/brandtable'
import Image from 'next/image'
import React from 'react'

const BrandTables = () => {
    return (
        <div className='mx-auto pt-16 pb-24  text-center'>
            <h1 className='text-5xl lg:text-6xl sm:text-4xl md:text-6xl pb-24 font-bold'>
                Everything your brand needs to <br />
                <span className=' text-titleColor font-medium  font-covered'>  make your brand unforgettable </span>
            </h1>
            <div className=' max-w-5xl mx-auto px-3 lg:px-0'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6'>
                    {brandTable.map((card) => (
                        <div key={card.id} className='p-4 lg:p-8 rounded-xl'
                            style={{ backgroundColor: card.bg }}
                        >
                            <div className='lg:min-h-48'>
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    width={240}
                                    height={20}
                                    className=' mb-4 mx-auto h-auto'
                                />
                            </div>

                            <h3 className=' text-lg lg:text-[28px] font-bold text-primary mb-2 mt-5'>
                                {card.title}
                            </h3>
                            <p className='text-text text-base'> {card.description} </p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BrandTables
