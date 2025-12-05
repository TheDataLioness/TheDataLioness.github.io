import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            if (skills.image) {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <img src={skills.image} alt={skills.skillName}></img>
                  <p className="software-skill-text">
                    <b dangerouslySetInnerHTML={{__html: skills.skillName}}></b>
                  </p>
                </li>
              );
            } else {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i className={skills.fontAwesomeClassname}></i>
                  <p className="software-skill-text">
                    <b dangerouslySetInnerHTML={{__html: skills.skillName}}></b>
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
