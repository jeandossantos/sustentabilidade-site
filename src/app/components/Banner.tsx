import Image from 'next/image';

export default function Banner() {
  return (
    <Image
      src={'/banner.jpg'}
      alt='+Sustentabilidade'
      width={1440}
      height={563}
    ></Image>
  );
}
