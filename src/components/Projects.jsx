import LeftView from "./projectType/LeftView";
import RightView from "./projectType/RightView";
import { ProjectList } from "../constants/ProjectList";

const Projects = () => {
    return (
        <section className=" sm:px-8 py-[60px]" id="about">
            <div className="flex gap-4 items-center">
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Latest Projects
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </div>
            {/* Projects */}
            {ProjectList?.map((project, i) => {
                return project.id % 2 === 0 ? (
                    <LeftView key={i} {...project} />
                ) : (
                    <RightView key={i} {...project} />
                );
            })}
        </section>
    );
};

export default Projects;
