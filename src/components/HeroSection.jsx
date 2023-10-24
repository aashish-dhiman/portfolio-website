import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Link as ScrollLink,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";

const HeroSection = () => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent, { once: true });

    return (
        <>
            <section
                className="px- sm:px-8 overflow-hidden pb-8 pt-[110px] sm:pt-[130px]"
                id="intro"
            >
                <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center">
                    {/* intro section */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={
                            inViewContent
                                ? { opacity: 1, x: 0, scale: 1 }
                                : { opacity: 0, x: -100, scale: 0.8 }
                        }
                        transition={{ duration: 0.8 }}
                        className="col-span-7"
                    >
                        <h1 className="text-white mb-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-[700] lg:leading-normal">
                            Hi, I&apos;m{" "}
                            <span className="text-heading">Aashish</span> a{" "}
                            <span className="text-heading">passionate</span>{" "}
                            Software Developer.
                        </h1>

                        <TypeAnimation
                            // preRenderFirstString={true}
                            sequence={[
                                500,
                                "I'm a MERN Stack Developer.",
                                1000,
                                "I build interactive UI using React.",
                                1000,
                                "I convert designs into Modern UI.",
                                1000,
                                "I make ideas & things alive.",
                                500,
                            ]}
                            speed={50}
                            // style={{ fontSize: "10px" }}
                            className="text-lg md:text-3xl font-[500]"
                            repeat={Infinity}
                        />

                        <p className="text-textPara text-base sm:text-lg mb-6 mt-3 lg:text-xl">
                            Stick around to see some of my work.
                        </p>
                        <div className="flex items-center gap-4 flex-col sm:flex-row ">
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={1000}
                                className="px-6 py-3 cursor-pointer w-full sm:w-fit rounded-full md:mr-4 hover:bg-slate-200 text-black bg-white text-center text-lg font-[700] hover:-translate-y-[2px] transition-all duration-500 ease-in-out"
                            >
                                Hire Me
                            </ScrollLink>
                            <a
                                href="https://drive.google.com/file/d/1nrwlQD-UelNBfR7pZI19BB7dKRS7Or5G/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 w-full sm:w-fit rounded-full md:mr-4 bg-transparent border-white border-2 text-white text-center hover:bg-darkHover hover:-translate-y-[2px] transition-all duration-500 ease-in-out "
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                    {/* image section */}
                    <motion.div
                        ref={refContent}
                        initial={{
                            opacity: 0,
                            x: 100,
                            scale: 0.8,
                            filter: "blur(6px)",
                        }}
                        animate={
                            inViewContent
                                ? {
                                      opacity: 1,
                                      x: 0,
                                      scale: 1,
                                      filter: "blur(0px)",
                                  }
                                : { opacity: 0, x: 100, scale: 0.8 }
                        }
                        transition={{ duration: 0.8 }}
                        className="col-span-5 w-[250px] h-[180px] lg:w-[400px] lg:h-[400px] relative overflow-hidden mt-12 sm:-mt-12"
                    >
                        <img
                            src="/images/heroImg.png"
                            alt="Meme Icon"
                            loading="lazy"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
