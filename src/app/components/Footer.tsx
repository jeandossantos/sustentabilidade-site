import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-green-300 flex items-center  text-zinc-100 flex-col h-44'>
      <Image
        className='mt-5 mb-3'
        src={'/icon_footer.png'}
        alt='Mais sustentabilidade'
        width={215}
        height={40}
      />

      <ul className='flex font-bold text-zinc-100'>
        <li className='px-4 border-r-2 border-r-zinc-100'>
          <a href=''>HOME</a>
        </li>

        <li className=' px-4 border-r-2 border-r-zinc-100'>
          <a href='px-4 border-r-2 border-r-zinc-100'>
            5 R'S DA SUSTENTABILIDADE
          </a>
        </li>

        <li className=' px-4 border-r-2 border-r-zinc-100'>
          <a href=''>TI VERDE</a>
        </li>

        <li className='  px-4 '>
          <a href=''>SOBRE</a>
        </li>
      </ul>

      <p className='mt-2'>
        <span className='font-bold '>E-mail:</span>{' '}
        <a href='mailto:meucontato@maisstenttabilidade.com'>
          meucontato@maissustentabilidade.com
        </a>{' '}
      </p>

      <p className=' font-semibold mt-4 '>
        &copy; 2024 +Sustentabilidade. Todos os direitos reservados.{' '}
      </p>
    </footer>
  );
}
