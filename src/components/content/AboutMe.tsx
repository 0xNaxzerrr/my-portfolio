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
      <ResizablePanelGroup
        direction="horizontal"
        className="border-x-4 border-black dark:border-slate-300 rounded-t-2xl"
      >
        <ResizablePanel defaultSize={20}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <Image
              width={150}
              height={150}
              src={PP}
              alt="project preview"
              className="rounded-full"
            />
          </div>
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={5}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-bold text-2xl lg:text-3xl">
                  Hi, I&apos;m Lattana
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={15}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="text-sm lg:text-xl">
                  I specialize in Web 2 development with over three years of
                  professional experience. After completing a two-year web
                  developer program at EPITECH, I pursued a Master&apos;s degree
                  in Blockchain Engineer at ESGI to learn more about web3.
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>

      <ResizablePanelGroup
        direction="vertical"
        className="border-x-4 border-black dark:border-slate-300 rounded-b-2xl"
      >
        <ResizablePanel defaultSize={80}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-sm lg:text-xl">
              My career has provided me with opportunities to work on diverse
              projects, enabling me to hone my skills and contribute to
              technological advances. I am deeply passionate about blockchain
              technology. As I continue my professional journey, my aim is to
              delve deeper into the blockchain realm and explore its vast
              potential.
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-bold text-md lg:text-3xl">
              Let&apos;s build something great together !
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
