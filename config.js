// config.js
const config = {
    siteTitle: "HACKUR - A Professional Developer",
    navLogo: "ANSH!",
    navLinks: [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Skills", href: "#skills" },
        { text: "Projects", href: "#projects" },
        { text: "Contact", href: "#contact" }
    ],
    hero: {
        title: "HACKUR (ANSH)",
        typedStrings: [
            "A Professional Developer",
            "OF MINECRAFT AND GTA 5 MODS",
            "SETUPING DISCORD BOTS"
        ],
        ctaButton: "Contact Me",
        secondaryButton: "View Projects"
    },
    about: {
        title: "About Me",
        description: "Founder of <span class='highlight'>Creators Hub</span>,this hub focuses on DEVELOPMENT.",
        mission: "MISSION HACKER.",
        techStack: ["MINECRAFT SERVER DEVELOPMENT", "GTA V MODDING", "DISCORD SERVER DEVELOPMENT" , "DISCORD BOT DEVELOPMENT"]
    },
    skills: {
        title: "Tech Arsenal",
        skillsList: [
            { icon: "fab fa-java", name: "Java" },
            { icon: "fab fa-python", name: "Python" },
            { icon: "fas fa-database", name: "SQL" },
            { icon: "fas fa-code", name: "Skript" },
            { icon: "fab fa-php", name: "PHP" },
            { icon: "fas fa-cubes", name: "Minecraft Development" }
        ]
    },
    projects: {
        title: "My Projects",
        projectsList: [
            {
                title: "Idle System",
                description: "A ALL IN ONE DISCORD BOT CODED IN PYTHON.",
                image: "idlesystem.gif",
                link: "https://discord.gg/ctsgumtMxq"
            },
            {
                title: "MINECRAFT SERVER LOBBY",
                description: "A CUSTOM LOBBY BASED ON NETHER AND END THEME.",
                image: "lobby.png",
                link: "https://discord.gg/ctsgumtMxq"
            },
            {
                title: "LIFESTEAL SETUP",
                description: "A MINECRAFT LIFESTEAL SERVER SETUP.",
                image: "lssetup.png",
                link: "https://discord.gg/ctsgumtMxq"
            }
            // Add more projects as needed
        ]
    },
    contact: {
        title: "Get in Touch",
        email: {
            icon: "fas fa-envelope",
            title: "Email",
            value: "hackur22pro@gmail.com"
        },
        discord: {
            icon: "fab fa-discord",
            title: "Discord",
            value: "Join Our Community",
            link: "https://discord.gg/NXVwSPfjbE"
        },
        github: {
            icon: "fab fa-github",
            title: "GitHub",
            value: "HACKUR22",
            link: "https://github.com/HACKUR22"
        }
    },
    footer: {
        copyright: "© 2024 HACKUR - Creators Hub. All rights reserved.",
        socialLinks: [
            { icon: "fab fa-linkedin", link: "https://linkedin.com/in/your-profile" },
            { icon: "fab fa-github", link: "https://github.com/HACKUR22" },
            { icon: "fab fa-twitter", link: "https://twitter.com/your-username" }
        ]
    }
};
