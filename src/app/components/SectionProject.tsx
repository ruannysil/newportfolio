'use client';

import React from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../../lib/projetcArray';

import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

const SectionProject = () => {

  return (
    <div
      className="container flex justify-center p-5 mx-auto"
   
    >
      <div className="container flex flex-col justify-center gap-5 mt-20 text-left">
        <div className="flex flex-col justify-center gap-5 mt-4 text-center md:mt-36 md:flex-row md:text-left">
          <div className="container flex flex-col justify-center text-center">
            <h3 className="mb-2 text-2xl font-bold md:text-5xl">Projeto</h3>

            <Swiper
              effect={'coverflow'}
              slidesPerView={'auto'}
              centeredSlides={true}
              grabCursor={false}
              loop={true}
              // spaceBetween={20}
              // autoplay={{
              //   delay: 4500,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 2,
                depth: 500,
                modifier: 0,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>

                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={160}
                      className="swiper-image"
                    />
                  <div className="ite">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-1 mr-1 text-white rounded bg-primary hover:bg-secundary">
                        Ver Projeto
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer"  className="px-4 py-1 text-white rounded bg-primary hover:bg-secundary" >
                        Github
                      </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProject;


