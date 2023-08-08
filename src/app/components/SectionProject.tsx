'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import projects from '../../lib/projetcArray';
import Modal from '../../components/modal/modal';

import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

interface ModalInfo {
  id: number;
  name: string;
  image: string;
  description: string;
}

const ModalInformation: ModalInfo[] = [
  {
    id: 1,
    name: 'curso fullstack',
    image: '/devsamurai.svg',
    description: 'O curso "DevSamurai" é um programa de treinamento fullstack que se concentra em desenvolvimento de software. Ele visa fornecer uma ampla gama de habilidades necessárias para construir aplicativos web e mobile, desde o desenvolvimento do frontend até o backend. O curso geralmente cobre tecnologias e linguagens de programação populares como HTML, CSS, JavaScript, React (para frontend), Node.js (para backend), bancos de dados, versionamento de código e implantação.',
  },
  {
    id: 2,
    name: 'curso fullstack',
    image: '/sujeitoprogramador.svg',
    description: 'O curso "Sujeito Programador" também é uma iniciativa de treinamento fullstack, projetada para equipar os alunos com conhecimentos e habilidades abrangentes no campo do desenvolvimento de software. O nome "Sujeito Programador" tem um toque informal, sugerindo que qualquer pessoa pode se tornar um programador bem-sucedido, independentemente de seu histórico ou experiência anterior. O curso abrange linguagens de programação, frameworks, desenvolvimento de aplicativos web e mobile, trabalho com bancos de dados e muito mais.',
  },
];

const SectionProject = () => {
  const [selectedModal, setSelectedModal] = useState<ModalInfo | null>(null);

  const openModal = (modal: ModalInfo) => {
    setSelectedModal(modal);
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  return (
    <div className="container flex justify-center p-5 mx-auto" id="project">
      <div className="container flex flex-col justify-center gap-5 mt-20 mb-4 text-left">
        <div className="flex flex-col justify-center gap-5 mt-4 text-center md:mt-36 md:flex-row md:text-left">
          <div className="container relative flex flex-col justify-center text-center ">
            <div className="flex items-center justify-center gap-5 mb-6 text-center">
              <Image
                src={'/mariovo.svg'}
                alt="mario"
                width={120}
                height={70.44}
              />
              <h3 className="mb-2 text-2xl font-bold md:text-4xl">Projeto</h3>
            </div>

            <Swiper
              effect={'coverflow'}
              slidesPerView={'auto'}
              centeredSlides={true}
              grabCursor={false}
              loop={true}
              spaceBetween={20}
              autoplay={{
                delay: 9500,
                disableOnInteraction: false,
              }}
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
                  <div className="flex items-center justify-center gap-5 mt-4 text-center md:text-left">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 text-white rounded bg-primary hover:bg-secundary"
                    >
                      Ver Projeto
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 text-white rounded bg-primary hover:bg-secundary"
                    >
                      Github
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 mt-4 text-center md:mt-36 md:text-left">
          <Image
            src={'/fantasm.svg'}
            alt="mario"
            width={50}
            height={70.44}
            className="relative ml-[50%] md:ml-[30%]  md:mb-0"
          />
          <h1 className="text-xl uppercase md:text-3xl">qualificação e especialização</h1>

          <div className="flex items-center justify-center gap-5 mt-4 text-center" id="buttonModal" onMouseDown={closeModal}>
          {ModalInformation.map((modal) => (
                  <button
                    key={modal.id}
                    className="px-4 py-1 rounded bg-primary hover:bg-secundary"
                    onClick={() => openModal(modal)}
                  >
                    <Image
                      src={modal.image}
                      alt={modal.name}
                      width={140}
                      height={70.44}
                      className=""
                    />
                  </button>
                ))}
                {selectedModal && (
                  <Modal
                    id={selectedModal.id}
                    name={selectedModal.name}
                    image={selectedModal.image}
                    description={selectedModal.description}
                    closeModal={closeModal}
                  />
                )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SectionProject;
