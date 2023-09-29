import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { MenuItems } from "../constants/MenuItem";
import { Link } from "react-router-dom";

const handleOnClick = () => {
    console.log("Clicked");
};

const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 z-10">
            <div className="flex flex-wrap items-center justify-between px-8 py-6 mx-auto bg-bgDark text-textWhite">
                <Link to="/" className="min-w-[150px] font-[800] text-xl">
                    @Aashish
                </Link>
                <div className="">
                    <ul className="flex items-center justify-between gap-5 relative">
                        {MenuItems?.map((menuItem) => (
                            <li key={menuItem.id}>
                                <Link
                                    to={menuItem.url} 
                                    title={menuItem.name}
                                    onClick={handleOnClick}
                                    className="relative text-[18px] font-[500] hover:no-underline after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full"
                                >
                                    {menuItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-between gap-4 text-[24px]">
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
            </div>
        </nav>
    );
};

export default Navbar;
