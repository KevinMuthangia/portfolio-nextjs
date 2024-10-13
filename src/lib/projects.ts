import adminProject from "@/assests/projects/admin-dash.png";
import jurispro from "@/assests/projects/law-firm.png";

// An admin dashboard with a sleek and intuitive interface built with React and 
// styled using Tailwind CSS. This dashboard is designed for seamless 
// management and visualization of key metrics, providing users with a 
// comprehensive overview of their data.

export const projectsData = [
    {
        title: "Admin Dashboard with React, and TailwindCss",
        description: `
        The admin dashboard is a desktop application built with React and styled using Tailwind CSS. 
        It features a sleek, modern design with both dark and light mode options, allowing users to customize 
        their viewing experience. The dashboard effectively utilizes AG Charts and AG Grid to display data in 
        a visually appealing and organized manner, enabling users to analyze information efficiently. 
        With intuitive navigation, the dashboard provides a user-friendly experience.`,
        image: adminProject,
        stack: ["React", "Typescript", "TailwindCss", "AG Grid", "AG Chart"],
        demoLink: "https://react-admin-dashboard-roan-two.vercel.app/",
        codeLink: "https://github.com/KevinMuthangia/react-admin-dashboard",
    },
    {
        title: "Law Firm Website with Next JS",
        description: `The "Law Firm Next.js" website is a sleek, modern template designed for legal services. 
        Built with Next.js, it features a responsive layout that ensures optimal viewing on all devices. 
        The clean aesthetic emphasizes typography and whitespace, making navigation intuitive. 
        Key sections include services, attorney profiles, client testimonials, and a contact form, 
        enhancing user engagement. The site is optimized for SEO, improving visibility in search results. 
        With fast loading times and interactive elements, it effectively showcases the firm's expertise and 
        builds trust with potential clients.`,
        image: jurispro,
        stack: ["Next JS","React", "Typescript", "TailwindCss"],
        demoLink: "https://law-firm-nextjs.vercel.app/",
        codeLink: "https://github.com/KevinMuthangia/law-firm-nextjs",
    },
]