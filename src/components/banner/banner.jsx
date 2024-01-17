import Image from "next/image";
import FrameSatu from "@/components/svg/frame1.svg";
import FrameDua from "@/components/svg/frame2.svg";
import FrameTiga from "@/components/svg/frame3.svg";
import "@/components/banner/banner.css";
import Lingkar from "@/components/svg/lingkar.svg"
import LingkarBiru from "@/components/svg/lingkarbiru.svg"
import Link from "next/link";

const BannerComponent = () => {
  return (
    <div className="relative py-20 max-lg:mx-10 bg-white lg:mx-60 flex max-lg:grid space-x-2 text-black">
      <div className=" md:mt-28 max-md:mt-20 space-y-5">
        <Image 
          src={Lingkar}
          alt="lingkar"
          className="w-14 mb-5 mr-10 absolute"
        />
        <Image 
          src={LingkarBiru}
          alt="Linkar Biru"
          className=" absolute max-lg:w-40 w-44 ml-80 max-md:ml-28"
        />
        <h1 className="text-4xl relative font-light text-gray-800">
          <span className="font-extrabold relative text-black">Build Apps dan Design </span>
          Untuk Membantu Solusi Bisnis Digitalmu Yang Jauh lebih baik.
        </h1>
        <Link href="https://wa.me/6288213715343?text=Hai%20TehLinkID%20Saya%20Ingin%20Konsultasi%20IT%20" className="btn bg-black text-white rounded-md font-semibold hover:bg-green-400 hover:text-white active:bg-green-400 active:text-white">
          Mulai Sekarang
        </Link>
      </div>
      <div className="flex py-10 bg-white justify-center">
        <div className="frame">
          <div className="frame-slide">
            <Image src={FrameSatu} alt="frame1" className="w-72 img" />
            <Image src={FrameDua} alt="frame2" className="w-72 img" />
            <Image src={FrameTiga} alt="frame3" className="w-72 img" />
          </div>
          <div className="frame-slide">
            <Image src={FrameSatu} alt="frame1" className="w-72 img" />
            <Image src={FrameDua} alt="frame2" className="w-72 img" />
            <Image src={FrameTiga} alt="frame3" className="w-72 img" />
          </div>
        </div>
        <div className="frame2">
          <div className="frame-slide2">
            <Image src={FrameSatu} alt="frame1" className="w-72 img" />
            <Image src={FrameDua} alt="frame2" className="w-72 img" />
            <Image src={FrameTiga} alt="frame3" className="w-72 img" />
          </div>
          <div className="frame-slide2">
            <Image src={FrameSatu} alt="frame1" className="w-72 img" />
            <Image src={FrameDua} alt="frame2" className="w-72 img" />
            <Image src={FrameTiga} alt="frame3" className="w-72 img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerComponent;
