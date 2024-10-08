import React from "react";

const PersonalProfile = (props) => {
  return (
    <section className="profile">
      <div className="section-title">
        <h3>Personal Profile</h3>
      </div>
      <div className="section-content">
        <p>{props.profile}</p>
      </div>
    </section>
  );
};

export default PersonalProfile;
