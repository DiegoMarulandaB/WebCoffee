'use client'


import { useRouter } from 'next/navigation';
// import { title } from 'process';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
  {
    id: 1,
    title: "Envio en 24hrs",
    description:
      "Clientes VIP: Experimenta la exclusividad del café premium, seleccionado especialmente para ti.",
    link: "#!",
  },
  {
    id: 2,
    title: "Envio en 48hrs",
    description:
      "Disfruta del sabor auténtico del café fresco, entregado a tu puerta.",
    link: "#!",
  },
  {
    id: 3,
    title: "Devoluciones y entregas gratuitas",
    description:
      "Entregas gratuitas por la compra de (2) dos productos y devoluciones sin complicaciones en cada pedido de café.",
    link: "#!",
  },
  {
    id: 4,
    title: "Novedades",
    description:
      "Las últimas tendencias en café y transforma cada taza en una experiencia única.",
    link: "#!",
  },
];
const CarouselTextBanner = () => {
  const router = useRouter()

  return (
    <div className="bg-[#A0937D] dark:bg-[#B6C7AA]">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 2600,
          }),
        ]}
      >
        {/* className="cursor-pointer" */}
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem key={id} onClick={() => router.push(link)} className="">
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg font-bold text-wrap dark:text-secondary">{title}</p>
                    <p className="text-xs font-normal sm:text-sm text-wrap dark:text-secondary">{description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselTextBanner
