import Image from "next/image";

const CardLayanan = ({ title, bgcolor, icon, deks }) => {
  return (
    <div className="card md:max-w-md max-md:w-60 bg-base-100">
      <div className="card-body">
        <div className={`p-2 w-10 rounded-lg ${bgcolor}`}>
          <Image src={icon} alt="icon layanan" className="w-10" />
        </div>
        <h2 className="card-title max-md:text-lg">{title}</h2>
        <p className="max-md:text-sm">{deks}</p>
      </div>
    </div>
  );
};
export default CardLayanan;
