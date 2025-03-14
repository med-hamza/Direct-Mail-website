"use client"
import React, { useState } from 'react'
import CardTab from './CardTab';
import { mailCard } from '@/utils/mailCardData';
import Image from 'next/image';

const MailCards = () => {
    const [activeTab, setActiveTab] = useState<number>(1);

    return (
        <div className='w-full pt-16 pb-16 px-3 place-content-start place-items-start  lg:px-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 bg-[#EEECFF] '>
            <div className='lg:col-span-3 md:grid-cols-1  mb-10 lg:mb-0  px-4 lg:pl-20'>
                {mailCard.map((card) => (
                    <div key={card.id}>
                        {activeTab === card.id && (
                            <div>
                                <Image src={card.image}
                                    alt={card.description}
                                    width={500}
                                    height={400}
                                    className=''
                                />
                            </div>
                        )}
                    </div>
                ))}

            </div>
            <div className=' lg:col-span-3'>
                <CardTab activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    )
}

export default MailCards
