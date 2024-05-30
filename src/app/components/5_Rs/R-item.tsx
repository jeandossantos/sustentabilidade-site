interface R_item {
  name: string;
  description: string;
}

export default function R_Item({ name, description }: R_item) {
  return (
    <>
      <h2 className='text-zinc-800'>{name}</h2>
      <p>description</p>
    </>
  );
}
