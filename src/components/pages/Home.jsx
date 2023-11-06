
import React from 'react';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* Left column content */}
          <h1>Welcome to My Website</h1>
          <p>
            This is the place where you can learn about my projects, skills, and interests.
          </p>
        </div>
        <div className="col-md-6">
          {/* Right column content */}
          {/* <img src="" alt="" className="img-fluid" /> */}
        </div>
      </div>
      <div className="row mt-4">
        
      </div>
      <Footer />
    </div>
  );
}
