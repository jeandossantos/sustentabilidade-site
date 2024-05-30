import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-green-300 flex items-center  text-zinc-100 flex-col h-44'>
      <Link href={'/'} className='hover:text-zinc-400 transition-colors'>
        <Image
          className='mt-5 mb-3'
          src={'/icon_footer.png'}
          alt='Mais sustentabilidade'
          width={215}
          height={40}
        />{' '}
      </Link>

      <ul className='flex font-bold text-zinc-100'>
        <li className='px-4 border-r-2 border-r-zinc-100'>
          <Link href='/' className='hover:text-zinc-400 transition-colors'>
            HOME
          </Link>
        </li>

        <li className=' px-4 border-r-2 border-r-zinc-100'>
          <Link
            href='5_Rs_Da_Sustentabilidade'
            className='hover:text-zinc-400 transition-colors'
          >
            5 R&apos;S DA SUSTENTABILIDADE
          </Link>
        </li>

        <li className=' px-4 border-r-2 border-r-zinc-100'>
          <Link
            href='/ti_verde'
            className='hover:text-zinc-400 transition-colors'
          >
            TI VERDE
          </Link>
        </li>

        <li className='  px-4 '>
          <Link href='/about' className='hover:text-zinc-400 transition-colors'>
            SOBRE
          </Link>
        </li>
      </ul>

      <p className='mt-2'>
        <span className='font-bold '>E-mail:</span>{' '}
        <Link
          className='hover:text-zinc-400 transition-colors'
          href='mailto:meucontato@maisstenttabilidade.com'
        >
          meucontato@maissustentabilidade.com
        </Link>{' '}
      </p>

      <p className=' font-semibold mt-4 '>
        &copy; 2024 +Sustentabilidade. Todos os direitos reservados.{' '}
      </p>
    </footer>
  );
}
