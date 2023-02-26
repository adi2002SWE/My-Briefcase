import React from "react";
import "./Work.css";
import constant from "../../constant.json";
import Heading from "../../components/Heading/Heading";
const Work = () => {
  return (
    <section id="Work">
      <Heading index="03" heading="Projects" />
      <div className="work_container">
        {constant.projects.map((project, idx) => (
          <div className="work_project">
            <div className="work_left">
              <a href={project.live} target="_blank" rel="noreferrer">
                <img className="work_img" src={require('./MyPro.jpg')} alt="MyProject" />
              </a>
            </div>
            <div className="work_right">
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.title}
              </a>
              <p className="work_desc">{project.desc1}</p>
              <p className="work_desc">{project.desc2}</p>
              <div className="work_skill_container">{project.skills}</div>
              <div>
                <a
                  href= {project.github}
                  target="_blank"
                  className="work_link"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="work_link"
                  rel="noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
