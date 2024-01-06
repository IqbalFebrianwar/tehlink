import LogoIcon from "@/components/svg/tehlinkwhite.svg";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="footer absolute items-center font-body footer-center p-10 bg-black text-white">
      <footer className="footer max-md:justify-start items-center max-md:space-y-10 p-10 bg-black text-white">
        <nav>
          <header className="font-extrabold text-lg pb-2 text-white">Layanan</header>
          <a className="link link-hover">Development</a>
          <a className="link link-hover">Uxer Experience</a>
          <a className="link link-hover">Digital Marketing</a>
        </nav>
        <nav>
          <header className="font-extrabold text-lg pb-2 text-white">Tehlink</header>
          <a className="link link-hover">Kontak</a>
          <a className="link link-hover">Tentang Tehlink</a>
        </nav>
        
      </footer>
      <footer className="footer px-10 py-4 border-t bg-black text-white border-white">
        <aside className="items-center text-start space-x-5 grid-flow-col">
          <Image 
            src={LogoIcon}
            alt="logo"
            className="w-24"
          />
          <p>
            Tehlink id <br />
            Jakarta - Indonesia 2024
          </p>
        </aside>
      </footer>
    </footer>
  );
};
export default FooterComponent;
