import { mailCard } from '@/utils/mailCardData';
import Image from 'next/image';
import React from 'react'

interface mailtab {
    activeTab: number,
    setActiveTab: (id: number) => void;
}

const CardTab = ({ activeTab, setActiveTab }: mailtab) => {
    return (
        <div className=" w-auto  gap-10 items-center">
            {mailCard.map((card) => (
                activeTab === card.id && (
                    <div key={card.id}>

                        <div>
                            <h1 className='text-5xl lg:text-7xl text-primary mb-10 sm:text-4xl md:text-6xl  font-bold' dangerouslySetInnerHTML={{ __html: card.title }} />
                            <p className=' text-text text-xl font-medium  mb-10'> {card.description} </p>
                            <div className=' flex items-center justify-between'>
                                {card.number.map((item, index) => (
                                    <div key={index}>
                                        <p className=' leading-5 text-xl lg:text-xl font-bold ' dangerouslySetInnerHTML={{ __html: item.num }} />
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                )
            ))}
            <div>
                <button className="btn-primary-white mt-8">
                    Read Case study
                </button>
            </div>
            <div className=' flex items-center justify-start mt-20 gap-4 lg:gap-10'>
                {mailCard.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => setActiveTab(card.id)}
                        className={`cursor-pointer  transition-colors duration-300  ${activeTab === card.id
                            ? 'border-b-2 border-[#009387]'
                            : ''
                            }`}
                    >
                        <h2 className=' font-bold  uppercase'> {card.name} </h2>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default CardTab
