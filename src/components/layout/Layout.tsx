import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";
import DotPattern from "../magicui/dot-pattern";

interface LayoutProps {
  children: React.ReactNode;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Layout: React.FC<LayoutProps> = ({ children, setContent }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setContent={setContent} />
      <div className="flex flex-col flex-1 w-full mt-6 md:mt-16">{children}</div>
      <Footer />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] "
        )}
      />
    </div>
  );
};

export default Layout;
