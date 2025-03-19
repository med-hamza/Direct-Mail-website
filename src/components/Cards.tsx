import React from 'react'
import { SecondLettrePullUp } from './animation/SecondLettrePullUp'
import Testimonials from './Testimonials'

const Cards = () => {
    return (
        <div className=' w-full bg-[#FDF3EA]'>
            <div className='mx-auto pb-16 px-2 lg:px-0'>
                <h1 className=" text-3xl text-center lg:text-6xl sm:text-4xl md:text-6xl font-bold pt-16 pb-24">
                    <SecondLettrePullUp
                        text="MailMagnet makes it a"
                        highlightedText="cinch"
                        highlightClassName="text-titleColor font-medium font-covered"
                    />
                    <SecondLettrePullUp
                        text="to send personalized, profit-"
                    />
                    <SecondLettrePullUp
                        text="generating postcards."
                    />
                </h1>

                <Testimonials />
                <div className=' text-center lg:text-center'>
                    <button className="btn-primary-section">
                        Try it Risk-free
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards
