import { launch } from '@/utils/launchData'
import React from 'react'

interface LaunchTabProps {
    activeTab: string;
    setActiveTab: (id: string) => void;
}

const LaunchTab = ({ activeTab, setActiveTab }: LaunchTabProps) => {

    const activeTabData = launch.find((tab) => tab.id === activeTab)

    return (
        <div className=' px-16 max-w-7xl mx-auto   mt-12'>
            <div className=' text-start'>
                {launch.map((tab) => (
                    <div
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`step  px-4 py-2 text-sm font-medium ${activeTab === tab.id
                            ? 'active'
                            : ''
                            }`}
                    >
                        <div className='step-header flex items-center justify-start gap-6'>
                            <p className={` step-number bg-[#E3F8F8] font-covered text-[#009387] text-3xl ${activeTab === tab.id
                                ? ' font-bold '
                                : 'font-light'

                                } `}> {tab.id} </p>
                            <p className={`step-title ${activeTab === tab.id
                                ? '  text-[#2E2F35] font-bold text-2xl '
                                : ' text-text text-2xl'

                                }`}>{tab.name}</p>
                        </div>
                        {activeTab === tab.id && (
                            <div className='mt-1 px-10 text-start w-80'>
                                <div>
                                    <p className='mt-2 text-gray-600'>{tab.description}</p>
                                </div>
                            </div>
                        )}
                    </div>



                ))}
            </div>


        </div>
    )
}

export default LaunchTab
