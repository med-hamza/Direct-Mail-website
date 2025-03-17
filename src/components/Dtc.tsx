"use client";
import React, { FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { listX } from '@/utils/twitData';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { LettersPullUp } from './animation/LettersPullUp';
import { SecondLettrePullUp } from './animation/SecondLettrePullUp';


const Dtc: FC = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })]);
    const duplicatedSlides = [...listX, ...listX, ...listX];
    return (
        <div className="w-full pb-24">
            <h1 className=" text-3xl text-center lg:text-6xl sm:text-4xl md:text-6xl font-bold pt-16 pb-24">
                <SecondLettrePullUp
                    text="MailMagnet is for"
                    highlightedText="DTC"
                    highlightClassName="text-titleColor font-medium font-covered"
                />
            </h1>

            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {duplicatedSlides.map((list, index) => (
                        <div key={index} className="embla__slide flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_26%] min-w-0">
                            <div className="w-full p-6 bg-white rounded-lg shadow-md border border-primary">
                                <div className=' flex items-start justify-between'>
                                    <div className='flex items-center gap-5 justify-start mb-4'>
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900">{list.name}</h2>
                                            <p className="text-sm  text-text">{list.pseudo}</p>
                                        </div>
                                        <div>
                                            <Image
                                                src={list.logo}
                                                alt={list.name}
                                                width={55}
                                                height={55}
                                            />
                                        </div>

                                    </div>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            fill="#000000"
                                        >
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.957 6.817H2.18l7.73-8.835L1.5 2.25h7.914l4.714 6.231 5.116-6.231zM15.284 20.25h2.084L6.442 3.75H4.298l10.986 16.5z" />
                                        </svg>
                                    </div>

                                </div>
                                <p className=" text-text">
                                    {list.description || "This is a placeholder testimonial message."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className=' mx-auto text-center mt-24'>
                <button className="btn-primary-section ">
                    Try it Risk-free
                </button>
            </div>

        </div>
    );
};

export default Dtc;