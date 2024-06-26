/* eslint-disable @next/next/no-img-element */
import ProductImageMinuature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/hooks/use-cart";
import { useLovedProducts } from "@/components/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { Coffee, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props
    const router = useRouter()
    const { removeLovedItem } = useLovedProducts()
    const { addItem } = useCart()


    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
      <li className="flex p-6 border-b border-black dark:border-white">
        <ProductImageMinuature
          slug={product.attributes.slug}
          url={product.attributes.images.data[0].attributes.url}
        />

        <div className="flex justify-between flex-1 px-6">
          <div>
            <h2 className="text-lg font-bold">
              {product.attributes.productName}
            </h2>
            <p className="text-lg font-normal mt-2">
              {formatPrice(product.attributes.price)}
            </p>

            <ProductTasteOrigin
              taste={product.attributes.taste}
              origin={product.attributes.origin}
            />

            <Button className="mt-5 rounded-lg" onClick={addToCheckout}>
              Añadir el café al carrito
              <Coffee className="ml-2" />
            </Button>
          </div>
          <div>
            <button
              className={cn(
                "rounded-full flex items-center justify-center bg-white dark:bg-black dark:border-white border shadow-md p-1 hover:scale-110 transition"
              )}
            >
              <X size={21} onClick={() => removeLovedItem(product.id)} />
            </button>
          </div>
        </div>
      </li>
    );
}

export default LovedItemProduct;