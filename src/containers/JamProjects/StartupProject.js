import React, {useContext} from "react";
import "./JamProjects.scss";
import {jamProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function JamProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!jamProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="jam-skills-heading">{jamProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {jamProjects.subtitle}
          </p>

          <div className="jam-projects-container">
            {jamProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode jam-project-card jam-project-card-dark"
                      : "jam-project-card jam-project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="jam-project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="jam-card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="jam-project-image-gallery">
                    {project.images.map((img, i) => {
                      return (
                        <div className="jam-project-image">
                          <img
                            src={img}
                            alt={project.projectName}
                            className="jam-card-image"
                          ></img>
                        </div>
                      );
                    })}
                  </div>
                  <div className="jam-project-detail">
                    <h5
                      className={
                        isDark ? "dark-mode jam-card-title" : "jam-card-title"
                      }
                    >
                      {project.projectName}
                    </h5>
                    <hr className="split-line"></hr>
                    {project.tags ? (
                      <div className="jam-project-card-footer">
                        {project.tags.map((tag, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark
                                  ? "dark-mode jam-project-tag-actualtag"
                                  : "jam-project-tag-actualtag"
                              }
                            >
                              {tag.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}

                    <p
                      className={
                        isDark
                          ? "dark-mode jam-card-subtitle"
                          : "jam-card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="jam-project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark
                                  ? "dark-mode jam-project-tag"
                                  : "jam-project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
