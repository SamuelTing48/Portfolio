import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Game Brochure",
        description: "This is a project to design a brochure for a product using Adobe Photoshop.",
        image: "/projects/Picture1.jpg",
        gitUrl: "https://drive.google.com/drive/folders/1OYN4WOVZtRZHO23mYMtdgBeaY73__-DA?usp=drive_link"
    },
    {
        id: 2,
        title: "NumberNest",
        description: "This is a project of creating an application for kids-learning using Adobe Animate.",
        image: "/projects/Picture2.png",
        gitUrl: "https://drive.google.com/drive/folders/1xefY3TLWoE5I9Ai0uii55ySBtVU2Xrkc?usp=drive_link"
    },
    {
        id: 3,
        title: "Character Modelling",
        description: "This is a project to create a 3d character using Autodesk 3ds Max.",
        image: "/projects/InProgress.jpg",
        gitUrl: "#"
    },
    {
        id: 4,
        title: "VR Chemical Simulator",
        description: "This is a project to create a simulator in VR environment using Unity.",
        image: "/projects/InProgress.jpg",
        gitUrl: "#"
    }, {
        id: 5,
        title: "E-portfolio",
        description: "This is a project to create an e-portfolio using Adobe Animate.",
        image: "/projects/InProgress.jpg",
        gitUrl: "#"
    }, {
        id: 6,
        title: "Plant Learning",
        description: "This is a project to create a website for posting blog and learn planting using HTML and C#.",
        image: "/projects/InProgress.jpg",
        gitUrl: "#"
    }, 

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
