import ecommerce from "../assets/projects/ecommerce.png";
import portfolio from "../assets/projects/portfolio.png";
import medconnect from "../assets/projects/medconnect.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";

export const ProjectList = [
    {
        id: 1,
        name: "Portfolio",
        description:
            "My portfolio website is a testament to my expertise in web development, showcasing my skills in React, Tailwind CSS, and dynamic animations powered by Framer Motion. Through a seamless blend of technology and creativity, I've crafted a platform that not only highlights my work but also reflects my dedication to crafting immersive user experiences. Explore the synergy of innovation and design in this portfolio.",
        img: portfolio,
        //max 6 tech stack
        tech: ["React", "Framer Motion", "Tailwind CSS", "Material UI"],
        source: "https://github.com/aashish-dhiman/portfolio-website",
        demo: "https://portfolio-aashish.netlify.app/",
    },
    {
        id: 2,
        name: "E-Commerce",
        description:
            "Our Flipkart Clone, built with MERN stack, revolutionizes online shopping. It provides secure user authentication, extensive product catalog, efficient cart management, and Stripe-powered payments. Users easily access order history, while admins have a dedicated dashboard. Responsive design, Bcrypt-secured passwords, and Cloudinary image storage ensure a seamless and secure shopping experience.",
        img: ecommerce,
        //max 6 tech stack
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Stripe",
        ],
        source: "https://github.com/aashish-dhiman/E-Commerce",
        demo: "https://better-overcoat-fly.cyclic.cloud/",
    },
    {
        id: 3,
        name: "Medconnect",
        description:
            "MedConnect, an innovative online healthcare platform, redefines the way users access medical expertise. Seamlessly designed using React and tailored libraries, it offers remote consultations for medical advice. While our project is in progress with a frontend prototype, it promises a user-friendly interface, responsive design, and smooth navigation.",
        img: medconnect,
        //max 6 tech stack
        tech: ["React", "Tailwind CSS", "Swiper"],
        source: "https://github.com/aashish-dhiman/MedConnect",
        demo: "https://medconnect-aashish.netlify.app/",
    },
    {
        id: 4,
        name: "Keeper - Keep Your Notes",
        description:
            "Inspired by Google Keep, Keeper is a note-taking website developed with React and adorned with Tailwind CSS and Material UI. It offers a user-friendly experience, allowing you to effortlessly create and manage notes. The responsive design ensures a seamless experience across all devices, making note-taking a breeze.",
        img: keeper,
        //max 6 tech stack
        tech: ["React", "Tailwind CSS", "Material UI"],
        source: "https://github.com/aashish-dhiman/Keeper-keep-your-notes",
        demo: "https://keeper-aashish.netlify.app/",
    },
    {
        id: 5,
        name: "Authorisation",
        description:
            "The Authorization-Secret Website, built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
        img: authorisation,
        //max 6 tech stack
        tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
        source: "https://github.com/aashish-dhiman/Authorisation",
        demo: null,
    },
];
