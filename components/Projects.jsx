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
        title: "Demo Video: AR Application",
        description: "This is a simple demo video for an AR Interior appliction.",
        image: "/projects/Picture4.png",
        gitUrl: "https://drive.google.com/file/d/1ADtseSS9TJXD1_pPAgpnMguYEDz9eGso/view?usp=sharing"
    },
    {
        id: 5,
        title: "Business Model Intro: Agrowise",
        description: "This is a video of a brief introduction about the business model 'Agrowise', including prototype.",
        image: "/projects/Picture5.png",
        gitUrl: "https://drive.google.com/file/d/1ct20DRHp7Izk94zHSHERJeDAOOZ8uib6/view?usp=sharing"
    }, 
    {
        id: 6,
        title: "Character Modelling",
        description: "This is a project to create a 3d character using Autodesk 3ds Max.",
        image: "/projects/InProgress.jpg",
        gitUrl: "https://drive.google.com/drive/folders/1_qBw0RK8zn7WXCWRHmeoH3u-BxyHCwOU?usp=sharing"
    }, 
    {
        id: 7,
        title: "Plant Learning",
        description: "This is a project to create a website for posting blog and learn planting using HTML,CSS and C#.",
        image: "/projects/InProgress.jpg",
        gitUrl: "https://drive.google.com/drive/folders/1O8Gwb-aAClVLT8SeqJUQ4K1NzUV_IvTz?usp=sharing"
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
