import React from 'react';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/formatPrice';

interface Offers {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPercentage: number;
}

const CoffeeOfferComponent: React.FC<{ offer: Offers }> = ({ offer }) => {
  if (!offer) {
    return null;
  }

  const discountedPrice = offer.price * (1 - offer.discountPercentage / 100);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 mt-4 sm:mt-0">
      <div className="max-w-full mx-auto mt-5 flex flex-col sm:flex-row">
        <img className="w-full md:w-1/2 sm:w-1/2" src={offer.imageUrl} alt={offer.name} width={200} height={200} />
        <div className="p-4 max-w-md">
          <h3 className="text-lg font-normal mt-4">{offer.name}</h3>
          <Separator className="bg-black dark:bg-white" />
          <p className="text-lg font-normal mt-4">{offer.description}</p>
          <p className="text-lg font-normal mt-4">Precio: {formatPrice(offer.price)}</p>
          <p className="text-lg font-normal mt-4">Precio descontado: {formatPrice(discountedPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeOfferComponent;

