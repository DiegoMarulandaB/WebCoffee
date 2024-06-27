import Link from "next/link";
import { buttonVariants } from "../ui/button";

const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-20 text-center mt-12 sm:mt-0 ">
      <h2 className="text-xl font-normal">Consigue tu café molido favorito</h2>
      <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center sm:gap-8">
        <div className="mb-4 sm:mb-0" aria-label="Botón de comprar">
          <Link href="/category/molido" className={buttonVariants()}>
            Haz tu compra aqui
          </Link>
        </div>
        <div aria-label="Botón de más información">
          <Link href="/moreInfo" className={buttonVariants({ variant: 'outline' })}>
            Más información
          </Link>
        </div>
      </div>
    </div>
  );
};


export default BannerDiscount
