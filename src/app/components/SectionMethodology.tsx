import React from 'react';
import Image from 'next/image';
import { BiLogoWhatsapp } from 'react-icons/bi';

const SectionMethodology = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-5 p-5 mx-auto text-left">
      <div className='flex flex-col items-start justify-between p-5 md:flex-row'>
        <div className='flex flex-col w-full'>
          <h4 className="flex mb-5 text-sm font-bold md:text-xl">
            ESPECIALISTAS E RESPONSÁVEL PELA CRIAÇÃO DE PROJETOS
          </h4>
          <p className="text-sm md:text-sm md:w-[32rem] items-start">
            Como desenvolvedor especializado em Next.js, React.js e Node.js,
            sou altamente organizado, definindo prioridades e planejando
            entregas dentro do prazo. Minha habilidade de equilibrar
            múltiplas tarefas me permite enfrentar desafios complexos com
            eficiência. Além disso, estou sempre em busca de aprimorar
            minhas habilidades técnicas para garantir o desenvolvimento de
            soluções modernas e inovadoras. Minha expertise abrange o
            desenvolvimento técnico e visual de páginas da web, além da
            manutenção de sites. Utilizando JavaScript como linguagem
            principal, meu objetivo é assegurar o correto funcionamento dos
            sites e proporcionar uma experiência eficiente para todos os
            usuários.
          </p>
          <button className="w-[15rem] bg-primary mt-5 rounded-full p-1.5 flex items-center justify-center">
            <BiLogoWhatsapp className="w-5 h-5" />
            <span className="ml-1 text-xs">Fale agora com um especialista</span>
          </button>
        </div>
        <div className="w-full md:w-[230px] md:ml-12">
          <Image
            src={'/desktop-new.svg'}
            alt="ruan"
            width={200}
            height={260}
            className='mt-12'
          />
        </div>
      </div>
    </div>
  );
};

export default SectionMethodology;
