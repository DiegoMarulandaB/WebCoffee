/* eslint-disable @next/next/no-img-element */
import { Expand } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

import IconButton from "@/components/IconButton/IconButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaShoppingCart } from "react-icons/fa";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const router = useRouter();

  return (
    <Link
      href={`/product/${product.attributes.slug}`}
      rel="preconnect"
      className="relative p-2 transition-all duration-100 rounded-lg hover:shadow-md"
    >
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
        <p className="px-2 py-1 text-base font-normal text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
          {product.attributes.taste}
        </p>
        <p className="px-2 py-1 text-base font-normal text-white bg-[#89a07a] rounded-full dark:bg-[#B6C7AA] dark:text-black w-fit">
          {product.attributes.origin}
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product.attributes.images?.data?.map((image) => (
            <CarouselItem key={image.id} className="group">
              <img
                src={`${image.attributes.url}`}
                alt="Imagen producto"
                rel="preconnect"
                className="rounded-xl"
              />
              <div
                className="absolute w-full px-6 transition duration-200 
                            opacity-0 group-hover:opacity-100 bottom-5"
              >
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onClick={() => router.push(`/product/${product.attributes.slug}`)}
                    icon={<Expand size={21} className="text-gray-600" />}
                  />
                  <IconButton
                    onClick={() => console.log('product')}
                    icon={<FaShoppingCart size={21} className="text-gray-600" />}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-2xl text-center">{product.attributes.productName}</p>
      <p className="font-bold text-center">{formatPrice(product.attributes.price)}</p>
    </Link>
  );
};

export default ProductCard;
