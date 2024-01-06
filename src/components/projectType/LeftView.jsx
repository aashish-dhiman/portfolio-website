/* eslint-disable react/prop-types */
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const LeftView = ({ id, name, description, img, tech, source, demo }) => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent);
    const [isMouseOver, setIsMouseOver] = useState(false);

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
                <div
                    className={`text-3xl font-[600] w-full text-left py-2 lg:py-0 px-3 ${
                        isMouseOver && "text-textPara"
                    } transition-all ease-in-out duration-300`}
                >
                    <h3>{name}</h3>
                </div>
                {/* description absolute */}
                <div className="lg:absolute group top-[40px] left-0 z-10 w-full lg:w-[500px] px-3 rounded-lg bg-bgDark md:py-2 shadow-slate-800 shadow-sm mt-1">
                    <p
                        className={`text-md text-textLight cursor-pointer ${
                            isMouseOver && "text-textPara"
                        } transition-all ease-in-out duration-300 `}
                    >
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
            <motion.div
                ref={refContent}
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={
                    inViewContent
                        ? { opacity: 1, filter: "blur(0px)" }
                        : { opacity: 1, filter: "blur(6px) " }
                }
                transition={{ duration: 1 }}
                className="col-span-7 order-1 lg:order-2 transition-all ease-in-out duration-700 hover:scale-[1.05] hover:z-20 shadow-slate-800 shadow-lg"
                onMouseEnter={() => {
                    setIsMouseOver(true);
                }}
                onMouseLeave={() => {
                    setIsMouseOver(false);
                }}
            >
                <a href={demo} target="_blank" rel="noreferrer">
                    <img
                        src={img}
                        alt={name}
                        loading="lazy"
                        className="rounded-md min-h-full cursor-pointer"
                    />
                </a>
            </motion.div>
        </div>
    );
};

export default LeftView;
