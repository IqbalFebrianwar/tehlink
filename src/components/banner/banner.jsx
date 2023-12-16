import Image from "next/image";
import FrameSatu from "@/components/svg/frame1.svg";
import FrameDua from "@/components/svg/frame2.svg";
import FrameTiga from "@/components/svg/frame3.svg";
import "@/components/banner/banner.css";

const BannerComponent = () => {
  return (
    <div className="relative mt-20 max-lg:mx-10 lg:mx-60 flex max-lg:grid space-x-2 text-black">
      <div className="mt-20 space-y-5">
        <h1 className="text-4xl font-light">
          Membantu Bisnismu Dikenal Jutaan Orang di Internet dengan{" "}
          <span className="font-extrabold text-green-500">Website </span>
          Yang Lebih Baik.
        </h1>
        <button className="btn bg-black text-white rounded-md font-semibold hover:bg-green-400 hover:text-white active:bg-green-400 active:text-white">
          Mulai Sekarang
        </button>
      </div>
      <div className="flex py-10 justify-center">
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
