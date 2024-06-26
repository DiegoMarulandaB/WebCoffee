import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/components/hooks/use-cart";
import { useLovedProducts } from "@/components/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Coffee, Heart } from "lucide-react";

export type InfoProductProps = {
  product: ProductType;
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  const { addItem } = useCart();
  const { addLoveItem } = useLovedProducts();

 
  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl font-normal">
          {product.attributes.productName}
        </h1>

        <ProductTasteOrigin
          origin={product.attributes.origin}
          taste={product.attributes.taste}
        />
      </div>
      <Separator className="my-4 bg-[#13161c] dark:bg-white" />
      <p>{product.attributes.description}</p>
      <Separator className="my-4 bg-[#13161c] dark:bg-white" />
      <p className="my-4 text-2xl font-normal">
        {formatPrice(product.attributes.price)}
      </p>
      <div className="flex items-center gap-5" aria-label="Botón de comprar">
        <Button className="w-full" onClick={() => addItem(product)}>
          Comprar <Coffee className="ml-2" />
        </Button>
        <Heart
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black"
          onClick={() => addLoveItem(product)}
          size={21}
        />
      </div>
    </div>
  );
};

export default InfoProduct;
