import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Menu } from 'lucide-react'
import Link from 'next/link';

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/category/grano" className=" no-underline hover:underline underline-offset-8 mt-2 sm:mt-0 block">
          Café en grano
        </Link>
        <Link href="/category/molido" className=" no-underline hover:underline underline-offset-8 mt-2 sm:mt-0 block">
          Café molido
        </Link>
        <Link href="/category/capsula" className=" no-underline hover:underline underline-offset-8 mt-2 sm:mt-0 block">
          Café en cápsulas
        </Link>
        <Link href="/offers" className=" no-underline hover:underline underline-offset-8 mt-2 sm:mt-0 block">
          Ofertas
        </Link>
        <Link href="/#" className=" no-underline hover:underline underline-offset-8 mt-2 sm:mt-0 block">
          Sobre nosotros
        </Link>
      </PopoverContent>
    </Popover>
  );
}

export default ItemsMenuMobile
