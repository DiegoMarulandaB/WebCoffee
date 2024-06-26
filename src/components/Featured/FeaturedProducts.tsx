/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/page/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SkeletonSchema from "@/components/Skeleton/SkeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "@/components/ui/card";
import { Expand } from "lucide-react";
import IconButton from "@/components/IconButton/IconButton";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/hooks/use-cart";
import { FaShoppingCart } from "react-icons/fa";

const FeaturedProducts = () => {
  const { result, loading }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem } = useCart();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 mt-4 sm:mt-0 ">
      <h2 className="px-6 text-4xl font-bold sm:pb-8 block mt-8">
        ¡Granos de café con sabor latino para el mundo!
      </h2>
      <h3 className="px-6 text-xl font-normal sm:pb-8 block pt-12 mt-6 sm:mt-0">
        Productos destacados
      </h3>
      <Carousel>
        <CarouselContent className="-ml-2 mr-2 md:-ml-4 pt-8 sm:pt-0">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: ProductType) => {
              const { attributes, id } = product;
              const { slug, images, productName, taste, origin } = attributes;

              return (
                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                  <div className="p-1">
                    <Card className="py-4 border border-gray-700 dark:border-gray-200 shadow-none bg-[#F6E6CB] dark:bg-[#13161c]">
                      <CardContent className="relative flex items-center justify-center px-6 py-2 aspect-auto object-cover">
                        <img
                          src={`${images.data[0].attributes.url}`}
                          alt="Image featured"
                          rel="preconnect"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => router.push(`product/${slug}`)}
                              icon={<Expand size={21} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => addItem(product)}
                              icon={<FaShoppingCart size={21} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="text-lg font-bold">{productName}</h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="px-2 py-1 text-base font-normal text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                            {taste}
                          </p>
                          <p className="px-2 py-1 text-base font-normal text-white bg-[#89a07a] rounded-full dark:bg-[#B6C7AA] dark:text-black w-fit">
                            {origin}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;

