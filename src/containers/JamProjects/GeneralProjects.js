import React, {useContext} from "react";
import "./GeneralProjects.scss";
import {jamProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function GeneralProjects() {
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

  let slideIndex = [];

  function plusSlides(n, projectName) {
    showSlides((slideIndex[projectName] += n), projectName);
  }

  function showSlides(n, projectName) {
    if (!slideIndex[projectName]) {
      slideIndex[projectName] = 1;

      console.log(slideIndex);
    }

    let i;
    let x = document.getElementsByClassName(projectName);
    if (n > x.length) {
      slideIndex[projectName] = 1;
    }
    if (n < 1) {
      slideIndex[projectName] = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    try {
      x[slideIndex[projectName] - 1].style.display = "block";
    } catch (e) {
      console.log(e);
    }
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
                  <div className="slideshow-container">
                    {project.images.map((img, i) => {
                      return (
                        <div
                          className={
                            "slideshow-slide fading " +
                            project.projectName.replace(/\s/g, "-") +
                            "-slideshow"
                          }
                        >
                          <img
                            src={img}
                            alt={project.projectName}
                            className="jam-card-image"
                          ></img>
                        </div>
                      );
                    })}
                    <div className={"slideshow-slide"}>
                      {setTimeout(() => {
                        showSlides(
                          1,
                          project.projectName.replace(/\s/g, "-") + "-slideshow"
                        );
                      }, 100)}

                    </div>

                    <a
                      className="prev"
                      onClick={() => {
                        plusSlides(
                          -1,
                          project.projectName.replace(/\s/g, "-") + "-slideshow"
                        );
                      }}
                    >
                      &#10094;
                    </a>
                    <a
                      className="next"
                      onClick={() => {
                        plusSlides(
                          1,
                          project.projectName.replace(/\s/g, "-") + "-slideshow"
                        );
                      }}
                    >
                      &#10095;
                    </a>
                  </div>
                  <div className="jam-project-detail">
                    {project.blog ? (
                      <h5
                        className={
                          isDark
                            ? "dark-mode jam-card-title blog-click-title"
                            : "jam-card-title blog-click-title"
                        }
                        onClick={() => openUrlInNewTab(project.blog)}
                        title={"Click to view blog"}
                      >
                        {project.projectName}
                      </h5>
                    ) : (
                      <h5
                        className={
                          isDark ? "dark-mode jam-card-title" : "jam-card-title"
                        }
                      >
                        {project.projectName}
                      </h5>
                    )}
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
                      dangerouslySetInnerHTML={{__html: project.projectDesc}}
                    ></p>

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