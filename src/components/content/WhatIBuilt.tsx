import React from "react";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import smartbet from "@/app/assets/smartbet.png";
import spotifyWeb3 from "@/app/assets/spotifyWeb3.png";
import boilerplateApi from "@/app/assets/boilerplateApi.png";
import { Button } from "@/components/ui/button";
import { Play, Github } from "lucide-react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

const projects = [
  {
    title: "SmartBet",
    image: smartbet,
    link: "https://github.com/0xNaxzerrr/SmartBet",
    preview: false,
  },
  {
    title: "Spotify Web 3",
    image: spotifyWeb3,
    link: "https://gitlab.com/spotifyweb3",
    preview: false,
  },
  {
    title: "BoilerplateAPI",
    image: boilerplateApi,
    link: "https://github.com/0xNaxzerrr/boilerplate-api",
    preview: false,
  },
];

function Card({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) {
  const { toast } = useToast();
  const router = useRouter();
  return (
    <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl p-12">
      <h1 className="font-bold my-2 mb-2">{title}</h1>
      <Image
        src={image}
        width={500}
        height={500}
        alt={title}
        className="my-2 object-fill rounded-full z-10 whitespace-nowrap text-4xl font-medium text-gray-800 dark:text-gray-200"
      />
      <div className=" flex justify-between">
        <Button variant="ghost">
          <Play />
        </Button>
        <Button variant="ghost" onClick={() => router.push(link)}>
          <Github />
        </Button>
      </div>
    </MagicCard>
  );
}

function WhatIBuilt() {
  return (
    <div className="px-12 rounded-2xl ">
      <h1 className="text-2xl pb-12 text-center">My projects</h1>
      <MagicContainer
        className={
          "flex h-[500px] w-full flex-col gap-6 lg:h-[250px] lg:flex-row mb-6"
        }
      >
        {projects.map((project) => (
          <Card key={project.title} {...project} image={project.image.src} />
        ))}
      </MagicContainer>
    </div>
  );
}

export default WhatIBuilt;
