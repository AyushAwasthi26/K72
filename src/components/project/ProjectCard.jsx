import React from "react";


const ProjectCard = (prop) => {
  return (
    <>

      <div onClick={() => window.open(prop.link1, "_blank")} className="w-1/2 h-full relative overflow-hidden hover:rounded-[50px] group cursor-pointer transition-all duration-500">
        <img
          src={prop.image1}
          alt=""
          className="object-cover w-full h-full duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center top-0 justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h2 className="bg-black/0 text-white font-[font2] uppercase px-4  pt-2 text-[4vw] border-white border-2 rounded-[50px]">
            View Project
          </h2>
        </div>
      </div>

      <div onClick={() => window.open(prop.link2, "_blank")} className="w-1/2 h-full relative overflow-hidden hover:rounded-[50px] group cursor-pointer transition-all duration-500">
        <img
          src={prop.image2}
          alt=""
          className="object-cover w-full h-full duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="bg-black/0 text-white font-[font2] uppercase px-4  pt-2 text-[4vw] border-white border-2 rounded-[50px]">
            View Project
          </div>
        </div>
      </div>

    </>
  );
};

export default ProjectCard;
