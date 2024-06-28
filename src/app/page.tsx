import BannerDiscount from "@/components/BannerDiscount/BannerDiscount";
import Bannerproduct from "@/components/BannerProducts/Bannerproduct";
import CarouselTextBanner from "@/components/Carousel/CarouselTextBanner";
import ChooseCategory from "@/components/ChooseCategory/ChooseCategory";
import FeaturedProducts from "@/components/Featured/FeaturedProducts";

// import Image from "next/image";
//

export default function Home() {
  return (
    <main className="">
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <Bannerproduct />
    </main>
  );
}
