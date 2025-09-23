import React, { useState, useContext } from "react";
import "./GeneralProjects.scss";
import { jamProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function GeneralProjects() {
  const { isDark } = useContext(StyleContext);

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
            {jamProjects.projects.map((project, i) => (
              <ProjectCard key={i} project={project} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

function ProjectCard({ project, isDark }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openUrlInNewTab = (url) => {
    if (!url) return;
    const win = window.open(url, "_blank");
    win.focus();
  };

  const tagColors = ["#6c757d", "#495057"]; // Muted gray and darker muted gray

  return (
    <div
      className={`jam-project-card ${
        isDark ? "jam-project-card-dark" : "jam-project-card-light"
      }`}
    >
      <div className="jam-project-content">
        <div className="jam-project-image">
          <div className="slideshow-container">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.projectName} - ${index}`}
                className={`jam-card-image ${
                  index === currentSlide ? "active" : ""
                }`}
              />
            ))}
            <button className="prev" onClick={prevSlide}>
              &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
              &#10095;
            </button>
          </div>
          <div className="carousel-dots">
            {project.images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="jam-project-detail">
          <h5
            className={
              isDark ? "dark-mode jam-card-title" : "jam-card-title"
            }
          >
            {project.projectName}
          </h5>
          <p
            className={
              isDark ? "dark-mode jam-card-subtitle" : "jam-card-subtitle"
            }
            dangerouslySetInnerHTML={{ __html: project.projectDesc }}
          ></p>
          <div className="jam-project-card-footer">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="jam-project-tag-actualtag"
                style={{ backgroundColor: tagColors[index % tagColors.length] }}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <ul className="jam-project-contributions">
            {project.contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
          <div className="jam-project-card-footer">
            {project.footerLink.map((link, index) => (
              <button
                key={index}
                className="jam-project-button"
                onClick={() => openUrlInNewTab(link.url)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}