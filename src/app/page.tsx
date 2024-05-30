import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='mx-28 mt-5 mb-16  text-zinc-900'>
        <h1 className='text-4xl font-bold text-green-900'>
          Bem-vindo ao Nosso Site de Sustentabilidade
        </h1>
        <h2 className='text-3xl mt-5 font-bold text-green-700 '>
          O que é Sustentabilidade?
        </h2>
        <p className='mt-3'>
          <span className='font-bold'>Sustentabilidade</span> é um conceito que
          se refere à capacidade de atender às necessidades do presente sem
          comprometer a capacidade das futuras gerações de atenderem às suas
          próprias necessidades. É um equilíbrio entre desenvolvimento
          econômico, bem-estar social e proteção ambiental.
        </p>

        <h2 className='text-3xl mt-5 font-bold text-green-700 '>
          Como Surgiu o Conceito de Sustentabilidade?
        </h2>
        <p className='mt-3'>
          O conceito moderno de sustentabilidade começou a ganhar destaque
          global na década de 1980. Um marco importante foi o Relatório
          Brundtland, publicado em 1987 pela Comissão Mundial sobre Meio
          Ambiente e Desenvolvimento das Nações Unidas. O relatório, intitulado
          "Nosso Futuro Comum", introduziu o conceito de desenvolvimento
          sustentável, enfatizando a necessidade de estratégias que integrem
          crescimento econômico, equidade social e conservação ambiental.
        </p>

        <h2 className='text-3xl mt-5 font-bold text-green-700 '>
          Navegue pelo Nosso Site
        </h2>
        <ul className='mt-3'>
          <li className='mb-2'>
            <Link href={'/ti_verde'} className='font-bold text-amber-500'>
              TI Verde:{' '}
            </Link>
            Descubra como a tecnologia da informação pode ser utilizada de forma
            sustentável, reduzindo impactos ambientais e promovendo práticas
            ecologicamente responsáveis.
          </li>

          <li className='mb-2'>
            <Link
              href={'/5_Rs_Da_Sustentabilidade'}
              className='font-bold  text-amber-500'
            >
              Os 5 R's da Sustentabilidade:&nbsp;
            </Link>
            Aprenda sobre as práticas fundamentais para um estilo de vida
            sustentável: Reduzir, Reutilizar, Reciclar, Recusar e Repensar.
          </li>

          <li>
            <Link href={'/about'} className='font-bold text-amber-500'>
              Sobre Nós:{' '}
            </Link>
            Conheça mais sobre nossa missão, visão e a equipe por trás deste
            projeto.
          </li>
        </ul>

        <p className='mt-4 text-center font-semibold text-green-700'>
          Explore nosso site para saber mais sobre como podemos contribuir
          juntos para um planeta mais sustentável e saudável.
        </p>
      </div>
    </>
  );
}
