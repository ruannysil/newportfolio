import Image from "next/image";
import Link from "next/link";



const Header = () => {


  return (
    <div className="container flex items-center justify-between p-5  h-[133px] mx-auto">
      <div className="container flex items-center justify-around p-5 py-0 mx-auto">
        <Link href={'/'} className="p-2 uppercase bg-transparent rounded hover:bg-primary">home</Link>
        <Link href={'/'}  className="p-2 uppercase bg-transparent rounded hover:bg-primary">quem sou</Link>
        <Link href={'/'}>
          <div className="w-[10]">
          <Image src='/logo.svg' alt="logo" width={150} height={150} />
          </div>
        </Link>
        <Link href={'/'}  className="p-2 uppercase bg-transparent rounded hover:bg-primary">EXPERTISES</Link>
        <Link href={'/'}  className="p-2 uppercase bg-transparent rounded hover:bg-primary">contato</Link>
      </div>
    </div>
  );
};


export default Header;