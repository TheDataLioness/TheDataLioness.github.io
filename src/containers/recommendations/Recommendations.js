import React, {useEffect, useState} from "react";
import {Fade} from "react-reveal";
import "./Recommendations.scss";
import {recommendations} from "../../portfolio";

export default function Recommendations() {
  const [slideIndex, setSlideIndex] = useState(1);

  // Adjust slide heights only once after the component mounts
  useEffect(() => {
    const slides = document.querySelectorAll(".recommendations-slides");
    let maxHeight = 0;

    // Calculate the maximum height of all slides
    slides.forEach(slide => {
      const slideHeight = slide.offsetHeight;
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight;
      }
    });

    // Set the height of all slides to the maximum height
    slides.forEach(slide => {
      slide.style.height = `${maxHeight}px`;
    });
  }, []); // Run only once after the component mounts

  // Show the active slide whenever slideIndex changes
  useEffect(() => {
    showRSlides(slideIndex);
  }, [slideIndex]);

  function recommendationsNext(n) {
    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + n;
      if (newIndex > recommendations.quotes.length) newIndex = 1;
      if (newIndex < 1) newIndex = recommendations.quotes.length;
      return newIndex;
    });
  }

  function showRSlides(n) {
    const slides = document.getElementsByClassName("recommendations-slides");
    const dots = document.getElementsByClassName("recommendations-dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the active slide and highlight the corresponding dot
    slides[n - 1].style.display = "block";
    dots[n - 1].className += " active";
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="recommendations-section" id="recommendations">
        <h1 className="recommendations-heading">Recommendations</h1>
        <div className="recommendations-slideshow-container">
          {recommendations.quotes.map((recommendation, index) => (
            <div className="recommendations-slides" key={index}>
              <div className="recommendations-content">
                <p
                  className="recommendations-quote"
                  dangerouslySetInnerHTML={{__html: `"${recommendation.text}"`}}
                ></p>
                <img
                  className="recommendations-profile-picture"
                  src={recommendation.profilePicture}
                  alt={`${recommendation.name}'s profile`}
                />
                <a
                  className="recommendations-author"
                  href={recommendation.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  - {recommendation.name}
                </a>
                <p className="recommendations-role">{recommendation.role}</p>
              </div>
            </div>
          ))}

          <a
            className="recommendations-prev"
            onClick={() => recommendationsNext(-1)}
          >
            ❮
          </a>
          <a
            className="recommendations-next"
            onClick={() => recommendationsNext(1)}
          >
            ❯
          </a>
        </div>
        <div className="recommendations-dots">
          {recommendations.quotes.map((_, index) => (
            <span
              key={index}
              className={`recommendations-dot${
                slideIndex === index + 1 ? " active" : ""
              }`}
              onClick={() => setSlideIndex(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </Fade>
  );
}
