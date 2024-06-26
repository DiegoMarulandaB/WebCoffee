"use client";
import { useGetCategoryProduct } from "@/page/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/Skeleton/SkeletonSchema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState<string>("");
  const filteredProducts =
    result && !loading
      ? filterOrigin === ""
        ? result
        : result.filter(
            (product: ProductType) => product.attributes.origin === filterOrigin
          )
      : null;

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result && !loading && result.length > 0 && (
        <h1 className="text-3xl font-bold">
          Café {result[0].attributes.category.data.attributes.categoryName}
        </h1>
      )}
      <Separator className="bg-black dark:bg-white" />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {filteredProducts && !loading
            ? filteredProducts.map((product: ProductType) => (
                <ProductCard key={product.id} product={product} />
              ))
            : !loading && (
                <p>
                  Lo sentimos, no hemos encontrado productos que coincidan con
                  tu búsqueda.
                </p>
              )}
        </div>
      </div>
    </div>
  );
}




