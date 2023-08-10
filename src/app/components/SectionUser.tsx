'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrInstagram, GrGithub } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const SectionUser = () => {
  return (
    <div className="container flex items-center justify-between p-5 mx-auto " id='about'>
      <div className="container flex flex-col items-center justify-center gap-5 mt-20 text-left">
        <div className="flex flex-col items-center justify-center gap-5 mt-4 text-center md:mt-20 md:flex-row md:items-start md:text-left">
          <div className="container flex flex-col justify-center gap-5 text-left">
            <h4 className="text-2xl md:text-6xl">Olá, eu sou</h4>
            <h3 className="text-2xl font-bold md:text-6xl">Mr. Ruan Noleto</h3>
            <h4>Um desenvolvedor web / Mobile e designer de UI/UX..</h4>

            <div className="flex gap-4">
              <Link href={'https://www.instagram.com/ruan_noleto.dev/'} className="">
                <GrInstagram className="w-8 h-8 text-primary hover:text-secundary" />
              </Link>
              <Link href={'https://www.linkedin.com/in/ruan-noleto-5587541aa/'}>
                <RiLinkedinFill className="w-8 h-8 text-primary hover:text-secundary" />
              </Link>
              <Link href={'https://github.com/ruannysil'}>
                <GrGithub className="w-8 h-8 text-primary hover:text-secundary" />
              </Link>
            </div>
            <div className="flex gap-8 md:gap-6 md:ml-7">
              <a href="/Ruan Noleto.pdf" className=" flex items-center justify-around pt-2 pb-2 pl-5 pr-5 mt-5 md:w-[150px] font-semibold rounded-lg text-cente bg-primary hover:bg-secundary" target='_blank'>
               <p className='text-xs md:text-sm' >Baixa CV</p>
                <Image
                  src={'/mario1.png'}
                  alt="pernagem do mario"
                  width={20}
                  height={10}
                  className='hidden md:block'
                />
              </a>
              <ScrollLink  to="methodology"
                smooth={true}
                duration={500}
                spy={true}
                offset={-70} 
                className="flex items-center justify-around pt-2 pb-2 pl-3 pr-3 mt-5 md:w-[150px] font-semibold rounded-lg text-cente bg-primary hover:bg-secundary cursor-pointer">
                  <p className='text-sm'>Meu trabalho</p>
                    <Image
                      src={'/mario2.png'}
                      alt="pernagem do mario"
                      width={35}
                      height={10}
                      className='hidden md:block'
                    />
              </ScrollLink>
            </div>
          </div>
          <Link href='https://wa.me/5598987312479?text=Ol%C3%A1+Ruan%2C+fiquei+interessado+em+seus+servi%C3%A7os+ap%C3%B3s+conferir+o+seu+portf%C3%B3lio.+Gostaria+de+saber+quando+voc%C3%AA+est%C3%A1+dispon%C3%ADvel+para+uma+reuni%C3%A3o%3F' className="absolute flex cursor-pointer md:pl-48 md:top-[48rem]" id="link-a" target='_blank'>
            <Image
              src={'/conversa.png'}
              alt="botao whatsapp"
              width={250}
              height={70.44}
              className='md:w-[230px] md:h-[100px]'
            />
          </Link>
          <Image
            src={'/pernahome.svg'}
            alt="ruan"
            width={360}
            height={260}
            className="mt-28 md:mt-6 md:w-2/4"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionUser;
