import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/App.css";
export default function Portfolio() {

  const projects = [
 {
    title: 'Project 1',
    description: 'Pokemon Card Collection is a website that allows the user after logging in or signing up to create their own personal binder where they are able to store pokemon cards from their actual collection. This app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.',
    githubLink: 'https://github.com/Farjana-04/Pokemon-Card-Collection',
    demoLink: 'https://pokemon-card-collection-a3dc9dc21790.herokuapp.com/',
    image:  "/assets/project1.png",
    alt:"Add a partial icon from second projects Pokemon-CC"  
    },
    
    {
    title: 'Project 2',
    description: 'Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another applications API and using it in the context of their own. This app is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.',
    githubLink: 'https://github.com/Farjana-04/City-Weather-Information',
    demoLink: 'https://farjana-04.github.io/City-Weather-Information/',
    image: "/assets/project2.png",
    alt:"Add a weather app icon"
    },

    {
    title: 'Project 3',
    description: 'This task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.',
    githubLink: 'https://github.com/Farjana-04/Logo-Generate',
    demoLink: 'https://drive.google.com/file/d/1hVs2Fkghag69EFB9mYBTiPnH70bpc049/view',
    image: "/assets/project3.png",
    alt:"SVG icon"
    },

    {
    title: 'Project 4',
    description: 'This application is called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
    githubLink: 'https://github.com/Farjana-04/Note-Taker-Page',
    demoLink: 'https://note-page-c825db812e82.herokuapp.com/',
    image: "/assets/project4.png",
    alt:"Icon from note taker application"
    },

    {
    title: 'Project 5',
    description: 'To build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Used Express.js for routing, a MongoDB database, the Mongoose ODM, a JavaScript date library of our choice or the native JavaScript Date object to format timestamps.',
    githubLink: 'https://github.com/Farjana-04/NoSQL-Social-Network-API',
    demoLink: 'https://drive.google.com/file/d/18op-vn3eV0F4iCGod-CzUZGVHJQtUXAA/view',
    image: "/assets/project5.png",
    alt:"Add a icon from insomnia page"
    },

    {
    title: 'Project 6',
    description: 'This task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.',
    githubLink: 'https://github.com/Farjana-04/PWA-Text-Editor',
    demoLink: 'https://editor-text-pwa-7e5f2ccc57d3.herokuapp.com/',
    image: "/assets/project6.png",
    alt:"Icon from JATE app"
    },
  ];

  return (
    <div className="container text-center">
      <h2 className="my-4">My Works</h2>
      <div className="row">
         {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
 }

function Project({ title, description, githubLink, demoLink, image,alt }) {
  return (
    <div className="project">
      <div className="project-details">
        <h3>{title}</h3>
        {/* <img src={image} className="item-detail img" alt={alt}/> */}
        <p>{description}</p>
        <img src={image} className="item-detail img" alt={alt}/>
        <div className="project-links">
          <a href={githubLink} target="_blank"  className="btn btn-primary">
          GitHub
          </a>
          <a href={demoLink} target="_blank"  className="btn btn-secondary">
            Demo
          </a>
        </div>
        {/* <img src={image} className="item-detail img" alt={alt}/> */}
      </div>
      {/* {image} */}
    </div>
  );
}