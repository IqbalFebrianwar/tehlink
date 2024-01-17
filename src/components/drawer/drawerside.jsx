"use client";
import { useRouter } from "next/navigation";

const DrawerSide = () => {
  const router = useRouter();
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu space-y-2 font-bold p-4 w-72 min-h-full bg-white text-black">
        <li
          htmlFor="my-drawer"
          aria-label="close sidebar"
          onClick={() => router.push("#beranda")}
        >
          <a className="font-semibold hover:bg-white hover:text-green-500 active:bg-white active:text-green-500 text-lg">
            Beranda
          </a>
        </li>
        <li
          htmlFor="my-drawer"
          aria-label="close sidebar"
          onClick={() => router.push("#layanan")}
        >
          <a className="font-semibold hover:bg-white hover:text-green-500 active:bg-white active:text-green-500 text-lg">
            Layanan
          </a>
        </li>
        <li
          htmlFor="my-drawer"
          aria-label="close sidebar"
          onClick={() => router.push("#project")}
        >
          <a className="font-semibold hover:bg-white hover:text-green-500 active:bg-white active:text-green-500 text-lg">
            Portofolio
          </a>
        </li>
      </ul>
    </div>
  );
};
export default DrawerSide;
