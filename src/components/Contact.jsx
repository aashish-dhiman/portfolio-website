import { useForm, ValidationError } from "@formspree/react";
import linkedin from "../assets/linkedin.svg";
import git from "../assets/git.svg";
import twitter from "../assets/twitter.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Contact = () => {
    const [show, setShow] = useState(false);
    const [spin, setSpin] = useState(false);
    const [state, handleSubmit] = useForm("xpzgodpa");
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (state.succeeded) {
            setShow(true);
            setFormData({
                email: "",
                subject: "",
                message: "",
            });
            setSpin(false);
        }
    }, [state.succeeded]);

    return (
        <section className=" sm:px-8 pt-[60px]" id="contact">
            <div className="flex gap-4 items-center">
                <h3 className="text-textWhite text-3xl sm:text-5xl font-[800]">
                    Get In Touch
                </h3>
                <div className="min-w-0 flex-grow mt-2 h-[4px] bg-textWhite"></div>
            </div>
            <div className="grid md:grid-cols-2 mt-4 md:mt-10 pt-20 pb-14 gap-4 relative">
                <div>
                    <h5 className="text-2xl font-bold leading-9 text-textWhite my-2">
                        Let&apos;s Connect
                    </h5>
                    <p className="text-textWhite max-w-md">
                        I&apos;m actively seeking new opportunities, and I
                        welcome your messages. Whether you have inquiries or
                        simply want to say hello, feel free to reach out. <br />
                        I&apos;ll try my best to get back to you!
                    </p>
                    <div className="flex flex-row gap-5 mt-6">
                        <Link
                            href="https://github.com/aashish-dhiman/"
                            className="relative group"
                        >
                            <img src={git} alt="Github Icon" />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-10 -left-3 w-fit">
                                Github
                            </span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/aashish-dhiman/"
                            className="relative group"
                        >
                            <img src={linkedin} alt="Linkedin Icon" />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-10 -left-4 w-fit">
                                Linkedin
                            </span>
                        </Link>
                        <Link
                            href="https://twitter.com/aashish_dhimaan"
                            className="relative group"
                        >
                            <img src={twitter} alt="twitter Icon" />
                            <span className="text-textLight text-xs px-2 opacity-0 group-hover:opacity-100 absolute top-10 -left-3 w-fit">
                                Twitter
                            </span>
                        </Link>
                    </div>

                    {/* after form submission greetings */}
                    {show && (
                        <div className="mt-6 w-[80%]">
                            <p className="text-md text-textPara text-left">
                                Thank you for reaching out! I appreciate your
                                interest and will get back to you as soon as
                                possible. In the meantime, feel free to explore
                                more of my portfolio.
                            </p>
                        </div>
                    )}
                </div>
                <div className="mt-10 md:mt-0">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="abc@gmail.com"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={state.submitting}
                            onClick={() => setSpin(true)}
                            className="rounded-full mr-4 bg-transparent border-white border-2 text-white text-center hover:bg-darkHover font-medium py-2.5 px-5 w-full"
                        >
                            {spin ? (
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <footer className="flex items-center mb-3 p-6 text-center">
                <span className="w-full text-textPara">
                    All Rights Reserved © {new Date().getFullYear()} - Aashish
                    Dhiman
                </span>
            </footer>
        </section>
    );
};

export default Contact;
