import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Image
        src={'/banner.jpg'}
        alt='+Sustentabilidade'
        width={1440}
        height={563}
        priority
      ></Image>

      <nav className='bg-green-300 h-12 flex items-center justify-center '>
        <ul className='flex flex-row font-bold text-zinc-100 justify-center items-center'>
          <li className='px-6 border-r-2 border-r-zinc-100'>
            <Link href='/'>HOME</Link>
          </li>
          <li className='px-6 border-r-2 border-r-zinc-100'>
            <Link href='/5_Rs_Da_Sustentabilidade'>
              5 R'S DA SUSTENTABILIDADE
            </Link>
          </li>
          <li className='px-6 border-r-2 border-r-zinc-100'>
            <Link href='#'>TI VERDE</Link>
          </li>
          <li className='px-6'>
            <Link href='/about'>SOBRE</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
