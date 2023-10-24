import ecommerce from "../assets/projects/ecommerce.png";
import discord from "../assets/projects/discord.png";
import medconnect from "../assets/projects/medconnect.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";

export const ProjectList = [
    {
        id: 1,
        name: "Discord Clone",
        description:
            "Discord Clone is a web application meticulously crafted with React and Tailwind CSS to mirror the essence and functionality of the original Discord app. It encompasses a faithful reproduction of Discord's home page, Nitro page, and Safety page. The application boasts full responsiveness, ensuring a seamless experience across devices. Furthermore, every link seamlessly connects to the official Discord site.",
        img: discord,
        //max 6 tech stack
        tech: ["React", "Tailwind CSS", "Material UI"],
        source: "https://github.com/aashish-dhiman/discord-clone",
        demo: "https://discord-aashish.vercel.app/",
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
        name: "Secret Keeper",
        description:
            "The Secret Keeper built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
        img: authorisation,
        //max 6 tech stack
        tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
        source: "https://github.com/aashish-dhiman/Authorisation",
        demo: null,
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
        name: "Medconnect",
        description:
            "MedConnect, an innovative online healthcare platform, redefines the way users access medical expertise. Seamlessly designed using React and tailored libraries, it offers remote consultations for medical advice. While our project is just a frontend prototype, it promises a user-friendly interface, responsive design, and smooth navigation.",
        img: medconnect,
        //max 6 tech stack
        tech: ["React", "Tailwind CSS", "Swiper"],
        source: "https://github.com/aashish-dhiman/MedConnect",
        demo: "https://medconnect-aashish.netlify.app/",
    },
];
