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
        title: "Simple Website: APU Residence",
        description: "This is a project of creating an website using HTML and CSS.",
        image: "/projects/Picture3.png",
        gitUrl: "https://github.com/SamuelTing48/WDD-website"
    },
    
    {
        id: 4,
        title: "3D Model (Elf)",
        description: "This is a 3D model created from 3Ds Max, combining with Adobe Substance 3D Painter and Marmoset",
        image: "/projects/render2004.png",
        gitUrl: "https://drive.google.com/drive/folders/1_qBw0RK8zn7WXCWRHmeoH3u-BxyHCwOU?usp=drive_link"
    },  

    {
        id: 5,
        title: "Sprout Space",
        description: "This is a project to create a website for posting blog and learn planting using ASP.net(C#), CSS, and SQL.",
        image: "/projects/Picture7.png",
        gitUrl: "https://github.com/SamuelTing48/Wapp"
    }, 
    {
        id: 6,
        title: "Group Project Video (Fit Again)",
        description: "This is a group project to create a video using Adobe After Effect and Adobe Premier Pro.",
        image: "/projects/Screenshot 2026-03-19 130017.png",
        gitUrl: "https://drive.google.com/file/d/10MutFuxG2iNOfYtkL_k3QHbwswkgfNWa/view?usp=sharing"
    }, 

    {
        id: 7,
        title: "Fire Fighter Simulator",
        description: "This is a project to create a VR application to simulate the fire fighting situation.",
        image: "/projects/Screenshot 2026-03-19 130127.png",
        gitUrl: "https://drive.google.com/file/d/1ipR6_GjZSFDuvigb5eSoWrpqm4nrrTtT/view"
    }, 
    {
        id: 8,
        title: "3D Model (Buildings)",
        description: "This is a 3D model group project created from 3Ds Max, combining with Adobe Substance 3D Painter and Unreal Engine",
        image: "/projects/Image_20260208210910.png",
        gitUrl: "https://drive.google.com/drive/folders/1aNKOt0hiNbTfGr_DUkHypWj5YpBgrU_k?usp=sharing"
    },
    {
        id: 9,
        title: "FYP: Release Room",
        description: "This is a FYP project to create a VR application from Unity to help university students to release stress.",
        image: "/projects/Screenshot 2026-01-05 224633.png",
        gitUrl: "https://drive.google.com/drive/folders/1hDqCGMwlk7BGpi05MfQPVmTRi1QKMtOV?usp=sharing"
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
