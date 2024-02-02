import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='text-white bg-zinc-950 min-h-screen flex items-center justify-center'>
      <div className='p-8 mx-4 md:max-w-md lg:max-w-xl xl:max-w-2xl rounded-lg shadow-lg text-center'>
        <h1 className='text-4xl font-bold mb-4'>OOPS! 404!</h1>
        <div className='mb-6'>
          <figure className='rounded-lg overflow-hidden'>
            <Image src="/img/mecanico.png" width={500} height={500} alt="Cachorro cavando" />
          </figure>
        </div>
        <p className='text-xl'>
          Parece que você se perdeu! Esta página não foi encontrada.
        </p>
      </div>
    </div>
  );
}
