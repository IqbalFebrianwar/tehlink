"use client";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import CardTesti from "./card/cardtesti";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const TestimonialComponent = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="md:mt-20 mt-8 flex space-x-5 w-full justify-center relative">
      <div className="grid grid-cols-2 gap-4 max-md:hidden">
        <CardTesti
          src="https://i.pravatar.cc/300"
          capt="Aplikasi yang mereka buat sesuai dengan kebutuhan saya dan memiliki desain yang menarik."
          name="Iqbal Febrianwar"
          job="Mahasiswa Universitas Dian Nusantara"
        />
        <CardTesti
          src="https://i.pravatar.cc/300"
          capt="Saya sangat puas dengan jasa build app dari Tehlink ID."
          name="Desi Ramayanti"
          job="Dosen Universitas Gunadarma"
        />
        <CardTesti
          src="https://i.pravatar.cc/300"
          capt="Tim Tehlink ID juga sangat responsif dan selalu memberikan solusi yang tepat untuk masalah saya."
          name="Agus Setiawan"
          job="Mahasiswa Politeknik Jakarta"
        />
        <CardTesti
          src="https://i.pravatar.cc/300"
          capt="Saya awalnya ragu untuk menggunakan jasa Tehlink ID karena harganya yang cukup terjangkau."
          name="Afrin Hardadi"
          job="Teknisi"
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
            <CardTesti
              src="https://i.pravatar.cc/300"
              capt="Aplikasi yang mereka buat sesuai dengan kebutuhan saya dan memiliki desain yang menarik."
              name="Iqbal Febrianwar"
              job="Mahasiswa Universitas Dian Nusantara"
            />
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <CardTesti
              src="https://i.pravatar.cc/300"
              capt="Saya sangat puas dengan jasa build app dari Tehlink ID."
              name="Desi Ramayanti"
              job="Dosen Universitas Gunadarma"
            />
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <CardTesti
              src="https://i.pravatar.cc/300"
              capt="Tim Tehlink ID juga sangat responsif dan selalu memberikan solusi yang tepat untuk masalah saya."
              name="Agus Setiawan"
              job="Mahasiswa Politeknik Jakarta"
            />
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <CardTesti
              src="https://i.pravatar.cc/300"
              capt="Saya awalnya ragu untuk menggunakan jasa Tehlink ID karena harganya yang cukup terjangkau."
              name="Afrin Hardadi"
              job="Teknisi"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default TestimonialComponent;
