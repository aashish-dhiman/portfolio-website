import ecommerce from "../assets/projects/ecommerce.png";
import discord from "../assets/projects/discord.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";
import notion from "../assets/projects/notion.png";
import byte from "../assets/projects/byte.png";

export const ProjectList = [
    {
        id: 1,
        name: "Byte Brain Hub",
        description:
            "A collaborative platform crafted with Next.js, enables users to share insights globally. Featuring Google Authentication via NextAuth. Powered by MongoDB for efficient data storage, ByteBrainHub allows users to create, share insights with tags for easy discovery. With a user-friendly interface, it offers a seamless and enjoyable browsing experience, fostering a community-driven exchange of diverse ideas.",
        img: byte,
        //max 6 tech stack
        tech: ["Next.js", "Tailwind CSS", "Mongo DB", "Node.js"],
        source: "https://github.com/aashish-dhiman/byte-brain-hub",
        demo: "https://byte-brain-hub.vercel.app/",
    },
    {
        id: 2,
        name: "E-Commerce",
        description:
            "Our Flipkart Clone, built with MERN stack, revolutionizes online shopping. It provides secure user authentication, extensive product catalog, efficient cart management, and Stripe-powered payments. Users easily access order history, while admins have a dedicated dashboard. Responsive design, Bcrypt-secured passwords, and Cloudinary image storage ensure a seamless and secure shopping experience.",
        img: ecommerce,
        //max 6 tech stack
        tech: [
            "React.js",
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
        name: "Notion UI",
        description:
            "Discover the Notion UI Clone repository, coded with React and Tailwind CSS. With responsive design and dynamic React components, it mirrors the original Notion homepage's look and feel for a seamless experience.",
        img: notion,
        //max 6 tech stack
        tech: ["React.js", "Tailwind CSS"],
        source: "https://github.com/aashish-dhiman/Notion-Clone",
        demo: "https://hire-quotient-notion-clone-aashish.vercel.app/",
    },
    {
        id: 4,
        name: "Discord UI",
        description:
            "Discord UI Clone is a web application meticulously crafted with React and Tailwind CSS to mirror the essence and functionality of the original Discord UI. It encompasses a faithful reproduction of Discord's home page, Nitro page, and Safety page. The application boasts full responsiveness and furthermore, every link seamlessly connects to the official Discord site.",
        img: discord,
        //max 6 tech stack
        tech: ["React.js", "Tailwind CSS", "Material UI"],
        source: "https://github.com/aashish-dhiman/discord-clone",
        demo: "https://discord-aashish.vercel.app/",
    },
    {
        id: 5,
        name: "Whisper Wave",
        description:
            "The Whisper Wave built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
        img: authorisation,
        //max 6 tech stack
        tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
        source: "https://github.com/aashish-dhiman/Authorisation",
        demo: null,
    },
    {
        id: 6,
        name: "Keeper - Keep Your Notes",
        description:
            "Inspired by Google Keep, Keeper is a note-taking website developed with React and adorned with Tailwind CSS and Material UI. It offers a user-friendly experience, allowing you to effortlessly create and manage notes. The responsive design ensures a seamless experience across all devices, making note-taking a breeze.",
        img: keeper,
        //max 6 tech stack
        tech: ["React.js", "Tailwind CSS", "Material UI"],
        source: "https://github.com/aashish-dhiman/Keeper-keep-your-notes",
        demo: "https://keeper-aashish.netlify.app/",
    },
];
