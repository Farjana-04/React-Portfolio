import React from "react";
import Footer from "./Footer";
import "/src/App.css";

export default function About() {
  const toolsAndTechnologies = [
    { name: "HTML", icon: "code" },
    { name: "CSS", icon: "palette" },
    { name: "JavaScript", icon: "language" },
    { name: "React", icon: "web" },
    { name: "Node.js", icon: "dns" },
    { name: "Express", icon: "dns" },
    { name: "MongoDB", icon: "storage" },
   
  ];
  return (
    <div className="background-container">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src="/assets/PH.png"
              alt="Candidate Photo"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8">
            <p>
              Welcome to my page! This is Farjana Akhter. I'm making my entry
              into the world of web development as I have found a passion for
              problem solving on interesting projects through the use of code.
              During the course, we are learning usable, professional websites
              using best practice accessibility HTML, CSS, and JavaScript.
            </p>

            <div>
              <h4>Tools and Technologies I've Worked With:</h4>
              <ul>
                {toolsAndTechnologies.map((tool, index) => (
                  <li key={index}>
                    <i className="material-icons">{tool.icon}</i> {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
