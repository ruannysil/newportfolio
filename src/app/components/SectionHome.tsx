import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const SectionHome = () => {
  
  return (
    <div className='flex items-center max-w-screen-lg p-5 mx-auto md:max-w-screen-lg ' id="home">
      <div className='flex flex-col items-center justify-center gap-5 text-center mt-36 md:flex'>
        <h4 className='text-xl'>Olá, seja bem vindo(a)</h4>
        <h3 className='text-lg md:text-sm'>PRECISANDO DE UM DEVELOPER <span className='text-lg font-bold md:text-sm'>FRONTEND / FULLSTACK</span></h3>
        <h1 className='text-xl font-extrabold md:text-4xl'>FRONTEND DEVELOPER </h1>
        <h4 className='text-sm sm:w-8/12'>Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e que eu possa te ajudar de alguma forma.</h4>
        <a href="https://wa.me/5598987312479?text=Ol%C3%A1+Ruan%2C+voc%C3%AA+est%C3%A1+dispon%C3%ADvel+agora+para+uma+conversa%3F" className='flex items-center pt-2 pb-2 pl-3 pr-3 mt-20 font-semibold text-cente rounded-xl bg-primary hover:bg-secundary' target='_blank'>
          <Image src={'/persona.svg'} alt='pernagem do mario' width={30} height={10} /> <p className='text-sm'>Quero marca uma conversa</p> <Image src={'/persona.svg'} alt='pernagem do mario' width={30} height={10} />
        </a>
      </div>
    </div>
  )
}

export default SectionHome
