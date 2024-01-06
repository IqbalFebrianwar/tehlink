import dynamic from "next/dynamic";
import SvgLayanan from "@/components/svg/svglayanan.svg";
import Image from "next/image";

const BannerComponent = dynamic(() => import("@/components/banner/banner"));
const LayananComponent = dynamic(() => import("@/components/layanan"));

export default function Home() {
  return (
    <>
      <BannerComponent />
      <div className="w-full py-5 bg-white justify-center md:px-36">
        <Image
          src={SvgLayanan}
          alt="layanan svg"
          className="md:w-8/12 w-11/12 absolute"
        />
        <div className="text-xl relative mt-16 lg:text-3xl justify-center text-center text-black font-extrabold">
          <h1>Apa Yang <span className="before:block before:absolute before:inset-2 md:before:translate-y-3 max-md:before:translate-y-2 before:bg-green-300 relative inline-block">
            <span className="relative text-black">Kami Layani</span></span></h1>
        </div>
        <LayananComponent />
      </div>
      <div className="md:mt-10 w-full flex justify-center items-center py-20">
        <h1 className="text-xl lg:text-3xl text-center text-black font-extrabold">
          Yang Pernah <span className="before:block before:absolute before:inset-2 md:before:translate-y-3 max-md:before:translate-y-2 before:bg-green-300 relative inline-block">
            <span className="relative text-black">Kami Kerjakan</span></span>
        </h1>
      </div>
      <div className="w-full flex justify-center items-center py-20 bg-gray-100">
        <div className="justify-center items-center space-x-5 max-md:space-y-14 grid md:flex md:p-16 p-10 rounded-xl max-md:mx-10 lg:max-w-4xl bg-black text-white md:max-h-60">
          <p className="text-white max-md:text-center md:text-xl max-md:text-sm font-bold">
            Bangun Masa Depan Digitalmu Bersama Tehlink.
          </p>
          <button className="btn max-md:btn-md border-0 font-bold bg-green-500 text-white">
            Ayo Sekarang !
          </button>
        </div>
      </div>
    </>
  );
}
