import React from 'react';
import CoffeeOfferComponent from '@/components/Offers/Offers';

interface Offers {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discountPercentage: number;
}


const mockOffers: Offers[] = [
  {
    id: 1,
    name: 'Café Sol',
    description:
      'Un café de cuerpo medio con notas de chocolate y nueces. Su sabor es dulce y suave, ideal para una taza balanceada.',
    imageUrl: '/grano.webp',
    price: 14.00,
    discountPercentage: 20,
  },
  {
    id: 2,
    name: 'Café Serra',
    description:
      'De la región montañosa, este café tiene un sabor dulce con matices de caramelo y un toque de almendra.',
    imageUrl: '/grano.webp',
    price: 14.00,
    discountPercentage: 20,
  },
  {
    id: 3,
    name: 'Café Dorado',
    description:
      'Café molido con una acidez brillante y notas cítricas, proporcionando una experiencia fresca y dulce.',
    imageUrl: '/molido.webp',
    price: 12.00,
    discountPercentage: 20,
  },
  {
    id: 4,
    name: 'Café Amane',
    description:
      'Un café molido de cuerpo medio con notas a cacao y un toque de frutos secos, con un perfil dulce y rico.',
    imageUrl: '/molido.webp',
    price: 12.00,
    discountPercentage: 15,
  },
];

const OffersPage: React.FC = () => {
  return (
    <div className="offers-page ">
      <h2 className="p-5 sm:p-20 text-2xl font-bold max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 mt-4 sm:mt-0">
        Nuestras ofertas
      </h2>
      <div className="offer-list">
        {mockOffers.map((offer) => (
          <CoffeeOfferComponent key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersPage;




