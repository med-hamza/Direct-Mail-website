"use client"

import React, { useState } from 'react'
import LaunchTab from './LaunchTab'

const LaunchSection = () => {
    const [activeTab, setActiveTab] = useState<string>('01');
    return (
        <div className='mx-auto pt-16 pb-24  text-center bg-[#E3F8F8]'>
            <h1 className='text-5xl lg:text-6xl sm:text-4xl md:text-6xl pb-12 font-bold'>
                Fast launch. Fast results.<br />
                <span className=' text-titleColor font-medium  font-covered'>  Here's how. </span>
            </h1>

            <LaunchTab activeTab={activeTab} setActiveTab={setActiveTab} />


        </div>
    )
}

export default LaunchSection
