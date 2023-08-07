'use client'

import React from 'react';
import Image from 'next/image';
import { BiLogoWhatsapp } from 'react-icons/bi';
import Link from 'next/link';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const SectionMethodology = () => {
  return (
    <div
      className="container flex flex-col items-center justify-center gap-5 p-5 mx-auto text-left"
      id="expertises"
    >
      <div className="flex flex-col items-start justify-between p-5 md:flex-row">
        <div className="flex flex-col">
          <h4 className="mb-5 text-sm font-bold md:text-xl">
            ESPECIALISTAS E RESPONSÁVEL PELA CRIAÇÃO DE PROJETOS
          </h4>
          <p className="text-sm max-w-[32rem] items-start">
            Como desenvolvedor especializado em Next.js, React.js e Node.js, sou
            altamente organizado, definindo prioridades e planejando entregas
            dentro do prazo. Minha habilidade de equilibrar múltiplas tarefas me
            permite enfrentar desafios complexos com eficiência. Além disso,
            estou sempre em busca de aprimorar minhas habilidades técnicas para
            garantir o desenvolvimento de soluções modernas e inovadoras. Minha
            expertise abrange o desenvolvimento técnico e visual de páginas da
            web, além da manutenção de sites. Utilizando JavaScript como
            linguagem principal, meu objetivo é assegurar o correto
            funcionamento dos sites e proporcionar uma experiência eficiente
            para todos os usuários.
          </p>
          <button className="w-[15rem] bg-primary mt-5 rounded-full p-1.5 flex items-center justify-center">
            <BiLogoWhatsapp className="w-5 h-5" />
            <span className="ml-1 text-xs">Fale agora com um especialista</span>
          </button>
        </div>
        <div className="w-full md:w-[230px] ml-4 md:ml-0">
          <Image
            src={'/desktop-new.svg'}
            alt="ruan"
            width={200}
            height={260}
            className="mt-12"
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-between md:max-w-[900px] md:flex-row">
        <div className="flex flex-col items-start justify-between gap-5 p-9 md:flex-row">
          <div className="flex flex-col">
            <div className="w-full flex md:w-[230px] mb-1 place-items-end">
              <h4 className="mb-1 text-sm md:text-base">Apresentação</h4>
              <Image
                src={'/pacmario.png'}
                alt="ruan"
                width={200}
                height={260}
              />
            </div>
            <h4 className="mb-5 font-bold text-sx ">METODOLOGIA DEVELOPER</h4>
            <hr className="h-1 border-1 border-[#FF4900] bg-primary rounded-lg w-20 mb-6" />
            <p className="text-sm max-w-[32rem]">
              Desenvolvimento especializado em criação de sites, páginas únicas
              e e-commerce, visando aprimorar a experiência do usuário e
              otimização do site.
            </p>
            <div className="flex items-center justify-center">
              <ScrollLink
                to="project"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="flex items-center mt-5 cursor-pointer hover:bg-primary"
              >
                <div className="w-8 h-8 mb-5 border-t-2 border-l-2 rotate-140 border-primary"></div>
                <span className="uppercase md:px-4">venha conferir</span>
                <div className="w-8 h-8 mt-5 rotate-90 border-t-2 border-r-2 border-primary"></div>
              </ScrollLink>
            </div>

          </div>

          <div
            className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-1 lg:grid-cols-2"
            id="meu"
          >
            <div className="flex flex-col space-y-4">
              <Image
                src={'/mariokart.svg'}
                alt="ruan"
                width={60}
                height={160}
              />
              <h4 className="mb-5 text-sm font-bold md:text-sm">
                Desenvolvimento Responsivo
              </h4>
              <p className="text-sm max-w-[32rem]">
                Desenvolvimento de aplicação web responsiva e aplicativos 100%
                mobile, garantindo acessibilidade e praticidade em todos os
                dispositivos.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Image
                src={'/mariomecanico.svg'}
                alt="ruan"
                width={60}
                height={160}
              />
              <h4 className="mb-5 text-sm font-bold md:text-sm">
                Desenvolvimento Web
              </h4>
              <p className="text-sm max-w-[32rem]">
                Desenvolvimento especializado em criação de sites, páginas
                únicas e e-commerce, visando aprimorar a experiência do usuário
                e otimização do site.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Image
                src={'/mariovoador.svg'}
                alt="ruan"
                width={60}
                height={160}
              />
              <h4 className="mb-5 text-sm font-bold md:text-sm">
                Experiência do usuário
              </h4>
              <p className="text-sm max-w-[32rem]">
                Aplicações focadas em melhorar a experiência do usuário ao
                abordar elementos e fatores específicos de um serviço, produto
                ou sistema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMethodology;
