'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
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
            <Image src={'/logo.svg'} alt="logo" width={150} height={150} />
          </div>
        </Link>
        <div><GiHamburgerMenu className="w-8 h-8"/></div>
      </div>
    </div>
  );
};

export default Header;
