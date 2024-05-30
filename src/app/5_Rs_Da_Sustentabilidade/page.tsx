import { FaLightbulb } from 'react-icons/fa';
import { FaBan } from 'react-icons/fa';
import { FaCompressArrowsAlt } from 'react-icons/fa';
import { FaSyncAlt } from 'react-icons/fa';
import { FaRecycle } from 'react-icons/fa6';

export default function RS_DA_Sustentabilidade() {
  return (
    <div className='mx-28 my-5 text-zinc-900'>
      <h2 className='text-4xl font-bold text-green-900'>
        O que são os 5 R&apos;s da Sustentabilidade?
      </h2>

      <p className='mt-3'>
        <b>Os 5 R's da Sustentabilidade</b> são práticas que ajudam a reduzir
        nosso impacto no meio ambiente. Cada um desses R&apos;s representa uma
        ação que podemos tomar para viver de forma mais sustentável. Vamos
        conhecê-los:
      </p>

      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaLightbulb />
        Repensar
      </h2>

      <p>
        <b>Repensar</b> é refletir sobre nossos hábitos de consumo e o impacto
        que eles têm no planeta. Devemos considerar a sustentabilidade em todas
        as nossas decisões diárias, desde as compras até o descarte de resíduos.
        Repensar nossas ações pode nos levar a fazer escolhas mais conscientes e
        sustentáveis.
      </p>

      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaBan />
        Recusar
      </h2>
      <p className='mt-3'>
        <b>Recusar</b> envolve dizer &quot;não&quot; a produtos que prejudicam o
        meio ambiente. Isso inclui evitar itens de uso único, como sacolas
        plásticas, canudos e talheres descartáveis. Ao recusar esses produtos,
        incentivamos o uso de alternativas mais sustentáveis.
      </p>

      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaCompressArrowsAlt /> Reduzir
      </h2>
      <p className='mt-3'>
        <b>Reduzir</b> significa consumir menos e de forma mais consciente. Ao
        comprar apenas o que realmente precisamos e evitar desperdícios,
        diminuímos a quantidade de resíduos que produzimos. Por exemplo, podemos
        optar por produtos com menos embalagens ou comprar a granel.
      </p>

      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaSyncAlt />
        Reutilizar
      </h2>
      <p className='mt-3'>
        <b>Reutilizar</b> consiste em usar os objetos mais de uma vez antes de
        descartá-los. Em vez de jogar fora itens que ainda podem ser úteis,
        encontramos novas formas de aproveitá-los. Por exemplo, podemos
        transformar frascos de vidro em recipientes para alimentos ou usar
        roupas antigas para criar novos acessórios.
      </p>

      <h2 className='text-3xl mt-5 font-bold text-green-700 flex gap-2'>
        <FaRecycle />
        Reciclar
      </h2>
      <p className='mt-3'>
        <b>Reciclar</b> é o processo de transformar materiais usados em novos
        produtos. Separando corretamente o lixo (papel, plástico, vidro, metal),
        contribuímos para que esses materiais possam ser reciclados e
        reutilizados na fabricação de novos itens, reduzindo a necessidade de
        extração de matérias-primas.
      </p>
    </div>
  );
}
