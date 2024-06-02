"use client";

import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import AboutMe from "@/components/content/AboutMe";
import WhatIBuilt from "@/components/content/WhatIBuilt";
import ContactMe from "@/components/content/ContactMe";
import Skills from "@/components/content/Skills";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="flex min-h-screen w-full flex-col">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pb-28">
              <div id="aboutme" className="pt-24">
                <AboutMe />
              </div>
              <div id="skills" className="pt-24">
                <Skills />
              </div>
              <div id="projects" className="pt-24">
                <WhatIBuilt />
              </div>
              <div id="contact" className="pt-24">
                <ContactMe />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
