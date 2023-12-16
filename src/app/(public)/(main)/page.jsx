import dynamic from "next/dynamic";

const BannerComponent = dynamic(() => import("@/components/banner/banner"));
const LayananComponent = dynamic(() => import("@/components/layanan"));

export default function Home() {
  return (
    <>
      <BannerComponent />
      <div className="mt-10 w-full py-20 bg-green-950 justify-center p-10 md:px-36">
        <h1 className="text-xl lg:text-3xl text-center text-white font-extrabold">
          Lihat Apa Yang Kami Layani
        </h1>
        <LayananComponent />
      </div>
      <div className="w-full flex justify-center items-center py-20">
        <h1 className="text-xl lg:text-3xl text-center text-black font-extrabold">Yang Pernah Kami Kerjakan</h1>
      </div>
      <div className="w-full flex justify-center items-center py-20 bg-gray-100">
        <div className="justify-center max-md:space-y-14 grid md:flex md:p-16 p-10 rounded-xl max-md:mx-10 lg:max-w-4xl bg-green-950 text-white md:max-h-60">
          <p className="text-white max-md:text-center md:text-xl max-md:text-sm font-bold">Kita Bangun Masa Depan Digital Bersama Tehlink, Kita Dapat Mencapai Hasil Yang Luar Biasa Untuk Bisnis Anda.</p>
          <button className="btn max-md:btn-md border-0 font-bold bg-green-500 text-white">Ayo Sekarang !</button>
        </div>
      </div>
    </>
  );
}
