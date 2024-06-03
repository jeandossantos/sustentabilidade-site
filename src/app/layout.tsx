import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Footer from './components/Footer';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '+Sustentabilidade',
  description: 'Aprenda como ser mais sustentável aqui.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <Header />
        <div className=' sm:mx-4 md:mx-28 mt-5 mb-16 text-zinc-900'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
