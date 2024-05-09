"use client";

import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import AboutMe from "@/components/content/AboutMe";
import WhatIBuilt from "@/components/content/WhatIBuilt";
import ContactMe from "@/components/content/ContactMe";
import Skills from "@/components/content/Skills";
import { BorderBeam } from "@/components/magicui/border-beam";
const Home: NextPage = () => {
  const [content, setContent] = useState("aboutme");
  return (
    <>
      <Layout setContent={setContent}>
        <div className="flex min-h-screen w-full flex-col">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              {content === "aboutme" && <AboutMe />}
              {content === "projects" && <WhatIBuilt />}
              {content === "contact" && <ContactMe />}
              {content === "skills" && <Skills />}
            </div>
          </div>
        </div>
      </Layout>
      <BorderBeam
        size={250}
        duration={12}
        delay={9}
        anchor={0}
        borderWidth={2}
        className="pointer-events-none"
        colorFrom="#ffffff"
        colorTo="#9aa19c"
      />
    </>
  );
};

export default Home;
