'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5'

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  console.log(isOpenMenu ? "menu open":  "menu close" )


  const handleLinkClick = () => {
   setIsOpenMenu(!isOpenMenu) 
  }
  
  return (
    <div className="container flex items-center justify-between p-5  h-[133px] mx-auto max-w-screen-lg md:max-w-screen-lg">
      <div className="container items-center justify-around hidden p-5 py-0 mx-auto md:flex">
        
        <Link
          href={'#home'}
          scroll={true}
          className="p-2 uppercase bg-transparent rounded hover:bg-primary"
        >
          home
        </Link>

        <Link
          href={'#about'}
          className="p-2 uppercase bg-transparent rounded hover:bg-primary"
        >
          quem sou
        </Link>

        <Link href={'/'}>

          <div className="w-[10]">
            <Image src={'/Logo.svg'} alt="logo" width={150} height={150} />
          </div>

        </Link>

        <Link
          href={'#expertises'}
          className="p-2 uppercase bg-transparent rounded hover:bg-primary"
        >
          EXPERTISES
        </Link>
        
        <Link
          href={'/'}
          className="p-2 uppercase bg-transparent rounded hover:bg-primary"
        >
          contato
        </Link>

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
        <div className='absolute right-0 flex flex-col gap-9 bg-bk md:hidden top-[6.6rem] items-center p-5 rounded-md w-full h-[300vh] z-50'>
          <Link href={'#home'} scroll={true} onClick={handleLinkClick} className="p-2 uppercase bg-transparent rounded hover:bg-primary">
            home
          </Link>
          <Link href={'#about'} onClick={handleLinkClick} className="p-2 uppercase bg-transparent rounded hover:bg-primary">
            quem sou
          </Link>
          <Link href={'#expertises'} onClick={handleLinkClick} className="p-2 uppercase bg-transparent rounded hover:bg-primary">
            EXPERTISES
          </Link>
          <Link href={'/'} onClick={handleLinkClick} className="p-2 uppercase bg-transparent rounded hover:bg-primary">
            contato
          </Link>
        </div>
      )}

    </div>
  );
};

export default Header;
