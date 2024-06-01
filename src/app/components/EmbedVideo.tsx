interface IEmbedVideo {
  code: string;
  width: number;
  height: number;
}

export default function EmbedVideo({ code, width, height }: IEmbedVideo) {
  return (
    <iframe
      className='mt-5 rounded-lg'
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${code}`}
      allowFullScreen
    ></iframe>
  );
}
