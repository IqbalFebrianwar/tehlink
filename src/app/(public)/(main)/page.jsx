import dynamic from "next/dynamic";
import Image from "next/image";
import blob1 from "@/components/svg/blob1.svg";
import blob2 from "@/components/svg/blob2.svg";
import lingkarline from "@/components/svg/lingkarline.svg";
import Lingkar from "@/components/svg/lingkar.svg";
import LingkarBiru from "@/components/svg/lingkarbiru.svg";
import IconWA from "@/components/svg/whatsapp.svg"
import Link from "next/link";

const BannerComponent = dynamic(() => import("@/components/banner/banner"));
const LayananComponent = dynamic(() => import("@/components/layanan"));
const ProjectsComponent = dynamic(() => import("@/components/projects"));
const TestimonialComponent = dynamic(() => import("@/components/testimonial"));

export default function home() {
  return (
    <>
      <div id="beranda" className="w-full">
        <BannerComponent />
      </div>
      <div id="layanan" className="w-full py-5 bg-white justify-center md:px-36">
        <Image src={blob1} alt="blob" className="md:w-8/12 absolute" />
        <h1 className="text-xl relative mt-16 lg:text-3xl justify-center text-center text-black font-extrabold">
          Apa Yang{" "}
          <span className="before:block before:absolute before:inset-2 md:before:translate-y-3 max-md:before:translate-y-2 before:bg-green-300 relative inline-block">
            <span className="relative text-black">Kami Layani</span>
          </span>
        </h1>
        <Image
          src={lingkarline}
          alt="line"
          className="max-md:w-6/12 max-md:ml-48 md:end-64 max-md:end-10 w-3/12 absolute"
        />
        <LayananComponent />
      </div>
      <div id="project" className="md:mt-10 w-full justify-center items-center py-20">
        <Image
          src={blob2}
          alt="blob"
          className="max-md:w-11/12 w-4/12 max-md:end-20 md:ml-64 max-md:ml-20 ml-1 mt-10 absolute"
        />
        <h1 className="text-xl relative lg:text-3xl text-center text-black font-extrabold">
          Yang Pernah{" "}
          <span className="before:block before:absolute before:inset-2 md:before:translate-y-3 max-md:before:translate-y-2 before:bg-green-300 relative inline-block">
            <span className="relative text-black">Kami Kerjakan</span>
          </span>
        </h1>

        <Image
          src={lingkarline}
          alt="line"
          className="max-md:w-6/12 md:end-96 md:mt-36 w-2/12 max-md:start-10 absolute"
        />
        <ProjectsComponent />
      </div>
      <div className="w-full py-5 bg-white justify-center md:px-36">
        <h1 className="text-xl relative mt-16 lg:text-3xl justify-center text-center text-black font-extrabold">
          Apa Yang{" "}
          <span className="before:block before:absolute before:inset-2 md:before:translate-y-3 max-md:before:translate-y-2 before:bg-green-300 relative inline-block">
            <span className="relative text-black">Mereka Bilang</span>
          </span>
        </h1>
        <div className="flex">
          <Image
            src={LingkarBiru}
            alt="lingkar"
            className="max-md:w-5/12 mt-10 lg:w-3/12 md:start-96 max-md:start-10 absolute"
          />
          <Image
            src={Lingkar}
            alt="lingkar"
            className="max-md:w-2/12 lg:w-2/12 mt-28 md:end-96 max-md:end-10 absolute"
          />
        </div>
        <TestimonialComponent />
      </div>
      <div className="w-full flex justify-center items-center py-20 bg-gray-100">
        <div className="justify-center items-center space-x-5 max-md:space-y-14 grid md:flex md:p-16 p-10 rounded-xl max-md:mx-10 lg:max-w-4xl bg-black text-white md:max-h-60">
          <p className="text-white max-md:text-center md:text-xl max-md:text-sm font-bold">
            Bangun Masa Depan Digitalmu Bersama Tehlink.
          </p>
          <Link href="https://wa.me/6288213715343?text=Hai%20TehLinkID%20Saya%20Ingin%20Konsultasi%20IT%20" className="btn max-md:btn-md border-0 font-bold bg-green-500 text-white">
            Ayo Sekarang !
          </Link>
        </div>
      </div>
      <div className="z-50 fixed bottom-5 right-5 ">
        <Link href="https://wa.me/6288213715343?text=Hai%20TehLinkID%20Saya%20Ingin%20Konsultasi%20IT%20" className="btn animate__infinite bg-green-400 rounded-full w-16 h-16">
        <Image 
          src={IconWA}
          width={50}
          alt="whatsapp"
        />
        </Link>
      </div>
    </>
  );
}
