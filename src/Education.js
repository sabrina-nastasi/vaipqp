import React from "react";

const Education = (props) => {
  return (
    <section className="education">
      <div className="section-title">
        <h3>Education</h3>
      </div>
      <div className="section-content">
        {props.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.date}</p>
            <p>GPA: {edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
