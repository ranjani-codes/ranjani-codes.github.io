import React, {useState} from "react";
import { Tilt } from "react-tilt";
import {motion} from "framer-motion";
import { styles } from "../styles"; 
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, short_description, long_description, tags, source_code_link }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const cardClassName = `bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer`;
  const descriptionOpenClassName = `description-open`;

  return (
    <div
      className={`${cardClassName} ${isDescriptionOpen ? descriptionOpenClassName : ''}`}
      onClick={toggleDescription}
    >
      {isDescriptionOpen ? (
        // Render expanded content when isDescriptionOpen is true
        <div className={`description-box ${descriptionOpenClassName}`}>
          <div className="mt-5 flex items-center">
            {source_code_link ? (
              <div className="flex-grow">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
              </div>
            ) : (
              <div className="flex-grow">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
              </div>
            )}
            {source_code_link ? (
              <div className="ml-3">
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img src={github} alt="github" className="w-5 h-5" />
                </a>
              </div>
            ) : null}
          </div>
          <h4 className="mt-2 text-secondary font-semibold text-[18px]">{short_description}</h4>
          <p className="mt-2 text-secondary text-[14px]">{long_description}</p>
          
          
        </div>
      ) : (
        // Render default content when isDescriptionOpen is false
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <div className="mt-5 flex items-center">
            {source_code_link ? (
              <div className="flex-grow">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
              </div>
            ) : (
              <div className="flex-grow">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
              </div>
            )}
            {source_code_link ? (
              <div className="ml-3">
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img src={github} alt="github" className="w-5 h-5" />
                </a>
              </div>
            ) : null}
          </div>
          <h4 className="mt-2 text-secondary font-semibold text-[18px]">{short_description}</h4>
          
        </Tilt>
      )}
    </div>
  );
};


const Projects = () => {
  
  return (
    <>
      
      <p className={`${styles.sectionSubText} `} id="Projects">My work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
    

      <div className="w-full flex 'mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories, where possible. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            />
        ))}

      </div>
    </>
  );
};
  
export default SectionWrapper(Projects, "");