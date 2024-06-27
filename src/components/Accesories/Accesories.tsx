// import React from 'react';
// import { Accessory } from '@/types/accessoriesProps';
// import { Button } from '../ui/button';
// import { Coffee } from 'lucide-react';
// import { useCart } from '@/components/hooks/use-cart'; // Importa el hook useCart para manejar el carrito

// interface AccessoriesProps {
//   accessory: Accessory;
// }

// const AccessoriesComponent: React.FC<AccessoriesProps> = ({ accessory }) => {
//   const { addItem, removeItem, removeAll } = useCart();

//   return (
//     <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 mt-4 sm:mt-0">
//       <div className="max-w-full mx-auto mt-5 flex flex-col sm:flex-row">
//         <img className="w-full md:w-1/2 sm:w-1/2" src={accessory.imageUrl} alt={accessory.name} />
//         <div className="p-4 max-w-md">
//           <h3 className="text-lg font-semibold mt-4">{accessory.name}</h3>
//           <p className="text-base mt-2">{accessory.description}</p>
//           <p className="text-lg font-semibold mt-4">Precio: ${accessory.price.toFixed(2)}</p>
//           {accessory.discountPercentage > 0 && (
//             <p className="text-lg font-semibold mt-2 text-red-500">
//               Precio con descuento: ${(accessory.price * (1 - accessory.discountPercentage / 100)).toFixed(2)}
//             </p>
//           )}
//           <Button className="w-full" onClick={() => addItem(product)}>
//             Comprar <Coffee className="ml-2" />
//           </Button>
//           <Button className="w-full mt-2" onClick={() => removeItem(product.id)}>
//             Remover <Coffee className="ml-2" />
//           </Button>
//           <Button className="w-full mt-2" onClick={() => removeAll()}>
//             Remover todo <Coffee className="ml-2" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccessoriesComponent;
