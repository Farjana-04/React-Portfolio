import React from 'react';

const Footer = () => {
  return (
    
    <footer className="footer fixed-bottom bg-light text-light py-3">
      <div className="container text-center">
        <a href="https://github.com/Farjana-04" target="_blank" >
        <img src="/assets/git.png" alt="GitHub" className="icon" />
          
        </a>
        <span className="mx-2">|</span>
        <a href="https://www.linkedin.com/in/farjana-akhter-ab328a283/" target="_blank" >
        <img src="/assets/linkedIn.png" alt="LinkedIn" className="icon" />
        </a>
      </div>
    </footer>
    );
  };
  


export default Footer;