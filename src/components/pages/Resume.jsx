import React from 'react';
import Footer from "./Footer";

export default function Resume() {
  return (
    <div className="container text-center my-4">
      <h2>Download Resume</h2>
      <a href= "/assets/Resume.pdf" download className="btn btn-primary">Download</a>
      <Footer />
    </div>
    
  );
}
