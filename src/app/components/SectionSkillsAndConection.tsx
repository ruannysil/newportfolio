import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import IconImg from '../../lib/imageCode';

const SectionSkillsAndConection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: '100%',
        height: '100%',
        backgroundImage:
          'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(/code.svg)',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex items-center justify-center gap-5 mb-6 text-center">
        <Image src={'/guns.svg'} alt="bala" width={120} height={70.44} />
        <h3 className="mb-2 text-2xl font-bold md:text-4xl">Hard Skills</h3>
      </div>

      <div
        className="grid grid-cols-2 gap-3 p-5 mx-2 mt-12em md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4"
        id="imgcode"
      >
        {IconImg.map((imgcode) => (
          <button
            key={imgcode.id}
            className="flex items-center justify-between px-4 py-2 rounded bg-secundaryDark hover:bg-gradient-linear drop-shadow-lg"
          >
            {React.createElement(imgcode.icon, { size: 30 })}
            <h2 className="text-sm">{imgcode.name}</h2>
            <FaArrowRight size={16} />
          </button>
        ))}
      </div>

      <div
        className="flex flex-col items-center justify-center gap-5 p-5 mt-4 text-center md:mt-36 md:text-center"
        id="networking"
      >
        <Image
          src={'/dk.svg'}
          alt="donk kong"
          width={100}
          height={70.44}
          className="relative ml-[50%] md:ml-[30%] mt-1 md:mb-0"
        />
        <h1 className="text-2xl font-bold uppercase md:text-4xl text-primary">
          vamos nos conectar
        </h1>
        <h1 className="w-11/12 text-sm md:w-8/12 md:text-sm">
          Aqui estão minhas redes sócias vamos conversar diretamente através
          delas e fazer networking
        </h1>

        <div
          className="grid grid-cols-1 gap-2 mb-20 md:gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
          id="imgLink"
        >
          <a
            href="https://www.linkedin.com/in/ruan-noleto-5587541aa/"
            target="_blank"
          >
            <button className="flex items-center justify-between w-full px-4 py-2 rounded bg-secundaryDark hover:bg-gradient-linear drop-shadow-lg">
              <Image
                src="/linkdin.svg"
                alt="linkdin"
                width={170}
                height={70.44}
              />
            </button>
          </a>

          <a href="https://www.instagram.com/ruan_noleto.dev/" target="_blank">
            <button className="flex items-center justify-between w-full px-4 py-2 rounded bg-secundaryDark hover:bg-gradient-linear drop-shadow-lg">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={170}
                height={70.44}
              />
            </button>
          </a>

          <a href="https://github.com/ruannysil" target="_blank">
            <button className="flex items-center justify-between w-full px-4 py-2 rounded bg-secundaryDark hover:bg-gradient-linear drop-shadow-lg">
              <Image
                src="/githubmario.svg"
                alt="github"
                width={170}
                height={70.44}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionSkillsAndConection;
