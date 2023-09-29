import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section className="min-h-screen px-8">
            <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center">
                {/* intro section */}
                <div className="col-span-7">
                    <h1 className="text-white mb-4 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-[700] lg:leading-normal">
                        Hi, I&apos;m{" "}
                        <span className="text-heading">Aashish</span> a{" "}
                        <span className="text-heading">passionate</span>{" "}
                        Software Developer.
                    </h1>
                    <TypeAnimation
                        preRenderFirstString={true}
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
                        style={{ fontSize: "2em" }}
                        repeat={Infinity}
                    />
                    <p className="text-textPara text-base sm:text-lg mb-6 mt-3 lg:text-xl">
                        Stick around to see some of my work.
                    </p>
                    <div className="flex items-center gap-4 flex-col sm:flex-row">
                        <Link
                            to="/contact"
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 hover:bg-slate-200 text-black bg-white text-center font-medium"
                        >
                            Hire Me
                        </Link>
                        <a
                            href="https://drive.google.com/file/d/1nrwlQD-UelNBfR7pZI19BB7dKRS7Or5G/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent border-white border-2 text-white text-center "
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                {/* image section */}
                <div className="col-span-5 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden mt-4 sm:-mt-12">
                    <img
                        src="/images/heroImg.png"
                        alt="Meme Icon"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px] h-[400px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
