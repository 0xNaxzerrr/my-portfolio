import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import smartbet from "@/app/assets/smartbet.png";
import spotifyWeb3 from "@/app/assets/spotifyWeb3.png";
import boilerplateApi from "@/app/assets/boilerplateApi.png";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SmartBet",
    image: smartbet,
    link: [
      "https://github.com/0xNaxzerrr/SmartBet",
      "https://smartbet.vercel.app/",
    ],
    date: "Jan 2024",
    preview: false,
    description: "A betting platform for the future",
    stack: ["React", "TypeScript", "Solidity", "Hardhat", "Ethers.js"],
  },
  {
    id: 2,
    title: "Spotify Web 3",
    image: spotifyWeb3,
    link: ["https://gitlab.com/spotifyweb3", "https://spotifyweb3.vercel.app/"],
    date: "Jan 2024",
    preview: false,
    description: "A decentralized music streaming platform",
    stack: ["React", "TypeScript", "Solidity", "Hardhat", "Ethers.js"],
  },
  {
    id: 3,
    title: "BoilerplateAPI",
    image: boilerplateApi,
    link: ["https://github.com/0xNaxzerrr/boilerplate-api"],
    date: "Jan 2024",
    preview: false,
    description: "A boilerplate API for your next project",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "TypeScript"],
  },
];

function Card({
  title,
  image,
  link,
  colSpan,
  date,
  description,
  stack,
}: {
  title: string;
  image: string;
  link: string[];
  colSpan: number;
  date: string;
  description: string;
  stack: string[];
}) {
  const { toast } = useToast();
  const router = useRouter();
  return (
    <div
      className={`p-2 col-span-${colSpan} border border-slate-500 flex w-full cursor-pointer flex-col overflow-hidden shadow-2xl rounded-md text-left`}
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full object-cover"
        />
      </div>
      <span className=" flex flex-col">
        <h1 className="font-bold text-lg text-gray-800 dark:text-gray-200">
          {title}
        </h1>
        <h3 className="text-sm italic">{date}</h3>
        <p className="text-sm">{description}</p>
        <div className=" flex flex-wrap gap-2 mt-2">
          {stack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="text-sm flex mt-2">
          {link.map((l, i) => (
            <Badge
              key={l}
              onClick={() => {
                window.open(l, "_blank");
              }}
              rel="noopener noreferrer"
              className="mr-2"
            >
              {i === 0 ? (
                <>
                  <ExternalLink
                    size={16}
                    strokeWidth={1.25}
                    style={{ marginRight: "8px" }}
                  />{" "}
                  Website
                </>
              ) : (
                <>
                  <Github
                    size={16}
                    strokeWidth={1.25}
                    style={{ marginRight: "8px" }}
                  />{" "}
                  Source code
                </>
              )}
            </Badge>
          ))}
        </div>
      </span>
    </div>
  );
}

function WhatIBuilt() {
  return (
    <div className="pb-6">
      <h1 className="text-2xl pb-12 text-center">Check out my latest work</h1>
      <div
        className={"grid grid-cols-4 w-full flex-col gap-6 lg:flex-row mb-6"}
      >
        {projects.map((project) => (
          <Card
            colSpan={2}
            key={project.title}
            title={project.title}
            link={project.link}
            date={project.date}
            description={project.description}
            stack={project.stack}
            image={project.image.src}
          />
        ))}
      </div>
    </div>
  );
}

export default WhatIBuilt;
