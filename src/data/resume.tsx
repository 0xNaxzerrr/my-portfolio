import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, Calendar } from "lucide-react";

export const DATA = {
  name: "Lattana S.",
  initials: "LS",
  url: "https://www.linkedin.com/in/lattana-soucksengphet",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/paris",
  description:
    "Software Engineer turned Blockchain developer. I love building things and learning new things.",
  summary:
    "During the COVID-19 pandemic, I quit my job as a personal driver to undertake a two-years web development program. This sparked my deep interest in blockchain technology and its ecosystem, prompting me to pursue a Master's degree in Blockchain Engineering. Throughout my journey, I have actively engaged in various blockchain-related events, such as hackathons and industry conferences, continually expanding my knowledge and skills.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Solidity",
    "MongoDB",
    "WAGMI",
    "Web3.js",
    "Ethers.js",
    "Hardhat",
    "Github",
    "Docker",
    "TailwindCSS",
    "Prisma",
    "Rust",
  ],
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#events", icon: Calendar, label: "Events" },
  ],
  contact: {
    email: "naxdev75@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0xNaxzerrr",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lattana-soucksengphet/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/intent/follow?screen_name=S_lattana",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atixis",
      href: "https://www.atixis.com/",
      badges: ["La Defense"],
      location: "La Defense, France",
      title: "Software Engineer",
      logoUrl: "/atixis.png",
      start: "Sept 2023",
      end: "Now",
      description:
        "Developed a custom a custom API that enables users to manage their real estate assets, tracking buildings throughout their life cycle, both in the project phase (rehabilitation/construction) and in operation. Implemented websocket connections to the backend to enable real-time updates for the frontend.",
    },
    {
      company: "Sezame",
      badges: ["Paris"],
      href: "https://www.hellosezame.com/",
      location: "Paris, France",
      title: "Software Engineer",
      logoUrl: "/sezame.png",
      start: "Dec 2022",
      end: "Aug 2023",
      description:
        "Developed a SaaS that faciliating the connection between real estate professionals and individuals to help them access home ownership. Implemented several features to help users manage their documents and account statements using open banking. Using hubspot API, i developed a feature that allows professionals users to track their leads and manage their sales funnel.",
    },
    {
      company: "Epitech",
      href: "https://www.epitech.eu/",
      badges: ["Kremlin-Bicêtre"],
      location: "Kremlin-Bicêtre, France",
      title: "Technical assistant",
      logoUrl: "/epitechlogo.png",
      start: "Nov 2022 ",
      end: "Nov 2022",
      description:
        "Technical support for students to overcome programming challenges. Evaluation of projects during presentation swith constructive feedback. Organization and presentation of kick-off sessions to guide students in the early stages of development.",
    },
    {
      company: "Carlab",
      href: "https://carlab.fr/",
      badges: ["Issy-les-moulineaux"],
      location: "Issy-les-moulineaux, France",
      title: "Software Engineer",
      logoUrl: "/carlab.png",
      start: "Jan 2022 ",
      end: "Nov 2022",
      description:
        "Developed a SaaS that allows car dealer to manage their inventory and sales. Implemented a feature that allows users to track their leads and manage their sales funnel. Implemented a 360° car visualizer. Using a AI python api, i implemented a feature that allow to crop car images and remove background. Also implemented notifications system.",
    },
    {
      company: "Self-employed",
      href: "",
      badges: ["Paris", "Geneva"],
      location: "France, Suisse",
      title: "Personal driver",
      logoUrl: "/driver.png",
      start: "Jan 2017",
      end: "Nov 2020",
      description:
        "I was responsible for driving clients to their desired destinations, maintaining the vehicle clean and in good condition, and ensuring the safety of the passengers. Worked with business professionals, saudian & qatari princes.ses.",
    },
    {
      company: "Sushi At Home Paris",
      href: "https://www.instagram.com/sushiathomeparis/",
      badges: ["Paris"],
      location: "Paris, France",
      title: "Sushi Chef",
      logoUrl: "/sushi.png",
      start: "Jan 2015",
      end: "Aug 2017",
      description:
        "As a sushi chef for SushiAtHomeParis, I visited clients' homes to provide a unique culinary experience. My role involved hosting demonstrations of salmon cutting and preparing sushi and various Japanese dishes in front of the guests. This interactive approach allowed clients to enjoy the art of Japanese cuisine in a friendly and personalized manner.",
    },
    {
      company: "Allo Burger",
      href: "https://www.facebook.com/AlloBurger/?locale=fr_FR",
      badges: ["Nancy"],
      location: "Nancy, France",
      title: "Co-founder",
      logoUrl: "/alloburger.png",
      start: "Dec 2012",
      end: "Dec 2014",
      description:
        "Responsible for creating and managing a dark kitchen specializing in the preparation and nighttime delivery of fastfood dishes. My responsibilities included overseeing culinary production, managing delivery logistics, and implementing an effective digital marketing strategy via Facebook Ads. Through targeted campaigns, I successfully increased our brand's visibility and attracted a loyal customer base, contributing to the company's growth and success.",
    },
  ],
  education: [
    {
      school: "ESGI",
      href: "https://www.esgi.fr/",
      degree: "Master's Degree of Blockchain Engineering",
      logoUrl: "/esgi.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Thirdweb",
      href: "https://thirdweb.com/",
      degree: "Build with thirdweb",
      logoUrl: "/thirdweb.png",
      start: "2022",
      end: "2022",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s1",
      logoUrl: "/buildspace.jpg",
      start: "Jun 2023",
      end: "Jul 2023",
    },
    {
      school: "ESGI",
      href: "https://www.esgi.fr/",
      degree: "Bachelor's Degree of Blockchain Engineering",
      logoUrl: "/esgi.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Epitech",
      href: "https://www.epitech.eu/",
      degree: "Web developer certification",
      logoUrl: "/epitechlogo.png",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "ESGI Dex",
      href: "",
      dates: "Jan 2024 - Jul 2024",
      active: true,
      description:
        "Designed, developed a decentralized exchange on the Ethereum blockchain. The platform allows users to swap, stake ERC-20 tokens also users can add or remove liquidity from pools. Users can also earn rewards by staking their tokens or providing liquidity.",
      technologies: [
        "Next.js",
        "Typescript",
        "Solidity",
        "Foundry",
        "WAGMI",
        "RainbowKit",
        "PostgreSQL",
        "TailwindCSS",
        "Golang",
      ],
      links: [
        {
          type: "Source",
          href: "https://gitlab.com/esgidex",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  events: [
    {
      title: "Solana Blinks Day",
      dates: "july 24th 2024",
      location: "Paris, France",
      description:
        "Blockchain + links = Blinks. A day of learning and building on the Solana blockchain.",
      logoUrl: "/superteamearn.png",
      links: [],
    },
    {
      title: "ETHGlobal - Brussels",
      dates: "Jul 12th - 14th, 2024",
      location: "Brussels, Belgium",
      description:
        "Developed a dApp that allows users to create crypto voucher to send to their friends and family.",
      logoUrl: "/ethglobal.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/hmzaakun/thxBro/",
        },
      ],
    },
    {
      title: "NFT Paris - Paris",
      dates: "Feb 23rd - 24th, 2024",
      location: "Paris, France",
      description: "Assist to the NFT paris conferences",
      logoUrl: "/nft-paris.png",
      links: [],
    },
    {
      title: "NFT Paris - Paris",
      dates: "Feb 24th - 25th, 2023",
      location: "Paris, France",
      description: "Assist to the NFT paris conferences",
      logoUrl: "/nft-paris.png",
      links: [],
    },
  ],
} as const;
