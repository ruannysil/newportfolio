import Image from 'next/image'
import React from 'react'

const SectionHome = () => {
  return (
    <div className='container flex items-center justify-between p-5 mx-auto'>
      <div className='container flex flex-col items-center justify-center gap-5 text-center mt-36'>
        <h4 className='text-xl'>Olá, seja bem vindo(a)</h4>
        <h3 className='text-xl'>PRECISANDO DE UM DEVELOPER <span className='text-xl font-bold'>FRONTEND / FULLSTACK</span></h3>
        <h1 className='text-5xl font-extrabold'>FRONTEND DEVELOPER </h1>
        <h4 className='w-3/6 text-xl'>Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e que eu possa te ajudar de alguma forma.</h4>
        <button className='flex items-center justify-between pt-2 pb-2 pl-3 pr-3 mt-32 font-semibold text-cente rounded-xl bg-primary'>
          <Image src={'/persona.svg'} alt='pernagem do mario' width={30} height={10} /> Quero marca uma conversa <Image src={'/persona.svg'} alt='pernagem do mario' width={30} height={10} /></button>
      </div>
    </div>
  )
}

export default SectionHome
