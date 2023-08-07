import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio Ruan Noleto',
  description: 'portfolio feito para mostra minhas habilidades como fullstack ou frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={inter.className} style={{
        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.979), rgba(0, 0, 0, 0.627)), url(/bg-gif.gif)',
        backgroundSize: '100% 100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="flex flex-col h-screen">
          <div className="h-[94px]">
            <Header />
          </div>
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
