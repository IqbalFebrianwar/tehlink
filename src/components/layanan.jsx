import Image from "next/image";
import Development from"@/components/svg/development.svg"
import UX from"@/components/svg/ux.svg"
import Digital from"@/components/svg/digital.svg"

const LayananComponent = () => {
  return (
    <div className="mt-20 space-y-20">
      <div className="flex max-md:space-y-10 max-lg:grid w-full justify-between lg:px-16">
        <div className="space-y-5">
          <h1 className="text-xl md:text-3xl text-white font-extrabold">
            DEVELOPMENT
          </h1>
          <p className="text-white max-w-xl">
            Para ahli kami memiliki spesialisasi dalam menciptakan situs web dan
            aplikasi mobile yang disesuaikan untuk semua perangkat, semuanya
            dirancang untuk mendukung pertumbuhan bisnis Anda.
          </p>
          <ul>
            <li className="text-white">- Web Development</li>
            <li className="text-white">- Mobile Apps</li>
            <li className="text-white">- Visual Design</li>
            <li className="text-white">- E-Commerce</li>
          </ul>
        </div>
        <Image src={Development} alt="DevIcon" className="w-48 max-md:w-24" />
      </div>
      <div className="flex max-md:space-y-10 max-md:grid max-md:px-2 w-full justify-between px-16">
        <div className="space-y-5">
          <h1 className="text-xl md:text-3xl text-white font-extrabold">
            USER EXPERIENCE
          </h1>
          <p className="text-white max-w-xl">
            Prioritas kami adalah menciptakan desain yang memikat dan pengalaman
            pengguna yang lancar untuk mendorong hasil terbaik bagi bisnis Anda.
          </p>
          <ul>
            <li className="text-white">- UI/UX Design</li>
            <li className="text-white">- UX Research</li>
            <li className="text-white">- UX Survey</li>
            <li className="text-white">- Usability Testing</li>
          </ul>
        </div>
        <Image src={UX} alt="UxIcon" className="w-48 max-md:w-24" />
      </div>
      <div className="flex max-md:space-y-10 w-full max-md:grid max-md:px-2 justify-between px-16">
        <div className="space-y-5">
          <h1 className="text-xl md:text-3xl text-white font-extrabold">
            DIGITAL MARKETING
          </h1>
          <p className="text-white max-w-xl">
            Layanan pemasaran digital kami yang lengkap dirancang khusus untuk
            membangun kehadiran online Anda dan mendorong hasil maksimal.
          </p>
          <ul>
            <li className="text-white">- Search Engine Optimization (SEO)</li>
            <li className="text-white">- Email Marketing</li>
            <li className="text-white">- Conversion rate optimization (CRO)</li>
          </ul>
        </div>
        <Image src={Digital} alt="DigiIcon" className="w-40 max-md:w-24" />
      </div>
    </div>
  );
};
export default LayananComponent;
