import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
//write project card first then only go Projects write the data inside []
// put parameters inside the function
const ProjectCard = ({imgUrl, title, description, gitUrl}) => {
    return(
        <div>
            {/* <Image src={imgUrl} height={208} width={1000} className="md:h-72 hover:opacity-30 object-contain bg-no-repeat bg-center rounded-t-xl"/> */}
            <div
                className="h-52 rounded-t-xl relative group center center bg-no-repeat"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
            </div>
            
            <div className="text-white">
                <h5 className="font-semibold text-xl mb-2">{title}</h5>
                <p className="text-">{description}</p>
            </div>

        </div>
    );    
};

export default ProjectCard;

