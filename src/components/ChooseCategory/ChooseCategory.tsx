'use client';

import { useGetCategories } from '@/page/api/getProducts';
import Link from 'next/link';
import { ResponseType } from '@/types/response';
import React from 'react';
import { CategoryType } from '@/types/category';
// import Image from "next/image";

const ChooseCategory = () => {
  const { loading, result, error }: ResponseType = useGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-xl font-bold sm:pb-8 block mt-12 sm:mt-0">Encuentra tu Café ideal</h3>
      <div className="grid gap-5 sm:grid-cols-3 mt-4">
        {!loading &&
          result !== null &&
          result.map((category: CategoryType) => (
            <Link
              key={category.id}
              href={`/category/${category.attributes.slug}`}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg border border-gray-700 dark:border-white shadow-none bg-[#F6E6CB] dark:bg-[#13161c] mt-5 sm:mt-0"
            >
              <img
                src={`${category.attributes.mainImage.data.attributes.url}`}
                alt={category.attributes.categoryName}
                rel="preconnect"
                className="relative flex items-center justify-center px-6 py-2 aspect-auto object-cover transition-transform duration-150 ease-in-out hover:scale-125  rounded-lg"
              />
              <p className="absolute w-full py-24 ml-2 text-lg font-bold text-start text-black dark:text-black  bottom-5 backdrop:blur-lg">
                {category.attributes.categoryName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
