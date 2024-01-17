"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import CardLayanan from "./card/cardlayanan";
import DevIcon from "@/components/svg/development.svg";
import MobileAppIcon from "@/components/svg/mobileapp.svg";
import UIIcon from "@/components/svg/ux.svg";
import SEOIcon from "@/components/svg/seo.svg";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const LayananComponent = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  
  return (
    <div className="md:mt-20 mt-8 flex w-full justify-center items-center relative">
      <div className="grid grid-cols-2 gap-4 max-md:hidden">
        <CardLayanan
          title="Web Development"
          deks="Menciptakan Situs Web yang responsif dengan design yang menarik."
          bgcolor="bg-purple-200"
          icon={DevIcon}
        />
        <CardLayanan
          title="Mobile App"
          deks="Menciptakan Aplikasi Mobile yang disesuaikan untuk semua perangkat."
          bgcolor="bg-yellow-200"
          icon={MobileAppIcon}
        />
        <CardLayanan
          title="UI/UX Design"
          deks="Menciptakan desain yang memikat dan pengalaman pengguna untuk hasil terbaik bagi bisnis kamu."
          bgcolor="bg-green-200"
          icon={UIIcon}
        />
        <CardLayanan
          title="SEO Improvement"
          deks="Membantu mendapatkan lebih banyak pengunjung dan konversi yang lebih banyak."
          bgcolor="bg-red-200"
          icon={SEOIcon}
        />
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="md:max-w-md max-md:w-60 md:hidden"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem className="w-full flex justify-center">
            <CardLayanan
              title="Web Development"
              deks="Menciptakan Situs Web yang responsif dengan design yang menarik."
              bgcolor="bg-purple-200"
              icon={DevIcon}
            />
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <CardLayanan
              title="Mobile App"
              deks="Menciptakan Aplikasi Mobile yang disesuaikan untuk semua perangkat."
              bgcolor="bg-yellow-200"
              icon={MobileAppIcon}
            />
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <CardLayanan
              title="UI/UX Design"
              deks="Menciptakan desain yang memikat dan pengalaman pengguna untuk hasil terbaik bagi bisnis kamu."
              bgcolor="bg-green-200"
              icon={UIIcon}
            />
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <CardLayanan
              title="SEO Improvement"
              deks="Membantu mendapatkan lebih banyak pengunjung dan konversi yang lebih banyak."
              bgcolor="bg-red-200"
              icon={SEOIcon}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default LayananComponent;
