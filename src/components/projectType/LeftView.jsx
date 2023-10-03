import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LeftView = ({ id, name, description, img, tech, source, demo }) => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 md:px-10 mt-[80px] lg:mt-[120px]">
            <motion.div
                ref={refContent}
                initial={{ opacity: 0, x: -50 }}
                animate={
                    inViewContent
                        ? { opacity: 1, x: 0 }
                        : { opacity: 1, x: -50 }
                }
                transition={{ duration: 1 }}
                className="col-span-5 flex flex-col w-full items-start relative order-2 lg:order-1"
            >
                {/* project tagline */}
                <div className="text-3xl font-[600] w-full text-left py-2 lg:p-0">
                    <h3>{name}</h3>
                </div>
                {/* description absolute */}
                <div className="lg:absolute group top-[40px] left-0 z-10 w-full lg:w-[500px]  rounded-lg bg-bgDark md:py-2">
                    <p className="text-md text-textLight sm:text-textPara group-hover:text-textLight transition-all ease-in-out duration-300">
                        {description}
                    </p>
                </div>
                {/* tech stack */}
                <div className="flex gap-2 md:gap-3 items-center mt-4 lg:mt-[200px] text-xs md:text-sm text-textLight ">
                    {tech?.map((item, i) => {
                        return <span key={i}>{item}</span>;
                    })}
                </div>
                {/* links */}
                <div className="flex gap-10 items-center justify-start w-full mt-5 text-sm font-[500]">
                    <a
                        href={source}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col gap-1 items-center group relative animate-bounce"
                    >
                        <GitHubIcon />
                        <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-7 -left-[120%] w-[90px]">
                            Source Code
                        </span>
                    </a>
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col gap-1 items-center group relative animate-bounce"
                        >
                            <LaunchIcon />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-7 -left-1/2 w-fit">
                                Demo
                            </span>
                        </a>
                    )}
                </div>
            </motion.div>
            {/* project image */}
            <div className="col-span-7 order-1 lg:order-2 brightness-50 hover:brightness-100 transition-all ease-in duration-300 ">
                <a href={demo} target="_blank" rel="noreferrer">
                    <img
                        src={img}
                        alt={name}
                        className="rounded-sm min-h-full cursor-pointer"
                    />
                </a>
            </div>
        </div>
    );
};

export default LeftView;
