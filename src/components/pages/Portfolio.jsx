
// import React from 'react';
// import Project from './Project';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Portfolio() {
//   return (
//     <div className="container text-center">
//       <h2 className="my-4">My Works</h2>
//       <div className="row">
//         {projects.map((project, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <Project {...project} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

const projects = [
  {
    title: 'Project 1',
    description: 'Pokemon Card Collection is a website that allows the user after logging in or signing up to create their own personal binder where they are able to store pokemon cards from their actual collection. This app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.',
    githubLink: 'https://github.com/Farjana-04/Pokemon-Card-Collection',
    demoLink: 'https://pokemon-card-collection-a3dc9dc21790.herokuapp.com/',
    // imageUrl: '/assets/project1.png', // Replace with the actual image path
  },
  {
    title: 'Project 2',
    description: 'Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another applications API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.',
    githubLink: 'https://github.com/Farjana-04/City-Weather-Information',
    demoLink: 'https://farjana-04.github.io/City-Weather-Information/',
    // imageUrl: 'github-logo.png', // Replace with the actual image path
  },
  {
    title: 'Project 3',
    description: 'This task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.',
    githubLink: 'https://github.com/Farjana-04/Logo-Generate',
    demoLink: 'https://drive.google.com/file/d/1hVs2Fkghag69EFB9mYBTiPnH70bpc049/view',
    // imageUrl: 'github-logo.png', // Replace with the actual image path
  },
  {
    title: 'Project 4',
    description: 'This application is called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
    githubLink: 'https://github.com/Farjana-04/Note-Taker-Page',
    demoLink: 'https://note-page-c825db812e82.herokuapp.com/',
    // imageUrl: 'github-logo.png', // Replace with the actual image path
  },
  {
    title: 'Project 5',
    description: 'MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. To build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Used Express.js for routing, a MongoDB database, the Mongoose ODM, a JavaScript date library of our choice or the native JavaScript Date object to format timestamps.',
    githubLink: 'https://github.com/Farjana-04/NoSQL-Social-Network-API',
    demoLink: 'https://drive.google.com/file/d/18op-vn3eV0F4iCGod-CzUZGVHJQtUXAA/view',
    // imageUrl: 'github-logo.png', // Replace with the actual image path
  },
  {
    title: 'Project 6',
    description: 'This task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.',
    githubLink: 'https://github.com/Farjana-04/PWA-Text-Editor',
    demoLink: 'https://editor-text-pwa-7e5f2ccc57d3.herokuapp.com/',
    // imageUrl: 'github-logo.png', // Replace with the actual image path
  },
  
];
