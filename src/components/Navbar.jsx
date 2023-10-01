import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiEbox } from "react-icons/si";
import { BsMoon, BsSun } from "react-icons/bs";
import { MenuItems } from "../constants/MenuItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import * as Scroll from "react-scroll";
import {
    Link as ScrollLink,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";

const Navbar = () => {
    const [mobileView, setMobileView] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-20 bg-bgDark">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="flex flex-wrap items-center justify-between px-8 py-6 mx-auto bg-bgDark text-textWhite"
            >
                <ScrollLink
                    to="intro"
                    smooth={true}
                    duration={500}
                    className="min-w-[150px] cursor-pointer font-[600] sm:font-[800] text-lg sm:text-xl tracking-wide"
                >
                    {/* for mobile view */}
                    <span className="sm:hidden">@Aashish</span>
                    {/* for web view */}
                    <span className="hidden sm:block">@Aashish_Dhiman</span>
                </ScrollLink>

                {/* toggle navbar mobile view */}
                <span
                    className="md:hidden text-[22px] -ml-[120px]"
                    onClick={() => {
                        setMobileView(!mobileView);
                    }}
                >
                    <SiEbox />
                </span>
                {/* mobile navbar */}
                {mobileView && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={
                            mobileView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -100 }
                        }
                        transition={{ duration: 0.5 }}
                        className="absolute top-0 left-0 flex flex-col bg-transparent w-full min-h-screen"
                    >
                        <div className="flex flex-col md:hidden bg-bgDark relative p-10">
                            <span
                                className="absolute top-[62px] right-12 text-[24px]"
                                onClick={() => {
                                    setMobileView(!mobileView);
                                }}
                            >
                                <AiFillCloseCircle />
                            </span>
                            <div className="flex gap-4 p-6 border-b-white border-b-2 text-[22px]">
                                <a
                                    href="https://www.linkedin.com/in/aashish-dhiman/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsLinkedin />
                                </a>
                                <a
                                    href="https://github.com/aashish-dhiman"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsGithub />
                                </a>
                                <a href="mailto:aashishdhiman88@gmail.com">
                                    <HiMailOpen />
                                </a>
                            </div>

                            <div>
                                <ul className="flex flex-col items-center justify-between p-5 gap-5 relative">
                                    {MenuItems?.map((menuItem) => (
                                        <li key={menuItem.id}>
                                            <ScrollLink
                                                to={menuItem.url}
                                                smooth={true}
                                                duration={1000}
                                                title={menuItem.name}
                                                className="relative cursor-pointer text-[18px] font-[500] hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
                                            >
                                                {menuItem.name}
                                            </ScrollLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* overlay */}
                        <div
                            className="flex-grow bg-transparent w-full"
                            onClick={() => setMobileView(!mobileView)}
                        ></div>
                    </motion.div>
                )}

                {/* full screen navbar */}
                <div className="hidden md:block -ml-5">
                    <ul className="flex items-center justify-between gap-5 relative">
                        {MenuItems?.map((menuItem) => (
                            <li key={menuItem.id}>
                                <ScrollLink
                                    to={menuItem.url}
                                    smooth={true}
                                    duration={1000}
                                    title={menuItem.name}
                                    className="relative cursor-pointer text-[18px] font-[500] hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[3px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
                                >
                                    {menuItem.name}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden md:flex items-center justify-between gap-4 text-[24px]">
                    <a
                        href="https://www.linkedin.com/in/aashish-dhiman/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        href="https://github.com/aashish-dhiman"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsGithub />
                    </a>
                    <a href="mailto:aashishdhiman88@gmail.com">
                        <HiMailOpen />
                    </a>
                    {/* <span className="text-[20px]">
                        <BsSun />
                    </span> */}
                </div>
                {/* <span className="md:hidden text-[22px]">
                    <BsSun />
                </span> */}
            </motion.div>
        </nav>
    );
};

export default Navbar;
