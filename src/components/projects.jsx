import CardProject from "./card/cardproject";
import I6stuffProject from "@/assets/projects/project1.png";

const ProjectsComponents = () => {
  return (
    <div className="md:mt-20 mt-8 flex w-full justify-center items-center relative">
      <CardProject
        img={I6stuffProject}
        title="i6Stuff"
        link="https://i6stuff.vercel.app"
        capt="Membuat Front-End Menggunakan React dan Next JS"
      />
    </div>
  );
};
export default ProjectsComponents;
