import Image from "next/image";

const CardTesti = ({ capt, name, src, job }) => {
  return (
    <div className="card md:max-w-md max-md:w-60 glass">
      <div className="card-body">
        <p className="text-black text-center max-md:text-sm">{capt}</p>
        <div className="avatar justify-center">
          <div className="w-8 rounded-full">
            <Image src={src} alt="Avatar" width={5} height={5} quality={100} />
          </div>
        </div>
        <div className="grid text-center items-center">
          <h1 className="font-bold text-black">{name}</h1>
          <p className="text-gray-400">{job}</p>
        </div>
      </div>
    </div>
  );
};
export default CardTesti;
