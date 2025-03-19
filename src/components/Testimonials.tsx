"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../Testimonials.css";
import { card } from "@/utils/cardData";
import Image from "next/image";



const Testimonials: React.FC = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >


        {card.map((card) => (
          <div
            key={card.id}

          >
            <SwiperSlide>

              <div className="group relative bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#B2E5D9] to-[#5D8AA8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-4 border-transparent"></div>
                <div className="relative z-10">
                  <div className="mb-10">
                    <h2 className='text-3xl lg:text-4xl sm:text-3xl md:text-4xl  font-bold mb-4' dangerouslySetInnerHTML={{ __html: card.title }} />
                    <p> {card.description} </p>
                  </div>
                  <div className="text-[#5D8AA8] text-5xl leading-none mb-4 font-serif text-center">“</div>
                  <p className='text-text  text-base'>{card.testimonial}</p>
                  <div className="flex items-center gap-4 mt-6">
                    <Image src={card.logo} alt={card.title}
                      width={40}
                      height={30}
                      className='text-end'
                    />
                    <div>
                      <p className=' text-[#A89B90] text-sm'> {card.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>

        ))}

      </Swiper>
    </>
  );
};

export default Testimonials;
