import Menu from './components/Menu';
import Footer from './components/Footer';
import Banner from './components/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      <Menu />
      <div className='mx-28 my-5  text-zinc-800'>
        <h1 className='text-4xl font-bold'>
          Bem-vindo ao Nosso Site de Sustentabilidade
        </h1>
        <h2 className='text-3xl mt-5 font-bold text-zinc-800 '>
          O que é Sustentabilidade?
        </h2>
        <p className='mt-3'>
          <span className='font-bold'>Sustentabilidade</span> é um conceito que
          se refere à capacidade de atender às necessidades do presente sem
          comprometer a capacidade das futuras gerações de atenderem às suas
          próprias necessidades. É um equilíbrio entre desenvolvimento
          econômico, bem-estar social e proteção ambiental.
        </p>

        <h2 className='text-3xl mt-5 font-bold text-zinc-800 '>
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

        <h2 className='text-3xl mt-5 font-bold text-zinc-800 '>
          Navegue pelo Nosso Site
        </h2>
        <ul className='mt-3'>
          <li>
            <span className='font-bold text-zinc-900'>TI Verde: </span>
            Descubra como a tecnologia da informação pode ser utilizada de forma
            sustentável, reduzindo impactos ambientais e promovendo práticas
            ecologicamente responsáveis.
          </li>

          <li>
            <span className='font-bold text-zinc-900'>
              Os 5 R's da Sustentabilidade:
            </span>
            Aprenda sobre as práticas fundamentais para um estilo de vida
            sustentável: Reduzir, Reutilizar, Reciclar, Recusar e Repensar.
          </li>

          <li>
            <span className='font-bold text-zinc-900'>Sobre Nós:</span>
            Conheça mais sobre nossa missão, visão e a equipe por trás deste
            projeto.
          </li>
        </ul>

        <p className='mt-4 text-center font-semibold'>
          Explore nosso site para saber mais sobre como podemos contribuir
          juntos para um planeta mais sustentável e saudável.
        </p>
      </div>

      <Footer />
    </>
  );
}
