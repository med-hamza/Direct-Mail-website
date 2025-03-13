import React from 'react'
import { brand } from '@/utils/brandData'
import Image from 'next/image'

const Brands = () => {
    return (
        <div className=' text-center mt-16 mb-16 max-w-7xl mx-auto'>
            <h1 className='text-5xl lg:text-6xl sm:text-4xl md:text-6xl  font-bold'>
                Trusted by thousands  <br />
                of top DTC  <span className=' text-titleColor font-medium  font-covered'>  brands. </span>
            </h1>
            <div className=' px-5 lg:px-16 max-w-7xl mx-auto  mt-12'>
                <div className=' grid  grid-cols-2 lg:grid-cols-4 gap-3 mx-auto'>
                    {brand.map((brand) => (
                        <div key={brand.id} className=' text-center mx-auto mb-4'>
                            <Image src={brand.picture} alt={brand.name} width={280} height={190} />
                            <div className='relative  mt-5'>
                                <Image
                                    src={brand.title}
                                    alt={brand.name}
                                    width={brand.width}
                                    height={brand.height}
                                    className='mx-auto'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brands
