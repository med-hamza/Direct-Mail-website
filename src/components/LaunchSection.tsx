"use client"

import React, { useState } from 'react'
import LaunchTab from './LaunchTab'
import { LettersPullUp } from './animation/LettersPullUp';

const LaunchSection = () => {
    const [activeTab, setActiveTab] = useState<string>('01');
    return (
        <div className='mx-auto pt-16 pb-4 lg:pb-24  text-center bg-[#E3F8F8]'>
            <h1 className='pb-4 lg:pb-24'>
                <LettersPullUp
                    text="Fast launch. Fast results."
                />
                <LettersPullUp
                    text={"Here's how."}
                    className="text-titleColor font-medium font-covered"
                />
            </h1>

            <LaunchTab activeTab={activeTab} setActiveTab={setActiveTab} />


        </div>
    )
}

export default LaunchSection
