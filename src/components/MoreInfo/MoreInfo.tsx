import React from 'react';

const MoreInfo: React.FC = () => {
  return (
    <div className="p-5 sm:p-20 text-center mt-12 sm:mt-0">
      <h2 className="text-2xl font-bold">Más Información sobre nuestros Productos</h2>
      <p className="max-w-md mx-auto mt-5 sm:flex sm:justify-center sm:gap-8 text-lg font-normal">
        En WebCoffee, ofrecemos una variedad de productos de café de alta calidad. Ya sea café molido, en grano o
        cápsulas, cada producto está seleccionado cuidadosamente para garantizar la mejor experiencia de sabor.
      </p>
      <p className="max-w-md mx-auto mt-5 sm:flex sm:justify-center sm:gap-8 text-lg font-normal">
        Si tienes alguna pregunta o necesitas asesoramiento sobre qué producto es mejor para ti, no dudes en
        contactarnos. Estamos aquí para ayudarte a encontrar el café perfecto.
      </p>
    </div>
  );
};

export default MoreInfo;
