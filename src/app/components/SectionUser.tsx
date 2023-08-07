import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrInstagram, GrGithub } from 'react-icons/gr';
import { RiLinkedinFill } from 'react-icons/ri';


const SectionUser = () => {
  return (
    <div className="container flex items-center justify-between p-5 mx-auto " id='about'>
      <div className="container flex flex-col items-center justify-center gap-5 mt-20 text-left">
        <div className="flex flex-col items-center justify-center gap-5 mt-4 text-center md:mt-20 md:flex-row md:items-start md:text-left">
          <div className="container flex flex-col justify-center gap-5 p-5 text-left">
            <h4 className="text-2xl md:text-6xl">Olá, eu sou</h4>
            <h3 className="text-2xl font-bold md:text-6xl">Mr. Ruan Noleto</h3>
            <h4>Um desenvolvedor web / Mobile e designer de UI/UX..</h4>

            <div className="flex gap-4">
              <Link href={'/'} className="">
                <GrInstagram className="w-8 h-8 text-primary hover:text-secundary" />
              </Link>
              <Link href={'/'}>
                <RiLinkedinFill className="w-8 h-8 text-primary hover:text-secundary" />
              </Link>
              <Link href={'/'}>
                <GrGithub className="w-8 h-8 text-primary hover:text-secundary" />
              </Link>
            </div>
            <div className="flex gap-8 md:gap-6 md:ml-7">
              <button className=" flex items-center justify-around pt-2 pb-2 pl-5 pr-5 mt-5 md:w-[150px] font-semibold rounded-lg text-cente bg-primary hover:bg-secundary">
               <p className='text-xs md:text-sm'>Baixa CV</p>
                <Image
                  src={'/mario1.png'}
                  alt="pernagem do mario"
                  width={20}
                  height={10}
                  className='hidden md:block'
                />
              </button>
              <button className="flex items-center justify-around pt-2 pb-2 pl-3 pr-3 mt-5 md:w-[150px] font-semibold rounded-lg text-cente bg-primary hover:bg-secundary">
              <p className='text-sm'>Meu trabalho</p>
                <Image
                  src={'/mario2.png'}
                  alt="pernagem do mario"
                  width={35}
                  height={10}
                  className='hidden md:block'
                />
              </button>
            </div>
          </div>
          <Link href={'/'} className="absolute flex cursor-pointer md:pl-48 md:top-[48rem]" id="link-a">
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
