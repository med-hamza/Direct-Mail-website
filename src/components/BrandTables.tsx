import { brandTable } from '@/utils/brandtable'
import Image from 'next/image'
import React from 'react'
import { LettersPullUp } from './animation/LettersPullUp'

const BrandTables = () => {
    return (
        <div className='mx-auto pt-16 pb-24  text-center'>
            <h1 className=' pb-8 lg:pb-24'>
                <LettersPullUp
                    text="Everything your brand needs to"
                />
                <LettersPullUp
                    text="make your brand unforgettable"
                    className="text-titleColor font-medium font-covered"
                />
            </h1>
            <div className=' max-w-5xl mx-auto px-3 lg:px-0'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6'>
                    {brandTable.map((card) => (
                        <div key={card.id} className={`p-4 lg:p-8 rounded-xl cursor-box ${card.bg}`}

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
