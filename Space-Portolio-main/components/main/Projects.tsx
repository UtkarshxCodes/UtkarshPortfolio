import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="E-Commerce Website"
          description="Made a MERN Website for an E-Commerce Fashion Brand having a dedicated Admin Panel for managing products ."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Cryptonovae · Freelance "
          description="Dec 2024 - Present - France · Remote Collaborating on a Web3 real estate platform, integrating blockchain for NFT-based fractional property ownership in a frontend assessment. ."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Metaverse Real Estate"
          description="Optimized the NFts Real Estate Website for a Metaverse Real Estate Project in Ukraine , Worked as a Frontend Developer - Remote."
        />
      </div>
    </div>
  );
};

export default Projects;
