import { blog } from '@/utils/blogData'
import Image from 'next/image'
import React from 'react'
import { LettersPullUp } from './animation/LettersPullUp'
import { SecondLettrePullUp } from './animation/SecondLettrePullUp'

const Blog = () => {
    return (
        <div className=' px-5 lg:px-16 max-w-7xl mx-auto pt-24 pb-24'>
            <h1 className='text-5xl lg:text-6xl sm:text-4xl md:text-6xl  text-center font-bold lg:block pb-24'>
                <LettersPullUp
                    text="Latest trends &"
                />
                <SecondLettrePullUp
                    text="insights"
                    highlightedText="brands"
                    highlightClassName="text-titleColor font-medium font-covered"
                />
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {blog.map((item) => (
                    <div key={item.id} className=" rounded-lg  overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-xl"
                            width={400}
                            height={270}
                        />
                        <div className=" p-2">
                            <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog
