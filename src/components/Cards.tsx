import React from 'react'
import { card } from '@/utils/cardData'
import Image from 'next/image'

const Cards = () => {
    return (
        <div className=' w-full bg-[#FDF3EA]'>
            <div className=' px-16 max-w-7xl mx-auto pb-16'>
                <h1 className='text-5xl text-center lg:text-6xl sm:text-4xl md:text-6xl  font-bold pt-16 pb-24'>
                    MailMagnet makes it a <span className=' text-titleColor font-medium  font-covered'>  cinch </span> to <br />
                    send personalized, profit- <br /> generating postcards.
                </h1>
                {card.map((card) => (
                    <div
                        key={card.id}
                        className={`flex flex-col lg:flex-row space-y-12 ${card.reverse ? 'lg:flex-row-reverse' : ''
                            } items-center gap-8`}
                    >
                        <div className=' lg:w-2/5'>
                            <h2 className='text-3xl lg:text-4xl sm:text-3xl md:text-4xl  font-bold' dangerouslySetInnerHTML={{ __html: card.title }} />
                            <p> {card.description} </p>
                            <div className=' border-[#D1C7BE] p-4 border-2 rounded-xl relative mt-5'>
                                <div className=' absolute left-3 -top-5'>
                                    <Image src='/images/icones/test_icone.png' alt={card.title}
                                        width={34}
                                        height={35}
                                        className='text-end bg-[#FDF3EA]'
                                    />
                                </div>
                                <p className='text-text  text-base'>{card.testimonial}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className=' text-[#A89B90] text-sm'> {card.author}</p>
                                    <Image src={card.logo} alt={card.title}
                                        width={40}
                                        height={30}
                                        className='text-end'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-3/5 mx-auto'>
                            <Image src={card.image} alt={card.title}
                                width={400}
                                height={400}
                                className=' mx-auto'
                            />
                        </div>
                    </div>
                ))}
                <button className="btn-primary-section ">
                    Try it Risk-free
                </button>
            </div>
        </div>
    )
}

export default Cards
