'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5'

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isGlaseEffect, setIsGlaseEffect] = useState(false);

  const handleLinkClick = () => {
   setIsOpenMenu(!isOpenMenu) 
  }

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    const threshold = 100;

    setIsGlaseEffect(currentScrollPos > threshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  return (
    <div className="flex items-center justify-between h-[120px]">
      
    <div className={`container flex items-center  p-5  max-w-full ${isGlaseEffect ? 'bg-opacity-70 backdrop-blur-md' : 'bg-opacity-0 backdrop-blur-0'} fixed`}>
      <div className="container items-center justify-center hidden p-5 py-0 mx-auto gap-[10%] md:flex">
        
      <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          className="p-2 uppercase bg-transparent rounded cursor-pointer hover:bg-primary"
          onClick={handleLinkClick}
        >
          home
        </ScrollLink>

        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          className="p-2 uppercase bg-transparent rounded cursor-pointer hover:bg-primary"
          onClick={handleLinkClick}
        >
          quem sou
        </ScrollLink>

        <Link href={'/'}>

          <div className="w-[10]">
            <Image src={'/Logo.svg'} alt="logo" width={150} height={150} />
          </div>

        </Link>

        <ScrollLink
          to="expertises"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          className="p-2 uppercase bg-transparent rounded cursor-pointer hover:bg-primary"
          onClick={handleLinkClick}
        >
         expertises
        </ScrollLink>
        
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          className="p-2 uppercase bg-transparent rounded cursor-pointer hover:bg-primary"
          onClick={handleLinkClick}
        >
          contato
        </ScrollLink>

      </div>
      
      <div className="flex items-center justify-between w-full md:hidden">

        <Link href={'/'}>
          <div className="w-[10]">
            <Image src={'/Logo.svg'} alt="logo" width={150} height={150} />
          </div>
        </Link>
        
        <button onClick={() => setIsOpenMenu(!isOpenMenu)}>{isOpenMenu ? 
          <IoClose className="w-8 h-8" /> :
          <GiHamburgerMenu className="w-8 h-8" />
        }</button>
        
      </div>
      
      {isOpenMenu && (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center h-[100vh] gap-10 pl-5 pr-5 bg-black pt-28 md:hidden' style={{ zIndex: 999  }}>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="p-2 uppercase bg-transparent rounded hover:bg-primary"
            onClick={handleLinkClick}
          >
            home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="p-2 uppercase bg-transparent rounded hover:bg-primary"
            onClick={handleLinkClick}
          >
            quem sou
          </ScrollLink>
          <ScrollLink
            to="expertises"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="p-2 uppercase bg-transparent rounded hover:bg-primary"
            onClick={handleLinkClick}
          >
            EXPERTISES
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="p-2 uppercase bg-transparent rounded hover:bg-primary"
            onClick={handleLinkClick}
          >
            contato
          </ScrollLink>
          <button className="absolute top-0 right-0 mt-8 mr-8"
            onClick={() => setIsOpenMenu(false)}>
            <IoClose className="w-8 h-8" />
          </button>
        </div>
      )}

    </div>
    </div>
  );
};

export default Header;
