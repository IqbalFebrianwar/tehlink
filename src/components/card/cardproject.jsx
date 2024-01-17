import Image from "next/image";
import Link from "next/link";

const CardProject = ({ img, title, link, capt}) => {
  return (
    <Link href={link} className="card md:max-w-2xl max-md:w-72 bg-white">
      <figure>
        <Image src={img} alt="Projects" className="w-full" quality={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black max-md:text-xl">{title}</h2>
        <p className="text-gray-400 max-md:text-sm">{capt}</p>
      </div>
    </Link>
  );
};
export default CardProject;
