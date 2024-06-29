'use client';

import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export function AlertDialogDemo() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleClick = () => {
    setIsButtonVisible(false);
  };

  return (
    <AlertDialog>
      {isButtonVisible && (
        <AlertDialogTrigger asChild>
          <Button
            onClick={handleClick}
            variant="outline"
            className="max-w-md mx-auto sm:flex sm:justify-center sm:items-center md:justify-start md:items-start text-xl dark:bg-white dark:text-black mt-4"
          >
            <span className="text-red-500"> Abrir por favor</span>
          </Button>
        </AlertDialogTrigger>
      )}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold">¡Bienvenidos a webCoffee!</AlertDialogTitle>
          <AlertDialogDescription>
            <p className="text-xl font-normal mt-4"> Antes de ingresar ten en cuenta dos cosas:</p>
            <p className="text-lg font-normal mt-4">
              1. si la carga de las imagenes se demora ¡no te preocupes! Son las plataformas que se usaron para crear
              este sitio web.
            </p>
            <p className="text-lg font-normal mt-4">
              2. El carrito de compra y el formulario no estan habilitados, ya que estos están vinculados con la API de
              prueba de la pasarela de pago de Stripe, solo funciona con una cuenta creada desde Estados Unidos, ya que
              este servicio no esta disponible en Latinoamerica. 😔
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
