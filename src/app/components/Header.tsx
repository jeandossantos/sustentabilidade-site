import Image from 'next/image';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <div className='relative flex justify-center'>
        <Image
          src={'/banner.jpg'}
          alt='+Sustentabilidade'
          width={1440}
          height={563}
          priority
        ></Image>

        <h1
          className='flex items-center text-zinc-100 text-6xl font-bold absolute top-2/4 
        text-center opacity-50 hover:opacity-80 cursor-pointer transition-opacity 
        '
        >
          <FaPlus size={125} />
          Sustentabilidade
        </h1>
      </div>

      <nav className='bg-green-300 h-12 flex items-center justify-center '>
        <ul className='flex flex-row font-bold text-zinc-100 justify-center items-center'>
          <li className='px-6 border-r-2 border-r-zinc-100 hover:text-zinc-400 transition-colors'>
            <Link href='/'>HOME</Link>
          </li>
          <li className='px-6 border-r-2 border-r-zinc-100 hover:text-zinc-400 transition-colors'>
            <Link href='/5_Rs_Da_Sustentabilidade'>
              5 R'S DA SUSTENTABILIDADE
            </Link>
          </li>
          <li className='px-6 border-r-2 border-r-zinc-100 hover:text-zinc-400 transition-colors'>
            <Link href='#'>TI VERDE</Link>
          </li>
          <li className='px-6'>
            <Link
              href='/about'
              className='hover:text-zinc-400 transition-colors'
            >
              SOBRE
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
