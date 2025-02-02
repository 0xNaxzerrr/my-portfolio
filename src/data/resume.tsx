import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, Calendar } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Lattana S.",
  initials: "LS",
  url: "https://www.linkedin.com/in/lattana-soucksengphet",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/paris",
  description:
    "Software Engineer turned Blockchain developer. I love building things and learning new things.",
  summary:
    "Passionate about technological innovation and decentralization, I am a blockchain developer specialized in creating decentralized applications (dApps) and developing smart contracts. My expertise spans the entire Web3 ecosystem, from designing to implementing innovative blockchain solutions.",
  avatarUrl: "/me.png",
  skills: [
    "Solidity",
    "Foundry",
    "Hardhat",
    "Rust",
    "Solana",
    "Git",
    "Docker",
    "Azure Devops",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "TypeScript",
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
        url: "https://x.com/intent/follow?screen_name=Naxzerrr",
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
        "Developed a custom API that enables users to manage their real estate assets, tracking buildings throughout their life cycle, both in the project phase (rehabilitation/construction) and in operation. Implemented websocket connections to the backend to enable real-time updates for the frontend.",
    },
    {
      company: "Kugle Corp",
      href: "https://kugle.app/",
      badges: ["Remote"],
      location: "Remote",
      title: "Software Engineer | Blockchain Enginner",
      logoUrl: "/kuglecorp_logo.jpg",
      start: "Nov 2024",
      end: "Jan 2025",
      description:
        "Developed a Leaderboard API with TypeScript and Node.js. Integrated an On/Off Ramp Payment Solution with Thirdweb. Built a Smart Contract for Token Vesting in Solidity",
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
      school: "Alyra x Solana Foundation",
      href: "https://www.alyra.fr/",
      degree: "Solana x Rust Bootcamp",
      logoUrl: "/alyra.png",
      start: "Feb 2025",
      end: "Mar 2025",
    },
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
      title: "MultiSigWallet",
      href: "https://github.com/0xNaxzerrr/MultiSigWallet",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "MultiSig Wallet - Solidity smart contract with multi-signature management",
      technologies: [
        "Solidity",
        "Foundry"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xNaxzerrr/MultiSigWallet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/multisigwallet.png",
      video: "",
    },
    {
      title: "GOLDLINK",
      href: "https://github.com/0xNaxzerrr/GoldLink",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "GoldLink is a Web3 project combining a gold-backed ERC-20 token, a Chainlink VRF-powered lottery, and a cross-chain bridge for seamless transfers between Sepolia and BSC Testnet.",
      technologies: [
        "Solidity",
        "Foundry",
        "OpenZeppelin",
        "Chainlink VRF / CCIP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xNaxzerrr/GoldLink",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/goldlink.png",
      video: "",
    },
    {
      title: "L3ARN",
      href: "https://github.com/0xNaxzerrr/L3ARN",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "L3ARN is an innovative blockchain-based platform designed to revolutionize academic certification through decentralized, verifiable, and immutable digital certificates. By leveraging Avalanche subnet technology and smart contracts, L3ARN provides a secure and transparent solution for issuing, managing, and validating academic credentials.",
      technologies: [
        "avalanche",
        "solidity",
        "foundry",
        "wagmi",
        "next.js",
        "tailwindcss",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xNaxzerrr/L3ARN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/L3ARN.png",
      video: "",
    },
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
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://gitlab.com/esgidex",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/ESGIDEX.mp4",
    },
    {
      title: "ThxBro",
      href: "https://github.com/hmzaakun/thxBro/",
      dates: "12th - 14th Jul 2024",
      active: true,
      description:
        "The ultimate platform for crypto prepaid cards. Create and distribute prepaid crypto cards easily. Secure, user-friendly, and ideal for gift campaigns or your friends and family.",
      technologies: [
        "Next.js",
        "Typescript",
        "Solidity",
        "Foundry",
        "WAGMI",
        "WalletConnect",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/hmzaakun/thxBro/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/thxbro.gif",
      video: "",
    },
    {
      title: "SpotifyWeb3",
      href: "https://gitlab.com/spotifyweb3",
      dates: "March 2024",
      active: true,
      description:
        "Developed a decentralized music streaming platform on the Ethereum blockchain. Artists can upload their music as NFTs and earn royalties directly from their fans. Users can listen to music, tip artists.",
      technologies: [
        "Next.js",
        "Node.js",
        "Typescript",
        "Solidity",
        "OpenZeppelin Defender Relayer",
        "TailwindCSS",
        "ethers.js",
        "web3.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://gitlab.com/spotifyweb3",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/spotifyweb3.png",
      video: "",
    },
    {
      title: "AuthentiWatch",
      href: "https://github.com/Julien-epi/AuthentyWatch",
      dates: "April 2024",
      active: true,
      description:
        "Developed a decentralized watch authentication platform. Users can verify the authenticity of their luxury watches by scanning the NFC card associated with the watch. Each watch is minted as an NFT on the Ethereum blockchain.",
      technologies: [
        "Next.js",
        "Typescript",
        "Docker",
        "Node.js",
        "TailwindCSS",
        "Solidity",
        "web3.js",
        "viem",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Julien-epi/AuthentyWatch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/authentiwatch.png",
      video: "",
    },
  ],
  events: [
    {
      title: "Rust & Solana discovery day",
      dates: "Sept 5th - 6th, 2024",
      location: "Paris, France",
      description:
        "A two-day event to learn and build on the Solana blockchain with Rust programming language.",
      logoUrl: "/42blockchain_logo.png",
      links: [],
    },
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
      title: "ESGI Blockchain Day",
      dates: "June 27th, 2024",
      location: "Paris, France",
      logoUrl: "/esgi_logo.png",
      description:
        "Involvement of multiple blockchain players, including Forge by Société Générale, MetaDev3, and XRPL Commons on the theme of development and innovation in the blockchain ecosystem.",
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
