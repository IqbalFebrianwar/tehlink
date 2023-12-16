import dynamic from "next/dynamic";

const BannerComponent = dynamic(() => import("@/components/banner/banner"));

export default function Home() {
  return (
    <>
      <div className="w-full absolute font-body justify-between bg-white h-96">
        <BannerComponent />
        <div className="mt-5 w-full bg-gray-50 p-10 px-36">
          <h1 className="text-3xl text-center font-bold">Kami Melayani</h1>
        </div>
      </div>
    </>
  );
}
