import React from "react";

const WorkExperience = (props) => {
  return (
    <section className="work-experience">
      <div className="section-title">
        <h3>Work Experience</h3>
      </div>
      <div className="section-content">
        {props.workExperience.map((job, index) => (
          <div key={index} className="job">
            <h3>{job.title} <span>{job.date}</span></h3>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
