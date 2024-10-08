import React, { Component } from "react";
import Header from "./Header";
import PersonalProfile from "./PersonalProfile";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: {
        name: "Zh Rimel",
        occupation: "Data Scientist",
        email: "abc@gmail.com",
        web: "https://abc.github.io/abc",
        mobile: "01234567890",
      },
      profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      workExperience: [
        {
          title: "Job Title at Company",
          date: "(August 2022 – December 2023)",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Job Title 2 at Company 2",
          date: "(August 2020 – December 2021)",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      skills: [
        "A Key skill",
        "A Key skill",
        "A Key skill",
        "A Key skill",
        "A Key skill",
        "A Key skill",
        "A Key skill",
        "A Key skill",
        "A Key skill",
      ],
      education: [
        {
          institution: "New Jersey Institute of Technology",
          degree: "BS in Computer Science",
          date: "2018 - 2022",
          gpa: "3.9",
        },
        {
          institution: "New Jersey Institute of Technology",
          degree: "MS in Data Science",
          date: "2022 - 2023",
          gpa: "4.0",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <Header personInfo={this.state.personInfo} />
        <PersonalProfile profile={this.state.profile} />
        <WorkExperience workExperience={this.state.workExperience} />
        <Skills skills={this.state.skills} />
        <Education education={this.state.education} />
      </div>
    );
  }
}

export default App;
