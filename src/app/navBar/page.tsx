'use client'

import { BaggageClaim, Heart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "@/components/MenuList/MenuList";
import ItemsMenuMobile from "@/components/ItemsMenuMobile/ItemsMenuMobile";
import ToggleTheme from "@/components/Toggle/ToggleTheme";
import { useCart } from "@/components/hooks/use-cart";
import { useLovedProducts } from "@/components/hooks/use-loved-products";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const { lovedItems } = useLovedProducts();

  const redirectToRegister = () => {
    router.push("/register");
  };

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl font-bold" onClick={() => router.push("/")}>
        WebCoffe
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        {cart.items.length === 0 ? (
          <FaShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
            size={21}
            aria-label="ShoppingCart Icon"
          />
        ) : (
          <div
            className="flex gap-1 cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <BaggageClaim strokeWidth={1} className="cursor-pointer" aria-label="Baggage Icon" />
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth="1"
          className={`cursor-pointer ${
            lovedItems.length > 0 && "fill-black dark:fill-white"
          }`}
          onClick={() => router.push("/loved-products")}
          size={21}
          aria-label="Heart Icon"
        />

        {/* <User
          strokeWidth={1}
          className="cursor-pointer"
          size={21}
          onClick={redirectToRegister}
        /> */}

        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
