import React from 'react';
import Image from 'next/image';
import ImageCode from '../../lib/imageCode'
import Link from 'next/link'

const SectionSkillsAndConection = () => {
  return (
    <div className='flex flex-col items-center justify-center'  style={{
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(/code.svg)',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
    }}>
  
        <div className="flex items-center justify-center gap-5 mb-6 text-center"> 
              <Image  src={'/guns.svg'}
              alt="bala"
              width={120}
              height={70.44} />
            <h3 className="mb-2 text-2xl font-bold md:text-4xl">Hard Skills</h3>
          </div>
          
          <div className='grid grid-cols-1 gap-3 mx-2 mt-12em sm:grid-cols-3 lg:grid-cols-3'>
            {ImageCode.map((imgcode) => (
              <button key={imgcode.id} className="items-center justify-center px-4 py-2 rounded bg-secundaryDark hover:bg-gradient-linear drop-shadow-lg">
              <Image  src={imgcode.image}
                alt="html"
                width={250}
                height={70.44} />
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-5 mt-4 text-center md:mt-36 md:text-center">
              <Image  src={'/dk.svg'}
              alt="donk kong"
              width={100}
              height={70.44} 
              className="relative ml-[50%] md:ml-[30%] mt-1 md:mb-0"
              />
            <h1 className="text-2xl font-bold uppercase md:text-4xl text-primary">vamos nos conectar</h1>
            <h1 className="w-11/12 text-sm md:w-8/12 md:text-sm">Aqui estão minhas redes sócias vamos conversar diretamente através delas e fazer networking</h1>
              
            <div className="grid grid-cols-1 gap-3 mb-20 md:gap-5 sm:grid-cols-2 md:grid-cols-3">
                <button className="items-center justify-center w-full px-4 py-2 rounded md:w-auto bg-secundaryDark hover:bg-gradient-linear">
                  <Image
                    src="/linkdin.svg"
                    alt="donk kong"
                    width={260}
                    height={70.44}
                  />
                </button>

                <button  className="items-center justify-center w-full px-4 py-2 rounded md:w-auto bg-secundaryDark hover:bg-gradient-linear">
                  <Image
                    src="/instagram.svg"
                    alt="donk kong"
                    width={260}
                    height={70.44}
                  />
                </button>

                <button className="items-center justify-center w-full px-4 py-2 rounded md:w-auto bg-secundaryDark hover:bg-gradient-linear">
                  <Image
                    src="/githubmario.svg"
                    alt="donk kong"
                    width={260}
                    height={70.44}
                  />
                </button>
          </div>

          </div>
    </div>
    
  );
};

export default SectionSkillsAndConection;
