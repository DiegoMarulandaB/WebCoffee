"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaShop } from "react-icons/fa6";

const PageSuccess = () => {
    const router = useRouter()

    return (
      <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24 mt-12">
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
          <div className="flex justify-center md:min-w-[400px] object-cover">
            <Image
              src="/tazas.webp"
              alt="Success"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold">¡Gracias por tu compra!</h1>
            <p className="my-3 text-lg font-normal mt-4">
              Nos encargaremos de seleccionar los granos más frescos y preparar
              tu envío con el mayor cuidado. Mientras tanto, relájate y disfruta
              la anticipación del delicioso aroma del café recién hecho.
            </p>
            <p className="my-3 text-base font-normal mt-4">
              ¡Disfruta del café!
            </p>

            <Button
              onClick={() => router.push("/")}
              className="mt-4"
              aria-label="Botón de comprar"
            >
              Volver a la tienda
              <FaShop className="ml-2" size={21} aria-label="Shop Icon" />
            </Button>
          </div>
        </div>
      </div>
    );
}

export default PageSuccess;
