import Image from 'next/image';
import { FaLightbulb } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa';
import { FaCompressArrowsAlt } from 'react-icons/fa';
import { FaSyncAlt } from 'react-icons/fa';
import { FaRecycle } from 'react-icons/fa6';
import EmbedVideo from '../components/EmbedVideo';

export default function RS_DA_Sustentabilidade() {
  return (
    <div className='mx-28 my-5 text-zinc-900'>
      <h2 className='text-4xl font-bold text-green-900'>
        O que são os 5 R&apos;s da Sustentabilidade?
      </h2>

      <div className='flex justify-center'>
        <EmbedVideo code='hXKroVDLRSg' width={500} height={250} />
      </div>

      <p className='mt-3'>
        <b>Os 5 R&apos;s da Sustentabilidade</b> são práticas que ajudam a
        reduzir nosso impacto no meio ambiente. Cada um desses R&apos;s
        representa uma ação que podemos tomar para viver de forma mais
        sustentável. Vamos conhecê-los:
      </p>

      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaLightbulb />
        Repensar
      </h2>
      <Image
        className='my-4 max-w-full h-auto rounded-lg'
        src={'/thinking 1.jpg'}
        alt='Pensando...'
        width={640}
        height={427}
      />
      <p>
        <b>Repensar</b> é refletir sobre nossos hábitos de consumo e o impacto
        que eles têm no planeta. Devemos considerar a sustentabilidade em todas
        as nossas decisões diárias, desde as compras até o descarte de resíduos.
        Repensar nossas ações pode nos levar a fazer escolhas mais conscientes e
        sustentáveis.
      </p>
      <h3 className='text-2xl mt-5 font-bold text-green-700'>Exemplos</h3>
      <ul className='list-disc pl-4 list-inside font-semibold'>
        <li className='mb-2 pt-2'>
          O que tenho feito para preservar o meio ambiente?
        </li>
        <li className='mb-2'>
          Estou me esforçando para economizando recursos como água e
          eletricidade?
        </li>
        <li className='mb-2 '>
          Estou comprando somente o necessário ou estou comprando por impulso?
        </li>
        <li className='mb-4 '>Estou descartando meu lixo corretamente?</li>
      </ul>
      <p>Ao se fazer tais perguntas você já está aplicando essa prática.</p>
      {/* RECUSAR */}
      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaBan />
        Recusar
      </h2>
      <Image
        className='my-4 max-w-full h-auto rounded-lg'
        src={'/refuse_1.jpg'}
        alt='Homem recusando'
        width={640}
        height={427}
      />
      <p className='mt-3'>
        <b>Recusar</b> incentiva a rejeição de produtos e práticas que
        prejudicam o meio ambiente. Ao recusar, você evita adquirir itens que
        não são sustentáveis ou que contribuem para a poluição e o desperdício.
      </p>
      <h3 className='text-2xl mt-5 font-bold text-green-700'>Como aplicar?</h3>
      <ul className='list-disc pl-4 list-inside font-semibold'>
        <li className='mb-2 pt-2'>
          Recuse comprar produtos de empresas que não se preocupam com o meio
          ambiente.
        </li>

        <li className='mb-2'>
          Recusar folhetos, panfletos e outros materiais promocionais que muitas
          vezes acabam sendo descartados imediatamente.{' '}
        </li>

        <li className='mb-4'>
          Recuse a compra de produtos exagerada. Compre apenas o que precisa.
        </li>
      </ul>
      <p>
        Ao recusar esses produtos, incentivamos o uso de alternativas mais
        sustentáveis.
      </p>
      {/* REDUZIR */}
      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaCompressArrowsAlt />
        Reduzir
      </h2>
      <Image
        className='my-4 max-w-full  rounded-lg'
        src={'/reduce_2.jpg'}
        alt='Reduzindo gasto'
        width={640}
        height={427}
      />
      <p className='mt-3'>
        <b>Reduzir</b> significa consumir menos e de forma mais consciente. Ao
        comprar apenas o que realmente precisamos e evitar desperdícios,
        diminuímos a quantidade de resíduos que produzimos. Por exemplo, podemos
        optar por produtos com menos embalagens ou comprar a granel.
      </p>
      <h3 className='text-2xl mt-5 font-bold text-green-700'>Como aplicar?</h3>
      <ul className='list-disc pl-4 list-inside font-semibold'>
        <li className='mb-2 pt-2'>Reduza o consumo sem necessidade.</li>

        <li className='mb-2 '>
          Reduza o consumo excessivo e indevido de água e energia.
        </li>

        <li className='mb-2 '>
          Opte por produtos com embalagens reutilizáveis.
        </li>

        <li className='mb-4'>
          Compre produtos de maior qualidade e durabilidade.
        </li>
      </ul>
      <p>Ao se fazer tais ações você está ajudando a reduzir o desperdício.</p>
      {/* Reutilizar */}
      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaSyncAlt />
        Reutilizar
      </h2>
      <Image
        className='my-4 max-w-full h-auto rounded-lg'
        src={'/reuse.jpg'}
        alt='Reutilizando'
        width={640}
        height={427}
      />
      <p className='mt-3'>
        <b>Reutilizar</b> é um dos princípios dos 5 R's da sustentabilidade e
        envolve a prática de usar objetos várias vezes antes de descartá-los. Ao
        reutilizar, você prolonga a vida útil dos produtos e reduz a necessidade
        de produzir novos itens, economizando recursos naturais e diminuindo a
        quantidade de resíduos que vão para os aterros sanitários.
      </p>
      <h3 className='text-2xl mt-5 font-bold text-green-700'>Como aplicar?</h3>
      <ul className='list-disc pl-4 list-inside font-semibold'>
        <li className='mb-2 pt-2'>
          Reutilize frascos de vidro de alimentos para armazenar outros
          alimentos, organizar pequenos objetos ou até mesmo como vasos de
          plantas.
        </li>
        <li className='mb-2'>
          Doe ou troque roupas que você não usa mais. Transforme roupas antigas
          em novos acessórios, como bolsas ou panos de limpeza.
        </li>
        <li className='mb-4 '>
          Use sacolas reutilizáveis em vez de sacolas plásticas descartáveis.
          Sacolas de pano ou materiais duráveis podem ser usadas muitas vezes.
        </li>
      </ul>
      <p>
        Ao reduzir, você economizar dinheiro e contribuir com o meio ambiente.
      </p>
      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaRecycle />
        Reciclar
      </h2>
      <Image
        className='my-4 max-w-full h-auto rounded-lg'
        src={'/recycle.jpg'}
        alt='Reciclando'
        width={640}
        height={427}
      />
      <p className='mt-3'>
        <b>Reciclar</b> é o processo de transformar materiais usados em novos
        produtos. Separando corretamente o lixo{' '}
        <b>(papel, plástico, vidro, metal)</b>, contribuímos para que esses
        materiais possam ser reciclados e reutilizados na fabricação de novos
        itens, reduzindo a necessidade de extração de matérias-primas.
      </p>
      <h3 className='text-2xl mt-5 font-bold text-green-700'>
        Exemplos de Materiais Recicláveis:
      </h3>
      <ul className='list-disc pl-4 list-inside font-semibold'>
        <li className='mb-2 pt-2'>
          <span className='text-amber-500'>Papel e Papelão: </span> Jornal,
          revistas, caixas de papelão, papel de escritório.
        </li>
        <li className='mb-2'>
          <span className='text-amber-500'>Plástico: </span>Garrafas PET,
          embalagens de alimentos, sacolas plásticas.
        </li>
        <li className='mb-2'>
          <span className='text-amber-500'>Vidro: </span>Garrafas de vidro,
          frascos de alimentos, jarras.
        </li>
        <li className='mb-2'>
          <span className='text-amber-500'>Metal: </span>Latas de alumínio,
          latas de aço, sucata metálica.
        </li>
        <li className=''>
          <span className='text-amber-500'>Eletrônicos: </span>Dispositivos
          eletrônicos obsoletos como celulares, computadores, baterias.
        </li>
      </ul>
      <h3 className='text-2xl mt-5 font-bold text-green-700'>
        Como Funciona a Reciclagem?
      </h3>
      <ul className='list-disc pl-4 list-inside font-semibold'>
        <li className='mb-2 mt-4'>
          <span className='text-amber-500'>Coleta:</span> Materiais recicláveis
          são coletados por serviços de reciclagem municipais ou empresas
          privadas.
        </li>
        <li className='mb-2'>
          <span className='text-amber-500'>Separação:</span> Os materiais são
          separados por tipo (papel, plástico, vidro, metal) em instalações de
          reciclagem.
        </li>
        <li className='mb-2'>
          <span className='text-amber-500'>Processamento:</span> Os materiais
          separados são limpos e processados para remover impurezas.
        </li>
        <li className='mb-2'>
          <span className='text-amber-500'>Transformação:</span> Os materiais
          processados são transformados em novos produtos, como papel reciclado,
          novos recipientes plásticos, etc.
        </li>
        <li className='mb-2'>
          <span className='text-amber-500'>Distribuição:</span> Os novos
          produtos reciclados são distribuídos para uso comercial e industrial.
        </li>
      </ul>
      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        Encerrando...
      </h2>
      <p className='mt-4 mb-10 text-zinc-900'>
        Neste texto, você aprendeu o que são os 5 R's da sustentabilidade -
        Recusar, Reduzir, Reutilizar, Reciclar e Repensar - e como aplicá-los em
        sua vida cotidiana. Ao adotar esses princípios, você estará contribuindo
        significativamente para a preservação do meio ambiente, reduzindo o
        desperdício e promovendo um futuro mais sustentável. Agora, você está
        pronto para mudar seus hábitos e se tornar uma pessoa mais
        ecologicamente correta. Lembre-se, cada pequena ação conta e juntos
        podemos fazer uma grande diferença.
      </p>
    </div>
  );
}
