import IconCloud from "../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "vercel",
  "solidity",
  "docker",
  "git",
  "github",
  "gitlab",
  "mongodb",
  "web3dotjs",
  "ethereum",
  "thirdweb",
];

const Skills = () => {
  return (
    <div className="pb-6 relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="text-center text-2xl pb-6 md:pb-12">
        All my stack that i&apos;ve been working with many years
      </h1>

      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default Skills;
