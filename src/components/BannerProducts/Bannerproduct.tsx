import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';
import { Coffee } from 'lucide-react';

const Bannerproduct = () => {
  return (
    <>
      <div className=" text-xl font-normal sm:pb-8 block pt-4 text-center">
        <p className="mt-16">Sabores únicos para cada momento.</p>
        <h4 className="mt-8 text-3xl font-bold">Cada grano, una historia. Cada taza, una aventura.</h4>
        <div className="mt-5">
          <Link href="/category/grano" className={buttonVariants()}>
            Comprar
            <Coffee className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center h-[350px] lg:h-[300px] mt-2 bg-[url('/tazas.webp')] bg-center bg-no-repeat aspect-auto object-cover ml-2 sm:ml-0 mr-4 sm:mr-0"></div>
    </>
  );
};

export default Bannerproduct;
