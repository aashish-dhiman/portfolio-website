import { useState, useTransition } from "react";
import TabbedComponent from "./TabbedComponent";
import { Skills } from "../constants/Skills";

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }

    return (
        <section className=" sm:px-8 py-[60px]" id="about">
            <div className="flex gap-4 items-center">
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    About Me
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 py-6 place-items-center">
                <div className="col-span-5 flex items-center w-[80%] sm:w-[90%] place-self-center ml-10 sm:m-0">
                    <img src="/images/about.png" alt="meme" />
                </div>
                <div className="col-span-7">
                    <p className="text-textWhite p-4 text-lg sm:text-xl sm:leading-8">
                        I am a passionate MERN Stack Developer and Problem
                        Solver, dedicated to creating impactful codes that
                        thrive on the internet.
                        <br />
                        I have experience working with C++, JavaScript, HTML,
                        CSS, React.js, Node.js, Express.js, MongoDB, Tailwind
                        CSS, and Git.
                        <br />I am a quick learner and I am always looking to
                        expand my knowledge and skill set.
                        {/* <br />I am not only a dedicated team player but also
                        thrilled to collaborate with others in crafting
                        remarkable applications. */}
                    </p>

                    <div className="flex flex-row justify-start gap-6 pl-4">
                        <TabbedComponent
                            selectTab={() => selectTab("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabbedComponent>
                        <TabbedComponent
                            selectTab={() => selectTab("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabbedComponent>
                    </div>
                    <div className="mt-8 pl-4 max-w-[100%] min-h-[140px] flex flex-wrap gap-x-10 gap-y-8">
                        {tab === "skills" ? (
                            Skills?.map((skill, i) => {
                                return (
                                    <div key={i} className="group relative">
                                        <img
                                            src={skill.img}
                                            alt={skill.description}
                                        />
                                        <span className="group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity bg-gray-800 text-sm text-textWhite rounded-md absolute left-1/2 -translate-x-1/2 translate-y-1/2 -mt-1 opacity-0 mx-auto px-2 w-max">
                                            {skill.description}
                                        </span>
                                    </div>
                                );
                            })
                        ) : (
                            <ul className="list-disc pl-2">
                                <li>
                                    <h5 className="text-2xl font-[600]">
                                        Gautam Buddha University, Greater Noida
                                    </h5>
                                    <div className="mt-2 flex gap-4 items-center">
                                        <div className="w-[15px] h-[2px] bg-textWhite "></div>
                                        <span>
                                            <p>
                                                Bachelor of Technology in
                                                Computer Science & Engineering
                                            </p>
                                            <span>2021-2025</span>
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
