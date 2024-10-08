import React from "react";

const Header = (props) => {
  const { name, occupation, email, web, mobile } = props.personInfo;
  return (
    <header className="header">
      <div className="name-section">
        <h1>{name}</h1>
        <h2>{occupation}</h2>
      </div>
      <div className="right-section">
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        <p>Web: {web}</p>
        <p>Mobile: {mobile}</p>
      </div>
    </header>
  );
};

export default Header;
