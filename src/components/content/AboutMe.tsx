import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";
import PP from "@/app/assets/Nax.png";

export default function AboutMe() {
  return (
    <div className="max-h-screen h-[30vh]">
      <div className="grid grid-cols-3 gap-6">
        <span className="col-span-1">
          <Image
            width={150}
            height={150}
            src={PP}
            alt="project preview"
            className="rounded-full"
          />
        </span>

        <span className="col-span-2">
          <h1 className="text-4xl font-bold mb-4">GM, it&apos;s Nax 👋</h1>
          <p className="text-md">
            I am a fullstack developer with a passion for building web
            applications. I have experience with React, Next.js, Node.js, and
            Express.js. I am currently learning TypeScript and GraphQL.
          </p>
        </span>
      </div>
    </div>
  );
}
