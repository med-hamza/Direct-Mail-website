import React from 'react'
import { brand } from '@/utils/brandData'
import Image from 'next/image'
import { SecondLettrePullUp } from './animation/SecondLettrePullUp'
import Link from 'next/link'

const Brands = () => {
    return (
        <div className=' text-center mt-16 mb-16 max-w-7xl mx-auto'>
            <h1 className='text-2xl lg:text-6xl sm:text-4xl md:text-6xl  font-bold'>
                <SecondLettrePullUp
                    text="Trusted by thousands"
                />
                <SecondLettrePullUp
                    text="of top DTC"
                    highlightedText="brands."
                    highlightClassName="text-titleColor font-medium font-covered"
                />
            </h1>

            <div className='  mx-auto  mt-12'>
                <div className=' grid  grid-cols-2 lg:grid-cols-4 gap-3 mx-auto'>
                    {brand.map((brand) => (
                        <div key={brand.id} className="col-12 col-lg-4">
                            <div className=' card box-shadow mx-auto my-5 w-72'>
                                <Image src={brand.picture} alt={brand.name} width={600} height={570}
                                    className="card-img-top h-[360px]"
                                />
                                <div className="card-body">
                                    <Link href={brand.link} className='  hover:underline'>
                                        <h5 className=" font-covered text-2xl font-medium"> {brand.name} </h5>
                                    </Link>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,90.7C672,64,768,64,864,85.3C960,107,1056,149,1152,186.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

                                <i className="fas fa-disease"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brands
