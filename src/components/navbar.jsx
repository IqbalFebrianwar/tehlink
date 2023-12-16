"use client";

import Image from "next/image";
import Logo from "@/components/svg/tehlink.svg";
import LogoWhite from "@/components/svg/tehlinkwhite.svg";
import { useEffect, useState } from "react";
import Burger from "@/components/svg/burger.svg"
import BurgerWhite from "@/components/svg/burgerwhite.svg"

const NavbarComponent = () => {
  const [fixed, setFixed] = useState(false);
  const [logofix, setLogoFixed] = useState(false);
  const [buttonfix, setButtonFixed] = useState(false);
  const [burgerfix, setBurgerFixed] = useState(false);

  useEffect(() => {
    function setNav() {
      if (window.scrollY >= 200) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
    window.addEventListener("scroll", setNav);

    function setLogo() {
      if (window.scrollY >= 200) {
        setLogoFixed(true);
      } else {
        setLogoFixed(false);
      }
    }
    window.addEventListener("scroll", setLogo);

    function setButton() {
      if (window.scrollY >= 200) {
        setButtonFixed(true);
      } else {
        setButtonFixed(false);
      }
    }
    window.addEventListener("scroll", setButton);

    function setBurger() {
      if (window.scrollY >= 200) {
        setBurgerFixed(true);
      } else {
        setBurgerFixed(false);
      }
    }
    window.addEventListener("scroll", setBurger);
  }, []);

  return (
    <div
      className={
        fixed
          ? `w-full bg-green-500 fixed max-md:px-10 md:px-48 z-30 items-center justify-between max-xl:space-x-20 lg:space-x-16 h-20 lg:h-20 flex`
          : `w-full bg-white fixed max-md:px-10 md:px-48 z-30 items-center justify-between max-xl:space-x-20 lg:space-x-16 h-20 lg:h-20 flex`
      }
    >
      <Image src={logofix ? LogoWhite : Logo} alt="logo" className=" md:w-28 max-md:w-18" />
      <label htmlFor="my-drawer" className="bg-transparent lg:hidden drawer-button">
        <Image 
         src={burgerfix ? BurgerWhite : Burger }
         alt="burger"
         className="max-md:w-8"
        />
      </label>
      <div className="relative mx-auto text-gray-600 space-x-7 lg:block max-lg:hidden">
        <button
          className={
            buttonfix
              ? `font-bold font-body text-lg shadow-none bg-transparent text-white border-0`
              : `font-bold font-body text-lg shadow-none bg-transparent text-gray-400 hover:text-black active:text-black border-0`
          }
        >
          Beranda
        </button>
        <button
          className={
            buttonfix
              ? `font-bold font-body text-lg shadow-none bg-transparent text-white border-0`
              : `font-bold font-body text-lg shadow-none bg-transparent text-gray-400 hover:text-black active:text-black border-0`
          }
        >
          Layanan
        </button>
        <button
          className={
            buttonfix
              ? `font-bold font-body text-lg shadow-none bg-transparent text-white border-0`
              : `font-bold font-body text-lg shadow-none bg-transparent text-gray-400 hover:text-black active:text-black border-0`
          }
        >
          Portofolio
        </button>
        
      </div>
    </div>
  );
};
export default NavbarComponent;
